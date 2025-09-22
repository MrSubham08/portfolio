"use client";

import Link from "next/link";

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
            <Link href="#hero" className="hover:text-purple-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-purple-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-purple-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-purple-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Call to Action */}
        <Link
          href="#contact"
          className="hidden md:block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
