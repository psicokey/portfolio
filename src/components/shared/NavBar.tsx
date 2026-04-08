"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  name: string;
  path: string;
  isSpecial?: boolean;
}

const navItems: NavItem[] = [
  { name: "Inicio", path: "/#inicio" },
  { name: "LKE Web", path: "/lke-web", isSpecial: true },
  { name: "Sobre mí", path: "/#sobre-mi" },
  { name: "Proyectos", path: "/#proyectos" },
  { name: "Servicios", path: "/#servicios" },
  { name: "Habilidades", path: "/#habilidades" },
  { name: "Contacto", path: "/#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 sticky top-0 backdrop-blur-md shadow-sm transition-colors duration-300 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center text-xl font-bold text-blue-600 dark:text-blue-400 transition-colors"
        >
          <Image
            src={"/keyLogo.png"}
            alt="Keyberth Márquez"
            width={40}
            height={40}
            className="rounded-lg object-cover"
          />
          Keyberth Márquez
        </Link>

        <div className="hidden xl:flex items-center space-x-2 2xl:space-x-6 pr-4 border-r border-gray-200 dark:border-gray-800 mr-4">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-all duration-300 font-medium px-2 xl:px-3 py-1 rounded-full text-sm xl:text-base
                ${
                  pathname === item.path
                    ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/40"
                    : item.isSpecial
                    ? "text-cyan-500 dark:text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black shadow-[0_0_10px_rgba(6,182,212,0.3)] animate-pulse"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:gap-4 font-body">
          <ThemeToggle />
          <button
            className="xl:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 px-4 py-6 space-y-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 shadow-2xl animate-in slide-in-from-top duration-300">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block transition-all duration-300 font-bold p-3 rounded-2xl text-lg
                ${
                  pathname === item.path
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 translate-x-2"
                    : item.isSpecial
                    ? "text-cyan-500 dark:text-cyan-400 border border-cyan-500/30 bg-cyan-500/5"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              onClick={() => setMenuOpen(false)}
            >
              <div className="flex items-center justify-between">
                {item.name}
                <X size={14} className="opacity-0 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
