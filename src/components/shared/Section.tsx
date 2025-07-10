// src/components/Section.tsx
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, icon }) => {
  return (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        {icon && <span className="mr-3 text-2xl">{icon}</span>}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};

export default Section;