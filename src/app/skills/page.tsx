"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiMysql,
  SiTrello,
  SiTypescript,
  SiNestjs,
  SiLaravel,
  SiWordpress,
  SiShopify
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { name: "HTML5", level: "Avanzado", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", level: "Avanzado", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", level: "Intermedio", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", level: "Intermedio", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Tailwind CSS", level: "Intermedio", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "React", level: "Intermedio", icon: <SiReact className="text-cyan-500" /> },
  { name: "Node.js / Express", level: "Intermedio", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Next.js", level: "Intermedio", icon: <SiNextdotjs className="text-gray-300" /> },
  { name: "NestJS", level: "Básico", icon: <SiNestjs className="text-rose-800" /> },
  { name: "Laravel", level: "Básico", icon: <SiLaravel className="text-red-700" /> },
  { name: "Shopify", level: "Básico", icon: <SiShopify className="text-green-500" /> },
  {name: "WordPress", level: "Básico", icon: <SiWordpress className="text-blue-600" />},
  { name: "VSCode", level: "Intermedio", icon: <BiLogoVisualStudio className="text-blue-400" /> },
  { name: "Git / GitHub", level: "Intermedio", icon: <SiGithub className="text-white" /> },
  { name: "MySQL", level: "Intermedio", icon: <SiMysql className="text-blue-700" /> },
  { name: "Trello", level: "Intermedio", icon: <SiTrello className="text-blue-500" /> },
];

export default function SkillsPage() {
  return (
    <section className="flex flex-col items-center max-w-2xl mx-auto mt-24 mb-8 py-12 px-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 transition-colors">
      <h1 className=" text-gray-700 dark:text-gray-300 not-visited:text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col items-center text-white bg-black hover:bg-gray-800 transition rounded-xl px-6 py-6 border shadow-sm"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <span className="font-semibold text-white mb-1">{skill.name}</span>
            <span className="text-xs text-gray-500">{skill.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}