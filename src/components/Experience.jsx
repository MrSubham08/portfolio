"use client";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "TechCorp Inc.",
      duration: "2022 - Present",
      description:
        "Building modern, responsive, and accessible user interfaces using React, Next.js, and Tailwind CSS.",
    },
    {
      role: "Web Developer Intern",
      company: "Creative Studio",
      duration: "2021 - 2022",
      description:
        "Worked on client projects, collaborated with designers, and implemented features with JavaScript and CSS.",
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      duration: "2019 - 2021",
      description:
        "Delivered small business websites, optimized performance, and created intuitive UI/UX for clients.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-slate-900 text-white py-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* === Title === */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          My <span className="text-purple-400">Experience</span>
        </h2>

        {/* === Timeline === */}
        <div className="relative border-l border-purple-600 pl-8 space-y-12 max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              {/* Purple dot */}
              <span className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-purple-500"></span>

              <h3 className="text-2xl font-bold text-purple-300">{exp.role}</h3>
              <p className="text-lg font-semibold text-slate-200">
                {exp.company} • <span className="text-slate-400">{exp.duration}</span>
              </p>
              <p className="mt-2 text-slate-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
