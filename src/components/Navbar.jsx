"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Home,
  User,
  FolderGit2,
  Award,
  Mail,
} from "lucide-react"; // ✅ Importing icons

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-purple-900/50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-purple-400">
          MyPortfolio
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <Link
              href="#hero"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <Home size={18} /> Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <User size={18} /> About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <FolderGit2 size={18} /> Projects
            </Link>
          </li>
          <li>
            <Link
              href="#certifications"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <Award size={18} /> Certificates
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <Mail size={18} /> Contact
            </Link>
          </li>
        </ul>

        {/* Right Side: Socials + CTA */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Social Icons */}
          <a
            href="https://github.com/your-github" // 🔗 replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin" // 🔗 replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition"
          >
            <Linkedin size={24} />
          </a>

          {/* Hire Me Button */}
          <Link
            href="#contact"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
