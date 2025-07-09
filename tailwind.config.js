/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Usa la clase 'dark' para el modo oscuro
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Puedes personalizar colores aquí si lo deseas
      colors: {
        // Ejemplo de colores personalizados
        primary: {
          light: '#2563eb', // azul claro
          dark: '#101828',  // azul para dark mode
        },
      },
    },
  },
  plugins: [],
}