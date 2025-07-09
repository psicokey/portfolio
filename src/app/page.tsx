// src/app/page.tsx
'use client'

import Link from 'next/link'
import { useThemeHandler } from '@/lib/theme-handler'
import { motion } from 'framer-motion'

export default function HomePage() {
  useThemeHandler();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Keyberth Márquez
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl mt-4 text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Desarrollador Web Junior · React · Node · Next.js
      </motion.h2>

      <motion.p
        className="mt-6 max-w-xl text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Psicólogo convertido en desarrollador web. Apasionado por crear experiencias digitales funcionales, humanas y bien organizadas.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow transition"
        >
          Contáctame
        </Link>
      </motion.div>
    </main>
  )
}
