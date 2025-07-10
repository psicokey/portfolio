import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero () {
  return (
    <section id="home" className="min-h-screen py-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-transparent to-blue-400/20 dark:from-blue-900/20 dark:to-blue-700/20 animate-none"></div>
      
      {/* Floating Elements */}
      <div className="top-20 left-10 w-24 h-24 bg-blue-300/30 dark:bg-blue-800/30 rounded-2xl blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-700/30 rounded-2xl blur-2xl animate-pulse delay-1000"></div>

      <div className="container min-w-[100dvw] mx-auto px-6 text-center relative">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <motion.div className="mb-8 inline-flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
            <div className="w-32 h-32 bg-gradient-to-tr from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 p-1 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white bg-gray-200 dark:bg-gray-800 border-4 border-blue-400 dark:border-blue-600 shadow-lg"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)" }}>
                <Image src={"/keyLogo.png"} alt="Keyberth Márquez" width={128} height={128} className="rounded-lg object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Main Text */}
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Desarrollador
            </span>
            <br />
            <span className="text-gray-900 dark:text-gray-100">Full Stack</span>
          </motion.h1>
          
          <motion.p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}>
            Creo experiencias digitales excepcionales con código limpio y diseño moderno.
            Especializado en React, Next.js y tecnologías web modernas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
            <a
              href="#projects"
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

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <FaArrowDown className="mx-auto text-gray-400 dark:text-gray-500" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};