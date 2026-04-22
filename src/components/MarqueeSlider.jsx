"use client";

import {
  SiPython, SiC, SiCplusplus, SiJavascript, SiNextdotjs,
  SiHtml5, SiCss, SiFlask, SiOpencv, SiSqlite, SiGit, SiGithub,
  SiArduino, SiAndroidstudio, SiOctave,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

const stack = [
  { icon: SiPython,         name: "Python",         color: "#3B82F6" },
  { icon: SiC,              name: "C",               color: "#6366F1" },
  { icon: SiCplusplus,      name: "C++",             color: "#818CF8" },
  { icon: FaJava,           name: "Java",            color: "#F97316" },
  { icon: SiJavascript,     name: "JavaScript",      color: "#EAB308" },
  { icon: SiNextdotjs,      name: "Next.js",         color: "" },   // uses currentColor
  { icon: SiHtml5,          name: "HTML5",           color: "#EF4444" },
  { icon: SiCss,            name: "CSS3",            color: "#3B82F6" },
  { icon: SiFlask,          name: "Flask",           color: "#6B7280" },
  { icon: SiOpencv,         name: "OpenCV",          color: "#22C55E" },
  { icon: SiSqlite,         name: "SQLite",          color: "#60A5FA" },
  { icon: SiGit,            name: "Git",             color: "#F97316" },
  { icon: SiGithub,         name: "GitHub",          color: "" },
  { icon: TbBrandVscode,    name: "VS Code",         color: "#3B82F6" },
  { icon: SiArduino,        name: "Arduino",         color: "#14B8A6" },
  { icon: SiAndroidstudio,  name: "Android Studio",  color: "#22C55E" },
  { icon: SiOctave,         name: "MATLAB",          color: "#F97316" },
];

// Duplicate the items to create the seamless infinite loop effect
const items = [...stack, ...stack];

export default function MarqueeSlider() {
  return (
    <div className="w-full overflow-hidden relative">

      {/* Left fade edge */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent pointer-events-none" />
      {/* Right fade edge */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent pointer-events-none" />

      {/* The scrolling track */}
      <div className="flex marquee-track w-max gap-4 py-2">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/40 transition-all duration-200 cursor-default group select-none flex-shrink-0"
            >
              <Icon
                size={20}
                style={{ color: item.color || undefined }}
                className={!item.color ? "text-zinc-800 dark:text-zinc-200" : ""}
              />
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 whitespace-nowrap group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
