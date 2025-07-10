// src/app/page.tsx
'use client'

import { useThemeHandler } from '@/lib/theme-handler'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function HomePage() {
  useThemeHandler();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 pb-8 text-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
        {/* Foto con clip-path poligonal */}
        <div className="hidden md:block flex-shrink-0 mb-8 md:mb-0">
          <div
            className="w-56 h-72 relative shadow-lg border-4 border-blue-400 dark:border-blue-600"
            style={{
              clipPath:
                'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/keyPic.png" // Cambia por el nombre real de tu foto en /public
              alt="Keyberth Márquez"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Contenido textual */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Desarrollador Web Junior · React · Node · Next.js
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Psicólogo convertido en desarrollador web. Apasionado por crear experiencias digitales funcionales, humanas y bien organizadas.
          </motion.p>
          <motion.p
            className="mt-6 mb-6 max-w-xl text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Como desarrollador de software, mi misión es crear soluciones digitales que mejoren la vida de las personas y optimicen los procesos empresariales. Me apasiona la innovación y el aprendizaje continuo, y busco siempre superar las expectativas de mis clientes.
          </motion.p>
          <motion.div className="flex flex-col justify-items-center sm:flex-row gap-4 justify-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}>
                      <a
                        href="/projects"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold shadow transition-all duration-300"
                      >
                        Ver Proyectos
                      </a>
                      <a
                        href="/CV_Keyberth_Marquez_ES2025.pdf"
                        download
                        className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                      >
                        Descargar CV
                      </a>
                    </motion.div>
          
                    {/* Social Links */}
                    <motion.div className="flex justify-center space-x-6 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}>
                      <a
                        href="https://github.com/psicokey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 shadow"
                        aria-label="GitHub"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href="https://linkedin.com/in/keyberth-marquez-51031811a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 shadow"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin size={24} />
                      </a>
                      <a
                        href="#contact"
                        className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 shadow"
                        aria-label="Email"
                      >
                        <FaEnvelope size={24} />
                      </a>
                    </motion.div>
        </div>
      </div>
    </main>
  )
}
