import Image from "next/image";

export default function Home() {
  return (
  <main className="bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900 min-h-screen">
    {/* Navbar */}
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/Logo.jpg"
            alt="Logo Academia Lógika"
            width={50}
            height={50}
            className="mr-3"
          />
          <span className="text-xl font-bold text-gray-800">
            Academia Lógika
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#metodologia"
            className="text-gray-600 hovr:text-blue-600 transition-colors flex items-center"
          >
            <span className="mr-1">📖</span> Metodología
          </a>
          <a
            href="#beneficios"
            className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
          >
            <span className="mr-1">🌟</span> Beneficios
          </a>
          <a
            href="#espanol"
            className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
          >
            <span className="mr-1">✍️</span> Español
          </a>
          <a
            href="#matematicas"
            className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
          >
            <span className="mr-1">➗</span> Matemáticas
          </a>
          <a
            href="#contacto"
            className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
          >
            <span className="mr-1">📞</span> Contacto
          </a>
        </div>
        <button type="button" className="md:hidden text-gray-600">☰</button>
      </div>
    </nav>
    {/* Hero Section */}
    <section className="bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-24 px-6 text-center relative overflow-hidden">
      <div className="relative z-10">
        <div className="mb-8 animate-bounce">
          <Image
            src="/Logo.jpg"
            alt="Logo Academia Lógika"
            width={120}
            height={120}
            className="mx-auto drop-shadow-lg"
          />
        </div>
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          Academia Lógika
        </h1>
        <h2 className="text-3xl mb-8 font-light">Aprende con sentido</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Refuerza tus conocimientos, mejora tus calificaciones y estudia con
          confianza. Clases personalizadas de Español y Matemáticas, desde nivel
          básico hasta preparatoria.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
          <div className="flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 backdrop-blur-sm">
            <span className="text-2xl mr-2">🛜</span>
            <span className="text-lg font-medium text-gray-800">
              Modalidad 100% online
            </span>
          </div>
          <div className="flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 backdrop-blur-sm">
            <span className="text-2xl mr-2">🏠</span>
            <span className="text-lg font-medium text-gray-800">
              Aprende desde la comodidad de tu hogar
            </span>
          </div>
        </div>
        <a
          href="https://wa.me/529999075334?text=Hola%20me%20gustaría%20agendar%20mi%20evaluación%20diagnóstica%20gratuita"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-purple-600 inline-block"
        >
          👉 Agenda tu evaluación diagnóstica gratuita
        </a>
      </div>
    </section>

    {/* Metodología Lógika */}
    <section
      id="metodologia"
      className="py-20 px-6 max-w-6xl mx-auto bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
        Metodología Lógika
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">🎯</div>
          <h3 className="text-xl font-semibold mb-2 text-center">
            Personalizada
          </h3>
          <p className="text-gray-600 text-center">
            Enseñanza adaptada a los objetivos del alumno
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">📖</div>
          <h3 className="text-xl font-semibold mb-2 text-center">
            Material Adaptado
          </h3>
          <p className="text-gray-600 text-center">
            Contenido según nivel escolar y ritmo de aprendizaje
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">📊</div>
          <h3 className="text-xl font-semibold mb-2 text-center">
            Seguimiento Constante
          </h3>
          <p className="text-gray-600 text-center">
            Evaluación continua del progreso académico
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">🎉</div>
          <h3 className="text-xl font-semibold mb-2 text-center">
            Clases Dinámicas
          </h3>
          <p className="text-gray-600 text-center">
            Divertidas con ejemplos prácticos
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="text-4xl mb-4 text-center">🚫</div>
          <h3 className="text-xl font-semibold mb-2 text-center">Sin Tareas</h3>
          <p className="text-gray-600 text-center">
            Enfoque en el aprendizaje efectivo
          </p>
        </div>
      </div>
    </section>

    {/* Beneficios */}
    <section
      id="beneficios"
      className="bg-linear-to-r from-purple-50 via-pink-50 to-blue-50 py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
        🌟 Beneficios
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-2">
            Refuerzo en objetivos clave
          </h3>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">
            Mejores hábitos de estudio
          </h3>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="text-xl font-semibold mb-2">
            Mayor comprensión y seguridad
          </h3>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">
            Resultados visibles desde las primeras sesiones
          </h3>
        </div>
      </div>
    </section>

    {/* Regularización en Español */}
    <section
      id="espanol"
      className="py-20 px-6 max-w-6xl mx-auto bg-linear-to-r from-green-50 via-blue-50 to-purple-50"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
        ✍️ Regularización en Español
      </h2>
      <p className="text-xl mb-10 text-center text-gray-600">
        Fortalece tus habilidades de comunicación y expresión:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-linear-to-r from-green-100 to-green-200 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-green-800">
            Comprensión lectora
          </h3>
          <p className="text-gray-700">Análisis y respuesta de textos</p>
        </div>
        <div className="bg-linear-to-r from-blue-100 to-blue-200 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">
            Fluidez lectora
          </h3>
          <p className="text-gray-700">Ritmo, entonación y seguridad</p>
        </div>
        <div className="bg-linear-to-r from-yellow-100 to-yellow-200 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-800">
            Ortografía y gramática
          </h3>
          <p className="text-gray-700">Reglas prácticas</p>
        </div>
        <div className="bg-linear-to-r from-purple-100 to-purple-200 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-purple-800">
            Redacción y expresión escrita
          </h3>
          <p className="text-gray-700">Textos claros, coherentes y creativos</p>
        </div>
      </div>
    </section>

    {/* Regularización en Matemáticas */}
    <section
      id="matematicas"
      className="bg-linear-to-r from-indigo-50 via-purple-50 to-pink-50 py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
        ➗ Regularización en Matemáticas
      </h2>
      <p className="text-xl mb-10 text-center text-gray-600">
        Aprende paso a paso, con ejercicios claros y adaptados a tu nivel:
      </p>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold mb-6 text-blue-600">Primaria</h3>
          <p className="text-lg text-gray-700">
            Tablas, operaciones, fracciones, geometría, problemas y razonamiento
            lógico
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold mb-6 text-green-600">Secundaria</h3>
          <p className="text-lg text-gray-700">
            Álgebra, ecuaciones, geometría
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-3xl font-bold mb-6 text-purple-600">
            Preparatoria
          </h3>
          <p className="text-lg text-gray-700">
            Funciones, logaritmos, trigonometría y cálculo
          </p>
        </div>
      </div>
    </section>

    {/* Preparación y apoyo */}
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <div className="bg-linear-to-r from-yellow-50 via-orange-50 to-red-50 p-12 rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          � Preparación para exámenes y apoyo en tareas escolares
        </h2>
        <p className="text-2xl text-gray-700">
          💡 Desarrolla confianza y gusto por las matemáticas
        </p>
      </div>
    </section>

    {/* Modalidad */}
    <section className="bg-linear-to-r from-blue-100 via-purple-100 to-pink-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
        🏠 Modalidad
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
          <div className="text-5xl mb-4">💻</div>
          <h3 className="text-2xl font-semibold mb-2">Clases 100% online</h3>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
          <div className="text-5xl mb-4">👤</div>
          <h3 className="text-2xl font-semibold mb-2">
            Atención personalizada
          </h3>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
          <div className="text-5xl mb-4">⏰</div>
          <h3 className="text-2xl font-semibold mb-2">Horarios flexibles</h3>
        </div>
      </div>
    </section>

    {/* Contacto */}
    <section
      id="contacto"
      className="py-20 px-6 max-w-6xl mx-auto text-center bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50"
    >
      <h2 className="text-4xl font-bold mb-12 text-purple-800">📱 Contacto</h2>
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <span className="text-3xl mr-4">📞</span>
            <p className="text-xl">
              WhatsApp:{" "}
              <a
                href="https://wa.me/9999075334"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                999 907 5334
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-3xl mr-4">📧</span>
            <p className="text-xl">
              Correo:{" "}
              <a
                href="mailto:academialogika@gmail.com"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                academialogika@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Sobre la Maestra */}
    <section className="py-20 px-6 max-w-6xl mx-auto text-center bg-purple-50">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Conoce a tu Maestra
      </h2>
      <div className="bg-white p-10 rounded-2xl shadow-xl flex items-center">
        <Image
          src="/imagen maestra.png"
          alt="Maestra de Academia Lógika"
          width={100}
          height={50}
          className="rounded-full mr-6 object-cover border-4 border-purple-300 shadow-lg"
        />
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4">
            Yusy Falcón
            <br />
            Lic. Educación Especial
          </h3>
          <p className="text-lg text-gray-600">
            Con años de experiencia enseñando Español y Matemáticas a
            estudiantes de primaria, secundaria y preparatoria. Mi pasión es
            hacer que el aprendizaje sea divertido y accesible para todos.
          </p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-12 px-6 text-center">
      <p className="text-xl mb-2">Aprender nunca fue tan claro</p>
      <p className="text-2xl font-bold">
        Lógika — Tu aliada en Español y Matemáticas
      </p>
    </footer>
  </main>
  );
}
