// src/app/page.tsx
"use client";

import { useThemeHandler } from "@/lib/theme-handler";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaChevronRight,
  FaLaptopCode,
  FaServer,
  FaMobile,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaCode,
  FaLightbulb,
  FaBrain,
  FaHeart,
  FaMusic,
  FaRocket,
  FaCog,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiN8N,
  SiMeta,
  SiShopify,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNestjs,
  SiLaravel,
} from "react-icons/si";

import {
  Code2,
  Rocket as RocketIcon,
  MessageSquare,
} from "lucide-react";
import Section from "@/components/shared/Section";
import ProjectCard from "@/components/shared/ProjectCard";

// Data
const projects = [
  {
    title: "Vizcaino Consulting",
    description:
      "Sitio web profesional para una psicóloga, con diseño optimizado y enfoque en la usabilidad y conversión, con sistema de agendamiento de citas, sistema de pagos, sistema de notificaciones, sistema de recordatorios.",
    technologies: ["Laravel", "Tailwind CSS", "JavaScript", "MySQL"],
    imageUrls: [
      "/projects/consulting1.png",
      "/projects/consulting5.png",
      "/projects/consulting6.png",
    ],
    liveUrl: "https://vizcainoconsulting.com",
    category: "fullstack",
    featured: true,
  },
  {
    title: "Medellinof.lat - Sistema de Automatización Social Media",
    description:
      "Plataforma profesional de automatización y gestión de redes sociales. Sistema completo para programación de publicaciones, gestión multi-cuenta y análisis de métricas en Meta Threads.",
    technologies: ["React", "Python", "PostgreSQL", "Meta Threads API"],
    imageUrls: [
      "/projects/mede01.png",
      "/projects/mede02.png",
      "/projects/mede03.png",
      "/projects/mede04.png",
      "/projects/mede05.png",
    ],
    liveUrl: "https://medellinof.lat",
    category: "fullstack",
    featured: true,
  },
  {
    title: "AgenteInmobiliario",
    description:
      "Sistema de gestión de propiedades con autenticación de usuarios y base de datos en tiempo real, con un diseño optimizado y enfoque en la usabilidad y conversión.",
    technologies: ["Laravel", "Tailwind CSS", "Mysql"],
    imageUrls: [
      "/projects/inmobiliaria01.png",
      "/projects/inmobiliaria02.png",
      "/projects/inmobiliaria03.png",
      "/projects/inmobiliaria04.png",
      "/projects/inmobiliaria05.png",
      "/projects/inmobiliaria06.png",
    ],
    category: "fullstack",
  },
  {
    title: "Gestor de Tareas",
    description:
      "Aplicación web para gestionar tareas con autenticación de usuarios y base de datos en tiempo real.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Mysql"],
    imageUrls: [
      "/projects/mindfultask0.png",
      "/projects/mindfultask1.png",
      "/projects/mindfultask2.png",
    ],
    githubUrl: "https://github.com/psicokey/mindfultask",
    category: "fullstack",
  },
  {
    title: "E-commerce Completo",
    description:
      "Tienda online profesional con carrito de compras, pasarela de pago con Shopify API y chatbot de atención al cliente.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Shopify API"],
    imageUrls: [
      "/projects/Ecommerce1.png",
      "/projects/Ecommerce2.png",
      "/projects/Ecommerce3.png",
      "/projects/Ecommerce4.png",
      "/projects/Ecommerce5.png",
    ],
    githubUrl: "https://github.com/psicokey/nextjs-1",
    category: "fullstack",
  },
];

const skills = [
  {
    name: "HTML5",
    level: "Avanzado",
    icon: <SiHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS3",
    level: "Avanzado",
    icon: <SiCss3 className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    level: "Intermedio",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    level: "Intermedio",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    name: "Tailwind CSS",
    level: "Intermedio",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    name: "React",
    level: "Intermedio",
    icon: <SiReact className="text-cyan-500" />,
  },
  {
    name: "Node.js / Express",
    level: "Intermedio",
    icon: <SiNodedotjs className="text-green-600" />,
  },
  {
    name: "Next.js",
    level: "Intermedio",
    icon: <SiNextdotjs className="text-gray-300" />,
  },
  {
    name: "NestJS",
    level: "Básico",
    icon: <SiNestjs className="text-rose-800" />,
  },
  {
    name: "Python",
    level: "Básico",
    icon: <SiPython className="text-blue-700" />,
  },
  {
    name: "Laravel",
    level: "Básico",
    icon: <SiLaravel className="text-red-700" />,
  },
  {
    name: "Shopify",
    level: "Básico",
    icon: <SiShopify className="text-green-500" />,
  },
  {
    name: "MySQL",
    level: "Intermedio",
    icon: <SiMysql className="text-blue-700" />,
  },
  {
    name: "PostgreSQL",
    level: "Intermedio",
    icon: <SiPostgresql className="text-blue-700" />,
  },
  { name: "n8n", level: "Básico", icon: <SiN8N className="text-red-700" /> },
];

const journey = [
  {
    year: "2008-2014",
    title: "Licenciatura en Psicología",
    desc: "Formación en psicología clínica, con enfoque en investigación del comportamiento humano, consultas y dinámicas de grupo.",
    icon: <FaGraduationCap size={16} />,
  },
  {
    year: "2014-Presente",
    title: "+10 años como Psicólogo",
    desc: "Experiencia profesional ayudando a individuos y equipos a alcanzar su máximo potencial.",
    icon: <FaBriefcase size={16} />,
  },
  {
    year: "2022-2024",
    title: "Reclutador IT",
    desc: "Especializado en reclutamiento para posiciones tecnológicas, ayudando a empresas a construir equipos de alto rendimiento.",
    icon: <FaUsers size={16} />,
  },
  {
    year: "2022-2024",
    title: "Project Manager",
    desc: "Liderando equipos y asegurando la entrega exitosa de proyectos tecnológicos.",
    icon: <FaBriefcase size={16} />,
  },
  {
    year: "2024-Presente",
    title: "Desarrollador Web Full-Stack",
    desc: "Creando soluciones digitales profesionales: aplicaciones web modernas e integración de APIs.",
    icon: <FaCode size={16} />,
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "React / Next.js", level: 60 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 75 },
      { name: "NestJS", level: 60 },
      { name: "Laravel", level: 50 },
      { name: "RESTful APIs", level: 80 },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git / GitHub", level: 70 },
      { name: "MySQL", level: 60 },
      { name: "Shopify Professional", level: 65 },
      { name: "WordPress CMS", level: 50 },
    ],
  },
  {
    title: "Blandas",
    skills: [
      { name: "Comunicación", level: 90 },
      { name: "Liderazgo", level: 90 },
      { name: "Trabajo en Equipo", level: 95 },
      { name: "Gestión Proyectos", level: 80 },
    ],
  },
];

const filters = [
  { label: "Todos", value: "all" },
  { label: "Frontend", value: "frontend", icon: <FaLaptopCode size={14} /> },
  { label: "Full Stack", value: "fullstack", icon: <FaServer size={14} /> },
  { label: "Aplicaciones", value: "app", icon: <FaMobile size={14} /> },
  { label: "Herramientas", value: "tools", icon: <FaTools size={14} /> },
];

export default function HomePage() {
  useThemeHandler();
  const [activeFilter, setActiveFilter] = useState("all");


  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main
      id="inicio"
      className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden scroll-mt-20"
    >
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-8 pb-12 px-6 overflow-hidden min-h-[600px] lg:min-h-[500px] flex items-center">
        <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-blue-50 dark:bg-blue-900/10 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm border border-blue-100 dark:border-blue-800">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Developer Full-Stack & Psicólogo
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Transformando{" "}
              <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                ideas
              </span>{" "}
              en experiencias digitales.
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Hola, soy <strong>Keyberth Márquez</strong>. Mi enfoque único
              combina la psicología con el desarrollo web para crear productos
              que no solo funcionan, sino que conectan con los usuarios.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#proyectos"
                className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explorar Proyectos{" "}
                <FaChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contacto"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 rounded-2xl font-semibold transition-all duration-300"
              >
                Trabajemos juntos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-[280px] md:max-w-xs"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-tr from-blue-600 to-cyan-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative aspect-4/5 bg-gray-100 dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-gray-900 shadow-2xl">
                <Image
                  src="/keyPic.png"
                  alt="Keyberth Márquez"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 right-0 md:-left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-[190px] md:max-w-[210px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                    <Code2
                      className="text-blue-600 dark:text-blue-400"
                      size={20}
                    />
                  </div>
                  <span className="font-bold">Desarrollador</span>
                </div>
                <p className="text-sm text-gray-500">
                  React, Next.js, Laravel y Shopify.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre-mi"
        className="pt-6 pb-6 md:pt-10 md:pb-8 bg-gray-50 dark:bg-gray-900/50 scroll-mt-18"
      >
        <div className="max-w-7xl mx-auto px-6">
          <Section title="Sobre Mí">
            <div className="space-y-12">
              {/* Introduction & Value Proposition */}
              <div className="max-w-4xl space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Arquitecto de Soluciones con{" "}
                    <span className="text-blue-600">Fundamento Humano</span>
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    ¡Hola! Soy <strong>Keyberth Márquez</strong>, Desarrollador
                    Web Full-Stack experto con una trayectoria de{" "}
                    <strong>más de 10 años</strong> como licenciado en
                    Psicología. Esta convergencia disciplinaria no es solo un
                    contexto; es mi mayor ventaja competitiva. Diseño y
                    desarrollo soluciones tecnológicas de alto impacto donde la
                    usabilidad, la comunicación estratégica y la cohesión de
                    equipo no son opciones, sino pilares fundamentales de cada
                    entrega.
                  </p>
                </motion.div>

                <motion.blockquote
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative p-6 bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-blue-600 rounded-r-2xl italic text-gray-600 dark:text-gray-400 text-lg"
                >
                  <FaLightbulb
                    className="absolute -top-3 -left-3 text-blue-600/20"
                    size={40}
                  />
                  &quot;Mi dominio de la psicología, integrado con una
                  arquitectura técnica robusta, me permite forjar productos
                  digitales que no solo cumplen funciones, sino que resuelven
                  necesidades humanas profundas y optimizan la sinergia
                  operativa entre equipos de alto rendimiento.&quot;
                </motion.blockquote>
              </div>

              {/* Core Content Grid: Journey & Skills */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Column: Timeline */}
                <div className="space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      <FaBriefcase
                        className="text-blue-600 dark:text-blue-400"
                        size={24}
                      />
                    </div>
                    <h4 className="text-2xl font-bold uppercase tracking-tight">
                      Mi Viaje
                    </h4>
                  </div>

                  <div className="relative pl-10 space-y-10 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-linear-to-b before:from-blue-600 before:via-blue-500/50 before:to-transparent">
                    {journey.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative group"
                      >
                        <div className="absolute -left-[37px] top-1 w-7 h-7 rounded-full bg-white dark:bg-gray-950 border-2 border-blue-600 flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform">
                          <span className="text-blue-600">{item.icon}</span>
                        </div>
                        <div className="space-y-2">
                          <span className="text-xs font-black text-blue-600 uppercase tracking-widest">
                            {item.year}
                          </span>
                          <h5 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-blue-500 transition-colors">
                            {item.title}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Skills */}
                <div className="space-y-12">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                      <FaCode
                        className="text-purple-600 dark:text-purple-400"
                        size={24}
                      />
                    </div>
                    <h4 className="text-2xl font-bold uppercase tracking-tight">
                      Experticia Técnica
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                    {skillGroups.map((group, gIdx) => (
                      <div key={gIdx} className="space-y-5">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-3 flex justify-between items-center">
                          {group.title}
                          <span className="w-10 h-[2px] bg-blue-600/30 rounded-full" />
                        </h5>
                        <div className="space-y-5">
                          {group.skills.map((skill, sIdx) => (
                            <div key={sIdx} className="space-y-2">
                              <div className="flex justify-between text-xs font-bold uppercase tracking-tight">
                                <span className="text-gray-700 dark:text-gray-300">
                                  {skill.name}
                                </span>
                                <span className="text-blue-600">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800/50 rounded-full overflow-hidden border border-gray-100 dark:border-gray-800">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1.2,
                                    delay: gIdx * 0.1 + sIdx * 0.1,
                                  }}
                                  className="h-full bg-linear-to-r from-blue-600 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mi Enfoque & Fuera del Código */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                <div className="lg:col-span-2 space-y-8">
                  <div className="flex items-center gap-3">
                    <FaRocket className="text-blue-600" size={20} />
                    <h4 className="text-xl font-bold uppercase tracking-wider">
                      Mi Enfoque Estratégico
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      {
                        icon: <FaGraduationCap />,
                        title: "Aprendizaje Continuo",
                        desc: "La excelencia técnica requiere una evolución constante. Dedico cada jornada a dominar las tecnologías de vanguardia para garantizar soluciones siempre competitivas.",
                      },
                      {
                        icon: <FaBrain />,
                        title: "Perspectiva Humana",
                        desc: "El código es un medio, no el fin. Utilizo mi formación en psicología para garantizar que cada píxel y cada función estén al servicio real de las personas.",
                      },
                      {
                        icon: <FaUsers />,
                        title: "Colaboración Eficaz",
                        desc: "El software superior surge de la inteligencia colectiva. Impulso entornos de trabajo basados en la claridad radical, el respeto mutuo y la eficiencia comunicativa.",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all hover:border-blue-500/50 group"
                      >
                        <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <h5 className="font-bold text-sm mb-3">{item.title}</h5>
                        <p className="text-xs text-gray-500 leading-relaxed leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Learning Roadmap Footer */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">
                        Roadmap Tecnológico:
                      </span>
                      <div className="flex gap-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2.5 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xs hover:border-blue-500/50 transition-all group"
                        >
                          <SiN8N
                            className="text-red-700 group-hover:scale-110 transition-transform"
                            size={16}
                          />
                          <span className="text-[11px] font-black uppercase tracking-wider">
                            n8n Automation
                          </span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2.5 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xs hover:border-blue-500/50 transition-all group"
                        >
                          <SiMeta
                            className="text-blue-600 group-hover:scale-110 transition-transform"
                            size={16}
                          />
                          <span className="text-[11px] font-black uppercase tracking-wider">
                            Meta Ecosystem
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <FaHeart className="text-pink-500" size={20} />
                    <h4 className="text-xl font-bold uppercase tracking-wider">
                      Fuera del Código
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4">
                      <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-xl h-fit">
                        <FaMusic className="text-pink-500" size={20} />
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-2">
                          Batería & Creatividad
                        </h5>
                        <p className="text-xs text-gray-500 leading-relaxed italic">
                          Canalizo mi precisión rítmica y creatividad en la
                          batería. Este arte es mi catalizador para mantener el
                          equilibrio agudo entre el rigor técnico y la expresión
                          audaz.
                        </p>
                      </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl h-fit">
                        <span className="text-xl">🚶‍♂️</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-2">
                          Inspiración en el Entorno
                        </h5>
                        <p className="text-xs text-gray-500 leading-relaxed italic">
                          Mis caminatas son espacios de recalibración mental
                          donde surgen las ideas más innovadoras al conectarme
                          con el entorno y la naturaleza.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="proyectos"
        className="pt-6 pb-6 md:pt-10 md:pb-8 scroll-mt-18"
      >
        <div className="max-w-7xl mx-auto px-6">
          <Section title="Proyectos Destacados">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 px-2">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 border
                    ${
                      activeFilter === filter.value
                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-300"
                    }`}
                >
                  {filter.icon} {filter.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="pt-6 pb-6 md:pt-10 md:pb-8 scroll-mt-18"
      >
        <div className="max-w-7xl mx-auto px-6">
          <Section title="Servicios">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all">
                <RocketIcon
                  className="text-blue-600 mb-6 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <h4 className="text-xl font-bold mb-4">
                  Desarrollo Full-Stack
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Aplicaciones web modernas y escalables con React, Next.js y
                  Node.js.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500" /> UX Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500" /> API Integration
                  </li>
                </ul>
              </div>
              <div className="group p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all">
                <FaCog
                  className="text-purple-600 mb-6 group-hover:rotate-45 transition-transform"
                  size={40}
                />
                <h4 className="text-xl font-bold mb-4">Automatización</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Integración de n8n, Meta y Shopify APIs para optimizar tus
                  procesos.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-purple-500" /> Social Media
                    Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-purple-500" /> Custom
                    Workflows
                  </li>
                </ul>
              </div>
              <div className="group p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all">
                <MessageSquare
                  className="text-green-600 mb-6 group-hover:translate-x-1 transition-transform"
                  size={40}
                />
                <h4 className="text-xl font-bold mb-4">Consultoría Técnica</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Asesoría profesional para elegir el stack tecnológico idóneo.
                </p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" /> Tech Audits
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" /> Strategic
                    Planning
                  </li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="habilidades"
        className="pt-6 pb-6 md:pt-10 md:pb-8 bg-gray-50 dark:bg-gray-900/50 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <Section title="Habilidades Técnicas">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all border-b-4 border-b-transparent hover:border-b-blue-500 text-center flex flex-col items-center"
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-xs md:text-sm mb-1">
                    {skill.name}
                  </h4>
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-tighter">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="pt-6 pb-6 md:pt-10 md:pb-8 bg-gray-50 dark:bg-gray-900/50 scroll-mt-18"
      >
        <div className="max-w-4xl mx-auto px-6">
          <Section title="Contacto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl md:rounded-4xl shadow-2xl p-4 md:p-8 border border-white/10 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -z-10" />
              <div className="text-center mb-6 md:mb-10">
                <h3 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
                  ¿Tienes un proyecto en mente?
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                        Email
                      </p>
                      <a
                        href="mailto:contacto@keyberth.dev"
                        className="text-lg font-semibold hover:text-blue-500 transition-colors"
                      >
                        contacto@keyberth.dev
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl group-hover:scale-110 transition-transform">
                      <FaLinkedin className="text-blue-700" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                        LinkedIn
                      </p>
                      <a
                        href="https://linkedin.com/in/keyberth-marquez-51031811a"
                        target="_blank"
                        className="text-lg font-semibold hover:text-blue-500 transition-colors"
                      >
                        keyberth-marquez
                      </a>
                    </div>
                  </div>
                </div>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-900/50 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-900/50 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    required
                  />
                  <textarea
                    placeholder="Tu Mensaje"
                    rows={4}
                    className="w-full px-5 py-3 bg-gray-50 dark:bg-gray-900/50 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    required
                  ></textarea>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 text-sm">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </main>
  );
}
