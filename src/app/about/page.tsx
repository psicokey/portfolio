"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center max-w-2xl mx-auto mt-24 mb-8 py-12 px-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 transition-colors">
      <motion.h1
        className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre mí
      </motion.h1>
      <motion.p
        className="text-lg mb-2 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ¡Hola! Soy <strong>Keyberth Márquez</strong>, desarrollador web junior
        apasionado por la tecnología y el aprendizaje constante.
      </motion.p>
      <motion.p
        className="mb-2 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Tengo experiencia en <strong>React</strong>, <strong>Node.js</strong> y{" "}
        <strong>Next.js</strong>. Me gusta crear aplicaciones web modernas,
        eficientes y fáciles de usar.
      </motion.p>
      <motion.p
        className="text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Siempre estoy buscando nuevos retos y oportunidades para crecer
        profesionalmente. ¡Gracias por visitar mi portfolio!
      </motion.p>
    </section>
  );
}