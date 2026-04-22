"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-transparent border-t border-zinc-200 dark:border-zinc-800/80 text-zinc-900 dark:text-zinc-400 py-8 mt-16">
      <div className="container mx-auto px-6 text-center space-y-4">
        {/* Decorative separating line */}
        <div className="h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent"></div>
        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Subham Kumar. Built with ❤️ using Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
