"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const whatsappNumber = "56974624872";
  const message = "Hola, quiero agendar una reunión para hablar de mi proyecto";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-[100]"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors"
        aria-label="Chatear por WhatsApp"
      >
        {/* Pulsing ring effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 group-hover:opacity-0 transition-opacity" />
        
        <FaWhatsapp size={32} />
        
        {/* Tooltip/Label */}
        <span className="absolute right-full mr-4 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 dark:border-gray-700 pointer-events-none">
          ¿Hablamos por WhatsApp?
        </span>
      </motion.a>
    </motion.div>
  );
}
