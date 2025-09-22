"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/50 text-gray-400 py-8 mt-16">
      <div className="container mx-auto px-6 text-center space-y-4">
        {/* Links */}
        <div className="flex justify-center gap-6 text-sm">
          <Link href="#hero" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-purple-400 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-purple-400 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-purple-400 transition">
            Contact
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-purple-900/50 w-1/2 mx-auto"></div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} MyPortfolio. Built with ❤️ using Next.js
          & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
