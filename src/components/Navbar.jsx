"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Home,
  User,
  FolderGit2,
  Award,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home", icon: <Home size={18} /> },
    { href: "#about", label: "About", icon: <User size={18} /> },
    { href: "#projects", label: "Projects", icon: <FolderGit2 size={18} /> },
    { href: "#certifications", label: "Certificates", icon: <Award size={18} /> },
    { href: "#contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-purple-700/30 shadow-[0_0_15px_rgba(147,51,234,0.25)]">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* === Logo === */}
        <Link
          href="/"
          className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
        >
          <img src="assets/logo.png" alt="Logo" className="h-14 w-14 inline-block mr-2" />
        </Link>

        {/* === Desktop Nav Links === */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {links.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-2 hover:text-purple-400 transition transform hover:scale-105 duration-200 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
              >
                {icon} {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* === Desktop Socials + Hire Me === */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://github.com/MrSubham08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition transform hover:scale-110"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/subhamkumar08/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition transform hover:scale-110"
          >
            <Linkedin size={22} />
          </a>

          <Link
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold transition transform hover:scale-105 shadow-[0_0_15px_rgba(147,51,234,0.4)]"
          >
            Hire Me
          </Link>
        </div>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden text-white hover:text-purple-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === Mobile Overlay + Side Drawer === */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dim Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-1/3 bg-transparent backdrop-blur-2xl border-l border-purple-700/30 text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] z-50 p-8 flex flex-col space-y-6"
            >
              {/* Header with Close */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                  MyPortfolio
                </h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col space-y-5 mt-6">
                {links.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 hover:text-purple-400 transition transform hover:translate-x-2 duration-200 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                  >
                    {icon} {label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-purple-500/20 via-purple-400/40 to-transparent my-6" />

              {/* Socials */}
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition transform hover:scale-110"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition transform hover:scale-110"
                >
                  <Linkedin size={22} />
                </a>
              </div>

              {/* Hire Me Button */}
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-auto text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg font-semibold text-white transition transform hover:scale-105 shadow-[0_0_15px_rgba(147,51,234,0.4)]"
              >
                Hire Me
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
