"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Mouse position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth physics for the trailing ring to create the "orb" delay effect
  const ringX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.1 });
  const ringY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.1 });

  useEffect(() => {
    // Only enable on devices that have a precise pointing device (mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsMobile(false);
    }

    const mouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if hovering over an interactive element anywhere in the DOM
      const target = e.target;
      if (target.closest('a, button, input, textarea, select, [role="button"], .glass-card')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [mouseX, mouseY]);

  // Don't render cursor modifications on touch devices!
  if (isMobile) return null;

  return (
    <>
      {/* Inner sharp dot strictly following the pointer */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Outer glowing trailing ring */}
      <motion.div
        className="fixed top-0 left-0 border-2 border-indigo-400 dark:border-indigo-500 rounded-full pointer-events-none z-[9998] shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        animate={{
          width: isHovered ? 64 : 32,
          height: isHovered ? 64 : 32,
          backgroundColor: isHovered ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
