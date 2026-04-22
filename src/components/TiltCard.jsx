"use client";
import React, { useRef, useState, useEffect } from "react";

export default function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [glareStyle, setGlareStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsMobile(false);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X relative to card
    const y = e.clientY - rect.top;  // mouse Y relative to card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max ±15 degrees)
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
    );

    // Move glare to follow cursor position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)`,
      opacity: 1,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareStyle({ opacity: 0 });
  };

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
      {/* Holographic glare overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{
          ...glareStyle,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}
