"use client";
import React, { type ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  index?: number;
  backgroundImage?: string;
}

export default function FlipCard({ frontContent, backContent, index = 0, backgroundImage }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className="w-full h-full perspective-[1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
        onMouseEnter={handleFlip}
        onMouseLeave={handleFlip}
        onClick={handleFlip}
        onTouchStart={(e) => e.stopPropagation()}
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleFlip();
            e.preventDefault();
          }
        }}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden">
          {backgroundImage !== null && (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}></div>
              <div className="absolute inset-0 bg-blue-950/85"></div>
            </>
          )}

          {/* Content */}
          <div className="relative z-10 w-full h-full">{frontContent}</div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-lg shadow-lg overflow-hidden">{backContent}</div>
      </div>
    </motion.div>
  );
}
