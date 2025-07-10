// src/components/ProjectCard.tsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
  progress?: number;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl,
  category,
  progress,
  featured = false
}) => {
  // Determinar el color según la categoría
  const getCategoryColor = () => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-300';
      case 'fullstack':
        return 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 border-purple-300';
      case 'app':
        return 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 border-green-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border-gray-300';
    }
  };

  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 ${
        featured ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
      }`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {/* Placeholder para imagen del proyecto */}
        <div className="bg-gradient-to-r from-blue-400 to-indigo-600 h-48 flex items-center justify-center">
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
              <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16" />
            </div>
          </div>
        </div>
        
        {featured && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full flex items-center text-sm">
            <FaStar className="mr-1" /> Destacado
          </div>
        )}
      </div>
      
      <div className="p-5">
        {category && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getCategoryColor()}`}>
            {category === 'frontend' ? 'Frontend' : 
             category === 'fullstack' ? 'Full Stack' : 
             category === 'app' ? 'Aplicación' : 'Otro'}
          </span>
        )}
        
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-3 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>Progreso</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <div className="flex space-x-4 pt-2 border-t border-gray-100 dark:border-gray-700">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Ver en GitHub"
            >
              <FaGithub className="mr-2" /> Código
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Ver demo en vivo"
            >
              <FaExternalLinkAlt className="mr-2" /> Demo
            </a>
          )}
          
          {!githubUrl && !liveUrl && progress !== undefined && (
            <span className="text-gray-500 dark:text-gray-400 text-sm">En desarrollo</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;