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
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { name: "HTML5", level: "Avanzado", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", level: "Avanzado", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", level: "Intermedio", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", level: "Intermedio", icon: <SiReact className="text-cyan-500" /> },
  { name: "Node.js / Express", level: "Intermedio", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Next.js", level: "Intermedio", icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
  { name: "Tailwind CSS", level: "Intermedio", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "VSCode", level: "Intermedio", icon: <BiLogoVisualStudio className="text-blue-400" /> },
  { name: "Git / GitHub", level: "Intermedio", icon: <SiGithub className="text-gray-800 dark:text-white" /> },
  { name: "MySQL", level: "Intermedio", icon: <SiMysql className="text-blue-700" /> },
  { name: "Trello", level: "Intermedio", icon: <SiTrello className="text-blue-500" /> },
];

export default function SkillsPage() {
  return (
    <section className="max-w-3xl mx-auto mt-24 py-12 px-6 bg-black rounded-2xl shadow-lg border border-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-300 text-center">Habilidades Técnicas</h1>
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