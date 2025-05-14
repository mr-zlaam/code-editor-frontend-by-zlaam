"use client";
import type { FC } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import type { FeatureType } from "@/types";
import React from "react";

interface FeatureItemProps {
  feature: FeatureType;
  delay: number;
}

export const FeatureItem: FC<FeatureItemProps> = ({ feature, delay }) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "flex items-center gap-2 transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay * 100}ms` }}>
      <div className="text-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle
            cx="12"
            cy="12"
            r="10"
          />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
      <span className="text-gray-700 font-medium">{feature.title}</span>
    </div>
  );
};
