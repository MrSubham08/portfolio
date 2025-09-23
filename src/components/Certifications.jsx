"use client";
import images from "@/lib/asset";
import Image from "next/image";

export default function Certifications() {
  const certifications = [
    {
      title: "Frontend Development",
      issuer: "freeCodeCamp",
      date: "2023",
      img: images.dummyCert,
      link: "https://www.freecodecamp.org/certification/your-link",
      description: "Comprehensive frontend curriculum focusing on HTML, CSS, and JavaScript.",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      img: "/cert2.png",
      link: "https://www.freecodecamp.org/certification/your-link",
      description: "Algorithms, data structures and problem solving in JavaScript.",
    },
    {
      title: "React Developer",
      issuer: "Udemy",
      date: "2021",
      img: "/cert3.png",
      link: "https://www.udemy.com/certificate/your-link",
      description: "Hands-on React projects, hooks, context and performance patterns.",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative bg-gradient-to-b from-black via-purple-950 to-slate-900 text-white py-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          My <span className="text-purple-400">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 items-stretch">
          {certifications.map((cert, i) => (
            <article
              key={i}
              className="group bg-slate-800/30 border border-purple-700 rounded-2xl p-6 flex flex-col justify-between h-full transition transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/30"
            >
              {/* top: image + title */}
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {cert.issuer} • <span className="text-slate-400">{cert.date}</span>
                  </p>
                </div>
              </div>

              {/* middle: description */}
              <p className="mt-4 text-slate-300 flex-1">
                {cert.description}
              </p>

              {/* bottom: action */}
              <div className="mt-6 flex items-center justify-between">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                >
                  View Certificate
                </a>
                <span className="text-sm text-slate-400">Verified</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
