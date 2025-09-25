"use client";
// src/app/about/page.tsx
import Image from 'next/image';
import Section from '@/components/shared/Section';
import { FaUser, FaGraduationCap, FaBriefcase, FaLightbulb, FaCode, FaHeart, FaUsers, FaMusic, FaBrain, FaEnvelope } from 'react-icons/fa';


export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Section title="Sobre Mí">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative">              
              <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-full w-64 h-64"/>
              <Image 
                src="/keyPic.png" 
                alt="Keyberth Márquez" 
                width={256} 
                height={256} 
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"></Image>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full">
                <span className="flex items-center">
                  <FaUser className="mr-2" /> Psicólogo & Desarrollador
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              ¡Hola! Soy Keyberth Márquez
            </h2>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              Un apasionado de la tecnología en proceso de formación, actualmente aprendiendo desarrollo web. 
              Además, tengo <span className="font-semibold text-blue-600 dark:text-blue-400">10 años de experiencia </span> 
              como licenciado en psicología, lo que me ha permitido desarrollar habilidades únicas en comunicación, 
              liderazgo y trabajo en equipo.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 dark:text-gray-300">
                 &quot; Mi combinación única de experiencia me permite abordar problemas técnicos con una perspectiva 
                centrada en el usuario y la colaboración efectiva.&quot;
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Columna izquierda: Educación y Experiencia */}
        <div>
          <Section title="Mi Viaje" icon={<FaLightbulb className="text-blue-600 dark:text-blue-400" />}>
            <div className="space-y-4">
              <JourneyCard 
                icon={<FaGraduationCap />}
                period="2008-2014"
                title="Licenciatura en Psicología"
                description="Formación en psicología clínica, con enfoque en investigación del comportamiento humano, consultas y dinámicas de grupo."
              />
              
              <JourneyCard 
                icon={<FaBriefcase />}
                period="2014-Presente"
                title="+10 años como Psicólogo"
                description="Experiencia profesional ayudando a individuos y equipos a alcanzar su máximo potencial."
              />
              
              <JourneyCard 
                icon={<FaUsers />}
                period="2022-2024"
                title="Reclutador IT"
                description="Especializado en reclutamiento para posiciones tecnológicas, ayudando a empresas a construir equipos de alto rendimiento."
              />
              
              <JourneyCard 
                icon={<FaBriefcase />}
                period="2022-2024"
                title="Project Manager"
                description="Liderando equipos y asegurando la entrega exitosa de proyectos tecnológicos."
              />
              
              <JourneyCard 
                icon={<FaCode />}
                period="2024-Presente"
                title="Transición al Desarrollo Web"
                description="Aprendiendo tecnologías modernas para construir soluciones digitales innovadoras."
              />
            </div>
          </Section>
        </div>

        {/* Columna derecha: Habilidades y Pasiones */}
        <div>
          <Section title="Habilidades Técnicas" icon={<FaCode className="text-blue-600 dark:text-blue-400" />}>
            <div className="grid grid-cols-2 gap-4">
              <SkillCategory title="Frontend" skills={[
                { name: "HTML / CSS", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "Tailwind CSS", level: 75 },
                { name: "TypeScript", level: 70 },
                { name: "React", level: 60 },
                { name: "Next.js", level: 60 },
              ]} />
              
              <SkillCategory title="Backend" skills={[
                { name: "Node.js", level: 75 },
                { name: "Express", level: 70 },
                { name: "NestJS", level: 60 },
                { name: "Laravel", level: 50 },
                { name: "RESTful APIs", level: 80 }
              ]} />
              
              <SkillCategory title="Herramientas" skills={[
                { name: "Git / GitHub", level: 70 },
                { name: "MySQL", level: 60 },
                { name: "Shopify", level: 60 },
                { name: "WordPress", level: 50 },
              ]} />
              
              <SkillCategory title="Habilidades Blandas" skills={[
                { name: "Comunicación", level: 90 },
                { name: "Liderazgo", level: 90 },
                { name: "Trabajo en Equipo", level: 95 },
                { name: "Gestión de Proyectos", level: 80 }
              ]} />
            </div>
          </Section>

          <Section title="Actualmente Aprendiendo" icon={<FaBrain className="text-blue-600 dark:text-blue-400" />}>
            <div className="flex flex-wrap gap-2">
              <LearningTag>TypeScript avanzado</LearningTag>
              <LearningTag>Patrones de diseño</LearningTag>
              <LearningTag>Autenticación JWT</LearningTag>
              <LearningTag>Optimización de rendimiento</LearningTag>
            </div>
          </Section>
        </div>
      </div>

      <Section title="Mi Enfoque" icon={<FaLightbulb className="text-blue-600 dark:text-blue-400" />}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PhilosophyCard 
            title="Aprendizaje Continuo"
            description="Invierto tiempo cada día en mejorar mis habilidades técnicas y aprender nuevas tecnologías."
          />
          <PhilosophyCard 
            title="Perspectiva Humana"
            description="Aplico mi experiencia en psicología para crear soluciones tecnológicas centradas en las personas."
          />
          <PhilosophyCard 
            title="Colaboración Efectiva"
            description="Creo que el mejor software se construye en equipo, con comunicación clara y respeto mutuo."
          />
        </div>
      </Section>

      <Section title="Fuera del Código" icon={<FaHeart className="text-blue-600 dark:text-blue-400" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center mb-4">
              <FaMusic className="text-2xl mr-3" />
              <h3 className="text-xl font-bold">Música</h3>
            </div>
            <p>
              Disfruto tocar la batería como forma de expresión creativa y desconexión. 
              La música me ayuda a mantener el equilibrio entre el trabajo técnico y la expresión artística.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-3">🚶‍♂️</div>
              <h3 className="text-xl font-bold">Caminatas</h3>
            </div>
            <p>
              Salir a caminar me ayuda a despejar la mente y encontrar inspiración. 
              Disfruto explorar nuevos lugares y conectarme con la naturaleza.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Contacto" icon={<FaUser className="text-blue-600 dark:text-blue-400" />}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            ¿Quieres colaborar en un proyecto o simplemente charlar sobre tecnología y psicología?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:keyberthms@gmail.com" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              <FaEnvelope className='mr-2' />Enviar Email
            </a>
            <a 
              href="https://www.linkedin.com/in/keyberth-marquez-51031811a" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              <FaUsers className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Componente JourneyCard
interface JourneyCardProps {
  icon: React.ReactNode;
  period: string;
  title: string;
  description: string;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ icon, period, title, description }) => {
  return (
    <div className="relative pl-10 border-l-2 border-blue-300 dark:border-blue-700 py-2">
      <div className="absolute left-[-11px] top-4 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-400 flex items-center justify-center">
        <span className="text-white text-xs">{icon}</span>
      </div>
      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{period}</span>
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-1">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

// Componente SkillCategory
interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{title}</h4>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente LearningTag
const LearningTag = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
    {children}
  </span>
);

// Componente PhilosophyCard
interface PhilosophyCardProps {
  title: string;
  description: string;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 h-full">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};