"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="max-w-xl mx-auto mt-24 mb-8 py-12 px-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 transition-colors">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">Contacto</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300 text-center">
        ¿Quieres ponerte en contacto? Completa el formulario o escríbeme a{" "}
        <a
          href="mailto:keyberthms@gmail.com"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          keyberthms@gmail.com
        </a>
      </p>
      {sent ? (
        <div className="text-green-600 dark:text-green-400 text-center font-semibold">
          ¡Gracias por tu mensaje! Te responderé pronto.
        </div>
      ) : (
        <form
          className="space-y-6"
          onSubmit={e => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div>
            <label className="block mb-1 text-gray-800 dark:text-gray-200 font-medium">Nombre</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-800 dark:text-gray-200 font-medium">Correo electrónico</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-800 dark:text-gray-200 font-medium">Mensaje</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold transition"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </section>
  );
}