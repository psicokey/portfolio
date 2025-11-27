"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Sobre mí", path: "/about" },
  { name: "Proyectos", path: "/projects" },
  { name: "Servicios", path: "/services" },
  { name: "Habilidades", path: "/skills" },
  { name: "Contacto", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white sticky top-0  dark:bg-gray-800 shadow-md py-4 px-6 transition-colors duration-300 z-10">
      <div className=" bg-white dark:bg-gray-800 shadow-md max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
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

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition font-medium
                ${
                  pathname === item.path
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ThemeToggle />
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-800 shadow">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block transition font-medium
                ${
                  pathname === item.path
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
