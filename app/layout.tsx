import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.academialogika.com"),
  title: {
    default: "Academia Lógika | Clases de regularización en línea",
    template: "%s | Academia Lógika",
  },
  description:
    "Clases de regularización en línea de Español y Matemáticas impartidas por la maestra Yusy Falcón. Programas personalizados con seguimiento constante desde primaria hasta preparatoria.",
  keywords: [
    "clases de regularización",
    "tutorías en línea",
    "matemáticas",
    "español",
    "preparación para exámenes",
    "academia logika",
    "asesoría educativa personalizada",
  ],
  category: "education",
  authors: [{ name: "Yusy Falcón" }],
  creator: "Academia Lógika",
  publisher: "Academia Lógika",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      "es-MX": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.academialogika.com",
    siteName: "Academia Lógika",
    title: "Academia Lógika | Clases de regularización online de Español y Matemáticas",
    description:
      "Clases personalizadas en línea para reforzar Español y Matemáticas con metodologías dinámicas y seguimiento constante.",
    images: [
      {
        url: "/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Academia Lógika - Clases online de Español y Matemáticas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academia Lógika | Clases de regularización en línea",
    description:
      "Tutorías personalizadas de Español y Matemáticas para primaria, secundaria y preparatoria.",
    images: ["/Logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
