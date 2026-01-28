# syntax=docker/dockerfile:1

# Etapa base: imagen ligera de Node.js sobre Alpine Linux
FROM node:20-alpine AS base
# Instala compatibilidad con glibc para dependencias nativas frecuentes
RUN apk add --no-cache libc6-compat
# Define el directorio de trabajo compartido por las etapas
WORKDIR /app

# Etapa de dependencias: instala las dependencias declaradas en package.json
FROM base AS deps
# Copia los manifiestos para garantizar la reproducibilidad de npm ci
COPY package.json package-lock.json* ./
# Instala dependencias en modo limpio (sin modificar package-lock.json)
RUN npm ci

# Etapa de compilación: genera la versión optimizada de la app Next.js
FROM base AS builder
# Desactiva la telemetría de Next.js durante el build
ENV NEXT_TELEMETRY_DISABLED=1
# Recupera las dependencias previamente instaladas
COPY --from=deps /app/node_modules ./node_modules
# Copia el código fuente y archivos de configuración restantes
COPY . .
# Ejecuta la compilación de producción
RUN npm run build

# Etapa de ejecución: imagen final mínima para servir la aplicación
FROM base AS runner
# Ajusta variables de entorno para producción
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
# Crea un usuario no privilegiado para ejecutar la app con mayor seguridad
RUN addgroup -g 1001 nodejs \
  && adduser -S -u 1001 nextjs
# Copia los artefactos necesarios desde la etapa de compilación
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# Cambia al usuario sin privilegios antes de iniciar el servidor
USER nextjs
# Expone el puerto de escucha del servidor Next.js
EXPOSE 3000
# Arranca la aplicación usando el servidor independiente generado por Next.js
CMD ["node", "server.js"]
