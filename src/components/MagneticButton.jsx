"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, className = "" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  // Disable physics on mobile/touch interfaces for a seamless native experience
  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsMobile(false);
    }
  }, []);

  const handleMouse = (e) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Set the pull multiplier (0.3 means it shifts 30% towards the mouse)
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  if (isMobile) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`relative inline-block cursor-pointer ${className}`}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <motion.div
        animate={{ x: x * 0.3, y: y * 0.3 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
