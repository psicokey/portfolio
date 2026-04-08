// src/app/lke-web/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Globe,
  Smartphone,
  MessageSquare,
  Rocket,
  Zap,
  CheckCircle2,
  Clock,
  Layout,
} from "lucide-react";
import { FaWhatsapp, FaShopify } from "react-icons/fa";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";

const services = [
  {
    title: "Tiendas online (e-commerce)",
    icon: <ShoppingCart className="text-cyan-400" size={28} />,
    desc: "Plataformas robustas para vender tus productos sin límites.",
  },
  {
    title: "Páginas para negocios",
    icon: <Globe className="text-blue-400" size={28} />,
    desc: "Presencia profesional que genera confianza en tus clientes.",
  },
  {
    title: "Diseño adaptable a celular",
    icon: <Smartphone className="text-purple-400" size={28} />,
    desc: "Tu sitio se verá perfecto en cualquier dispositivo.",
  },
  {
    title: "Botón directo a WhatsApp",
    icon: <MessageSquare className="text-green-400" size={28} />,
    desc: "Conexión instantánea con tus clientes potenciales.",
  },
  {
    title: "Personalización de tiendas Shopify",
    icon: <FaShopify className="text-green-500" size={28} />,
    desc: "Expertos en la plataforma líder de comercio electrónico.",
  },
  {
    title: "Ideal para emprendedores",
    icon: <Rocket className="text-orange-400" size={28} />,
    desc: "Soluciones escalables que crecen con tu negocio.",
  },
];

const features = [
  "Entrega rápida y personalizada",
  "Fácil de usar",
  "Soporte continuo",
  "Optimización SEO",
];

export default function LkeWebPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050b18] text-gray-900 dark:text-white selection:bg-cyan-500/30 overflow-hidden font-sans transition-colors duration-500">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 dark:bg-cyan-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center mb-8"
          >
            {/* LKE Logo CSS/SVG representation */}
            <div className="relative w-32 h-32 mb-6">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 animate-pulse" />
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                aria-label="LKE Web Logo"
                role="img"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-blue-500/30"
                />
                <path
                  d="M50 15 L50 35 M30 30 L45 45 M70 30 L55 45"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-cyan-400"
                />
                <rect
                  x="35"
                  y="45"
                  width="30"
                  height="40"
                  rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-blue-500"
                />
                <circle
                  cx="50"
                  cy="65"
                  r="8"
                  fill="currentColor"
                  className="text-cyan-400"
                />
              </svg>
            </div>
            <div className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-gray-950 dark:from-white to-gray-500 italic">
              LKE <span className="text-blue-600 dark:text-blue-500">WEB</span>
            </div>
            <div className="h-1 w-24 bg-linear-to-r from-transparent via-blue-500 to-transparent mt-2" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight uppercase"
          >
            Diseño de <span className="text-blue-500">Páginas Web</span> y <br />
            <span className="text-cyan-400">Tiendas Online Shopify</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light"
          >
            Diseños profesionales en pocos días, sin complicaciones.
          </motion.p>
        </div>

        {/* Device Mockup Visualization (CSS Based) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 flex justify-center"
        >
          <div className="relative z-10 w-full max-w-4xl p-2 md:p-4 bg-gray-100/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden group">
            <div className="aspect-video bg-[#0a0f1d] rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center relative">
              {/* Mock Content */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent opacity-50" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-24 h-24 mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-2 border border-dotted border-cyan-400/20 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layout size={40} className="text-blue-500 animate-pulse" />
                  </div>
                  {/* Scanning light effect */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 h-[2px] bg-cyan-400/50 blur-xs z-20"
                  />
                </div>
                <div className="space-y-1 text-center">
                  <p className="text-cyan-400 font-mono text-[10px] tracking-[0.2em] mb-1 animate-pulse">
                    SYSTEM BOOTING...
                  </p>
                  <p className="font-mono text-sm tracking-widest bg-clip-text text-transparent bg-linear-to-r from-gray-400 via-white to-gray-400">
                    LOADING PREMIUM EXPERIENCE
                  </p>
                </div>
              </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Mobile Mockup */}
          <div className="absolute -bottom-10 -right-4 md:right-10 z-20 w-32 md:w-48 aspect-9/19 bg-black border-4 border-[#1a1a1a] rounded-4xl shadow-2xl hidden sm:block transform rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="p-2 h-full">
              <div className="w-full h-full bg-[#0d1526] rounded-3xl overflow-hidden border border-white/10 p-4">
                <div className="w-8 h-1 bg-white/10 rounded-full mx-auto mb-4" />
                <div className="space-y-2">
                  <div className="h-12 w-full bg-blue-500/20 rounded-lg" />
                  <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                  <div className="h-4 w-full bg-white/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Strategic Partnership Context */}
        <section className="mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-blue-50/50 dark:bg-blue-600/5 border border-blue-100 dark:border-blue-500/10 backdrop-blur-sm relative overflow-hidden shadow-sm dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-4 hidden sm:block">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-200 dark:border-blue-500/30 tracking-widest uppercase">
                Partner & Co-Founder
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              Más que un proyecto, un socio para tu crecimiento
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
              <p>
                LKE Web nació como un emprendimiento estratégico para cubrir una
                brecha en el mercado digital: la necesidad de soluciones web de
                alto rendimiento que realmente impulsen el crecimiento de marcas
                y negocios.
              </p>
              <p>
                Como{" "}
                <strong className="text-blue-400">socio co-fundador</strong>, he
                volcado mi experiencia técnica y humana para crear una
                estructura que ayuda a marcas personales, tiendas y proyectos de
                cualquier escala a alcanzar su máximo potencial. No solo creamos
                sitios, construimos el motor digital de tu éxito.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(0,0,0,0.02)" }}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-white/3 border border-gray-100 dark:border-white/5 hover:border-blue-500/50 transition-all duration-300 group shadow-sm dark:shadow-none"
              >
                <div className="mb-6 p-4 bg-white dark:bg-white/3 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-sm dark:shadow-none">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Checklist */}
        <section className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-50/50 dark:bg-blue-600/5 rounded-4xl md:rounded-[3rem] p-8 md:p-12 border border-blue-100 dark:border-blue-500/10 shadow-sm dark:shadow-none">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
              <Zap className="text-yellow-500" /> ¿Por qué elegir LKE Web?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-lg text-gray-600 dark:text-gray-300"
                >
                  <CheckCircle2 className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="shrink-0 bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none">
            <Clock
              className="text-blue-600 dark:text-blue-400 mb-4"
              size={40}
            />
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              Entrega en{" "}
              <span className="text-cyan-600 dark:text-cyan-400">
                7-10 días
              </span>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Promedio por proyecto
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "¿Cuánto tiempo toma desarrollar mi página web?",
                a: "El tiempo de entrega promedio es de 7 a 10 días hábiles. Trabajamos con un proceso optimizado para que tu negocio tenga presencia digital lo antes posible sin sacrificar calidad.",
              },
              {
                q: "¿Ustedes configuran tiendas Shopify?",
                a: "Sí, somos especialistas en Shopify. Configuramos tu inventario, pasarelas de pago y diseño para que tengas una tienda profesional lista para vender.",
              },
              {
                q: "¿El diseño es compatible con celulares?",
                a: "Totalmente. Aplicamos un enfoque 'Mobile-First', asegurando que la experiencia de usuario sea impecable tanto en dispositivos móviles como en computadoras de escritorio.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-white/3 border border-gray-100 dark:border-white/5"
              >
                <h3 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-400">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center py-12 md:py-20 relative"
        >
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full -z-10" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            ¿Listo para despegar tu negocio?
          </h2>
          <motion.a
            href="https://wa.me/56974624872?text=Hola,%20quiero%20agendar%20una%20reunión%20para%20hablar%20de%20mi%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contactar a LKE Web por WhatsApp para iniciar un proyecto"
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white rounded-full text-lg font-bold shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all duration-300 group"
          >
            <FaWhatsapp
              size={24}
              className="group-hover:rotate-12 transition-transform"
            />
            ESCRÍBENOS AHORA
          </motion.a>
        </motion.div>
      </main>

      {/* Footer minimal for LKE */}
      <footer className="relative z-10 border-t border-gray-100 dark:border-white/5 py-12 px-6 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} LKE Web - Impulsando negocios en la era
        </p>
      </footer>
      <WhatsAppFloat />
    </div>
  );
}
