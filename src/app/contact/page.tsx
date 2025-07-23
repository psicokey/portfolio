"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");

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
      {status === "success" ? (
        <div className="text-green-600 dark:text-green-400 text-center font-semibold">
          ¡Gracias por tu mensaje! Te responderé pronto.
        </div>
      ) : (
        <form
          className="space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus("loading");
            setErrorMessage("");

            try {
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });

              if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Algo salió mal.");
              }

              setStatus("success");
              setFormData({ name: "", email: "", message: "" });
            } catch (error) {
              setStatus("error");
              setErrorMessage(error instanceof Error ? error.message : "Hubo un error inesperado.");
            }
          }}
        >
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-800 dark:text-gray-200 font-medium">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-800 dark:text-gray-200 font-medium">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-gray-800 dark:text-gray-200 font-medium">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {status === "error" && (
            <div className="text-red-600 dark:text-red-400 text-sm text-center">
              Error: {errorMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      )}
    </section>
  );
}