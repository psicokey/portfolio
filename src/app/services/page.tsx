"use client";

import Section from "@/components/shared/Section";
import {
  FaCode,
  FaRocket,
  FaCog,
  FaChartLine,
  FaUsers,
  FaMobileAlt,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiMeta,
  SiShopify,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiTypescript,
  SiMysql,
  SiTailwindcss,
  SiGithub,
  SiN8N,
} from "react-icons/si";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Section title="Servicios Profesionales">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6">
            Ofrezco soluciones de desarrollo web profesionales y servicios de
            integración de APIs para empresas que buscan optimizar sus procesos
            digitales y presencia en redes sociales.
          </p>
        </div>

        {/* Servicios Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <ServiceCard
            icon={
              <FaCode className="text-4xl text-blue-600 dark:text-blue-400" />
            }
            title="Desarrollo Web Full-Stack"
            description="Aplicaciones web modernas y escalables utilizando React, Next.js, Node.js y bases de datos relacionales."
            features={[
              "Single Page Applications (SPA)",
              "Progressive Web Apps (PWA)",
              "APIs RESTful",
              "Diseño responsive y accesible",
            ]}
          />

          <ServiceCard
            icon={
              <FaCog className="text-4xl text-purple-600 dark:text-purple-400" />
            }
            title="Integración de APIs"
            description="Conexión experta con APIs de terceros para ampliar la funcionalidad de tu negocio."
            features={[
              "Meta Threads API",
              "Shopify API",
              "APIs RESTful personalizadas",
              "Webhooks y automatizaciones",
            ]}
          />

          <ServiceCard
            icon={
              <FaRocket className="text-4xl text-green-600 dark:text-green-400" />
            }
            title="Sistemas de Automatización"
            description="Herramientas personalizadas para automatizar procesos y ahorrar tiempo en tu negocio."
            features={[
              "Automatización de publicaciones",
              "Agendamiento de contenido",
              "Gestión multi-plataforma",
              "Reportes y analytics",
            ]}
          />

          <ServiceCard
            icon={
              <FaChartLine className="text-4xl text-orange-600 dark:text-orange-400" />
            }
            title="Consultoría Técnica"
            description="Asesoramiento profesional para tomar decisiones informadas sobre tecnología."
            features={[
              "Arquitectura de software",
              "Stack tecnológico óptimo",
              "Optimización de rendimiento",
              "Mejores prácticas de desarrollo",
            ]}
          />

          <ServiceCard
            icon={
              <FaMobileAlt className="text-4xl text-pink-600 dark:text-pink-400" />
            }
            title="Diseño Responsive"
            description="Interfaces que funcionan perfectamente en cualquier dispositivo."
            features={[
              "Mobile-first design",
              "Experiencia de usuario (UX)",
              "Modo oscuro/claro",
              "Accesibilidad (WCAG)",
            ]}
          />

          <ServiceCard
            icon={
              <FaShieldAlt className="text-4xl text-red-600 dark:text-red-400" />
            }
            title="Mantenimiento y Soporte"
            description="Soporte continuo para mantener tu aplicación segura y actualizada."
            features={[
              "Actualizaciones de seguridad",
              "Corrección de bugs",
              "Nuevas funcionalidades",
              "Monitoreo y backups",
            ]}
          />
        </div>
      </Section>

      {/* Tecnologías */}
      <Section title="Tecnologías que Utilizo">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <TechIcon
              icon={<SiReact className="text-5xl text-cyan-500" />}
              name="React"
            />
            <TechIcon
              icon={
                <SiNextdotjs className="text-5xl text-gray-900 dark:text-white" />
              }
              name="Next.js"
            />
            <TechIcon
              icon={<SiNodedotjs className="text-5xl text-green-600" />}
              name="Node.js"
            />
            <TechIcon
              icon={<SiPython className="text-5xl text-blue-500" />}
              name="Python"
            />
            <TechIcon
              icon={<SiTypescript className="text-5xl text-blue-600" />}
              name="TypeScript"
            />
            <TechIcon
              icon={<SiPostgresql className="text-5xl text-blue-700" />}
              name="PostgreSQL"
            />
            <TechIcon
              icon={<SiMysql className="text-5xl text-blue-700" />}
              name="MySQL"
            />
            <TechIcon
              icon={<SiTailwindcss className="text-5xl text-cyan-400" />}
              name="Tailwind CSS"
            />
            <TechIcon
              icon={
                <SiGithub className="text-5xl text-gray-900 dark:text-white" />
              }
              name="Git/GitHub"
            />
            <TechIcon
              icon={<SiN8N className="text-5xl text-red-700" />}
              name="n8n"
            />
            <TechIcon
              icon={<SiMeta className="text-5xl text-blue-600" />}
              name="Meta APIs"
            />
            <TechIcon
              icon={<SiShopify className="text-5xl text-green-500" />}
              name="Shopify"
            />
          </div>
        </div>
      </Section>

      {/* Proceso de Trabajo */}
      <Section title="Proceso de Trabajo">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <ProcessStep
            number="1"
            title="Consulta Inicial"
            description="Entendemos tus necesidades y objetivos de negocio."
            icon={<FaUsers />}
          />
          <ProcessStep
            number="2"
            title="Planificación"
            description="Diseñamos la solución técnica y arquitectura óptima."
            icon={<FaLightbulb />}
          />
          <ProcessStep
            number="3"
            title="Desarrollo"
            description="Construimos tu aplicación con las mejores prácticas."
            icon={<FaCode />}
          />
          <ProcessStep
            number="4"
            title="Entrega y Soporte"
            description="Lanzamiento exitoso con documentación y capacitación."
            icon={<FaRocket />}
          />
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-2xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Conversemos sobre cómo puedo ayudarte con tus proyectos de desarrollo
          web.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Contactar Ahora
          </a>
          <a
            href="/projects"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
    </div>
  );
}

// Componente ServiceCard
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 h-full flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start text-sm text-gray-600 dark:text-gray-400"
          >
            <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente TechIcon
interface TechIconProps {
  icon: React.ReactNode;
  name: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">{icon}</div>
      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
        {name}
      </span>
    </div>
  );
};

// Componente ProcessStep
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon,
}) => {
  return (
    <div className="relative">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 h-full">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
          {number}
        </div>
        <div className="text-3xl text-blue-600 dark:text-blue-400 mb-3 mt-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};
