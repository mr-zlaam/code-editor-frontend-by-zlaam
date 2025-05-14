// src/components/sections/compliance/ComplianceIcon.tsx
"use client";
import Image from "next/image";
import React from "react";
import type { FC } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ComplianceIconProps {
  src: string;
  alt: string;
  delay: number;
}

export const ComplianceIcon: FC<ComplianceIconProps> = ({ src, alt, delay }) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "relative w-14 h-14 md:w-16 md:h-16 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${delay * 100}ms` }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 56px, 64px"
        className="object-contain"
      />
    </div>
  );
};

export default ComplianceIcon;
