"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-transparent border-t border-purple-900/30 text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-6 text-center space-y-4">
        {/* Links removed from footer */}

        <div className="h-px w-1/2 mx-auto bg-gradient-to-r from-purple-500/20 via-purple-400/40 to-transparent"></div>
        <p className="text-sm">
          © {new Date().getFullYear()} MyPortfolio. Built with ❤️ using Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
