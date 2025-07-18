// src/components/SkillCard.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  id?: string;
  name: string;
  level: number;
  category?: string;
  icon?: React.ReactNode;
  color?: string;
}

interface SkillCardProps {
  skill: Skill;
  showCategory?: boolean;
  showLevel?: boolean;
  showProgressBar?: boolean;
  variant?: 'default' | 'compact' | 'detailed';
  animationDelay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  skill, 
  showCategory = true, 
  showLevel = true,
  showProgressBar = true,
  variant = 'default',
  animationDelay = 0
}) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Animación de la barra de progreso
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, 300 + (animationDelay || 0));
    
    return () => clearTimeout(timer);
  }, [skill.level, animationDelay]);

  // Variantes de animación
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: animationDelay ? animationDelay * 0.1 : 0 
      }
    }
  };

  // Renderizar icono por defecto si no se proporciona
  const renderIcon = () => {
    if (skill.icon) return skill.icon;
    
    // Icono predeterminado basado en la categoría
    const category = skill.category?.toLowerCase() || '';
    
    if (category.includes('front')) return (
      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      </div>
    );
    
    if (category.includes('back')) return (
      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    );
    
    if (category.includes('data')) return (
      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
      </div>
    );
    
    return (
      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      </div>
    );
  };

  // Determinar el color basado en el nivel de habilidad
  const getColorClass = () => {
    if (skill.color) return skill.color;
    
    if (skill.level >= 90) return 'from-green-500 to-teal-600';
    if (skill.level >= 75) return 'from-blue-500 to-indigo-600';
    if (skill.level >= 60) return 'from-purple-500 to-fuchsia-600';
    return 'from-gray-500 to-gray-700';
  };

  // Renderizar diferentes variantes
  if (variant === 'compact') {
    return (
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        {renderIcon()}
        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
          {showLevel && (
            <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
          )}
        </div>
      </motion.div>
    );
  }

  if (variant === 'detailed') {
    return (
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className={`bg-gradient-to-r ${getColorClass()} rounded-xl p-5 text-white shadow-lg`}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{skill.name}</h3>
            {showCategory && skill.category && (
              <span className="text-sm bg-white/20 px-2 py-1 rounded-full mt-1 inline-block">
                {skill.category}
              </span>
            )}
          </div>
          {renderIcon()}
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between mb-1">
            {showLevel && <span className="font-medium">{skill.level}%</span>}
            <span className="text-sm">Dominio</span>
          </div>
          <div className="w-full bg-white/30 rounded-full h-2.5">
            <motion.div 
              className="bg-white h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  // Variante por defecto
  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          {renderIcon()}
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">
            {skill.name}
          </h3>
        </div>
        {showLevel && (
          <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
            {skill.level}%
          </span>
        )}
      </div>
      
      {showProgressBar && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div 
            className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      )}
      
      {showCategory && skill.category && (
        <div className="mt-2">
          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
            {skill.category}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default SkillCard;