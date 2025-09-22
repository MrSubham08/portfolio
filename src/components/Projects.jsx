"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio built with Next.js, Tailwind CSS, and Framer Motion animations.",
      img: "/project1.png", // 👉 replace with your image
      demo: "https://your-demo-link.com",
      github: "https://github.com/your-repo",
    },
    {
      title: "E-Commerce Store",
      description:
        "Full-stack e-commerce app with product pages, cart, and Stripe payments.",
      img: "/project2.png",
      demo: "https://your-demo-link.com",
      github: "https://github.com/your-repo",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat app using Next.js, Socket.io, and Tailwind CSS.",
      img: "/project3.png",
      demo: "https://your-demo-link.com",
      github: "https://github.com/your-repo",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-black text-white py-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* === Title === */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          My <span className="text-purple-400">Projects</span>
        </h2>

        {/* === Project Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-slate-800/40 border border-purple-600 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4">{project.description}</p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 px-4 py-2 rounded-lg bg-purple-600 text-white text-center font-semibold hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 px-4 py-2 rounded-lg border border-purple-500 text-purple-400 text-center font-semibold hover:bg-purple-700/20 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
