"use client";
import { useState } from "react";
import Section from '@/components/shared/Section';
import ProjectCard from '@/components/shared/ProjectCard';
import { FaLaptopCode, FaServer, FaMobile, FaTools } from 'react-icons/fa';

// Lista de proyectos
const projects = [
  {
    title: "Portfolio Personal",
    description: "Mi propio portfolio desarrollado con Next.js y Tailwind CSS. Diseño moderno, responsive y modo oscuro.",
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    githubUrl: "https://github.com/tu-usuario/tu-repo",
    liveUrl: "https://tu-portfolio.com",
    category: "frontend",
    featured: true,
  },
  {
    title: "Gestor de Tareas",
    description: "Aplicación web para gestionar tareas con autenticación de usuarios y base de datos en tiempo real.",
    technologies: ['React', 'Firebase', 'Material UI'],
    githubUrl: "https://github.com/tu-usuario/gestor-tareas",
    liveUrl: "https://gestor-tareas-ejemplo.com",
    category: "fullstack",
  },
  {
    title: "E-commerce",
    description: "Tienda online completa con carrito de compras, pasarela de pago y panel de administración.",
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: "https://github.com/tu-usuario/ecommerce",
    category: "fullstack",
  },
  {
    title: "Clon de Spotify",
    description: "Réplica de Spotify con reproducción de música en tiempo real y listas de reproducción personalizadas.",
    technologies: ['React', 'Redux', 'Spotify API'],
    githubUrl: "https://github.com/tu-usuario/spotify-clone",
    liveUrl: "https://spotify-clone-ejemplo.com",
    category: "frontend",
  },
  {
    title: "Blog Personal",
    description: "Blog técnico con sistema de comentarios, búsqueda y categorías. Generación estática con Markdown.",
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: "https://github.com/tu-usuario/blog",
    liveUrl: "https://mi-blog-tecnico.com",
    category: "frontend",
  },
  {
    title: "App del Clima",
    description: "Aplicación que muestra el clima actual y pronóstico utilizando una API meteorológica.",
    technologies: ['React', 'OpenWeatherMap API', 'CSS Modules'],
    githubUrl: "https://github.com/tu-usuario/app-clima",
    liveUrl: "https://app-clima-ejemplo.com",
    category: "frontend",
  },
];

// Filtros disponibles
const filters = [
  { label: "Todos", value: "all" },
  { label: "Frontend", value: "frontend", icon: <FaLaptopCode /> },
  { label: "Full Stack", value: "fullstack", icon: <FaServer /> },
  { label: "Aplicaciones", value: "app", icon: <FaMobile /> },
  { label: "Herramientas", value: "tools", icon: <FaTools /> },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filtrado de proyectos
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="container mx-auto px-4 py-8">
      <Section title="Mis Proyectos">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6">
            Aquí encontrarás una selección de mis proyectos más recientes. Cada uno representa un desafío único 
            y una oportunidad para aplicar mis habilidades en desarrollo web.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <ProjectFilter
                key={filter.value}
                label={filter.label}
                icon={filter.icon}
                active={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>
      
      <Section title="Proyectos en Progreso">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Plataforma de Aprendizaje"
            description="Sistema educativo con cursos interactivos, seguimiento de progreso y certificados."
            technologies={['Next.js', 'MongoDB', 'Stripe', 'Auth0']}
            progress={75}
            category="fullstack"
          />
          
          <ProjectCard 
            title="App de Finanzas Personales"
            description="Herramienta para gestionar ingresos, gastos y presupuestos con visualización de datos."
            technologies={['React Native', 'Firebase', 'Recharts']}
            progress={50}
            category="app"
          />
        </div>
      </Section>
    </div>
  );
}

// Componente ProjectFilter
interface ProjectFilterProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const ProjectFilter = ({ label, icon, active = false, onClick }: ProjectFilterProps) => (
  <button 
    type="button"
    onClick={onClick}
    className={`flex items-center px-4 py-2 rounded-full transition-all ${
      active 
        ? 'bg-blue-600 text-white shadow-md' 
        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
    }`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {label}
  </button>
);