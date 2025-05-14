// src/components/sections/compliance/SearchBar.tsx
"use client";
import React from "react";
import type { FC } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const SearchBar: FC = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "relative flex items-center w-full max-w-md transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for skilled talent"
          className="w-full h-12 pl-4 pr-12 rounded-full border-2 border-gray-200 focus:outline-none focus:border-blue-500"
        />
        <button
          className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 flex items-center justify-center"
          aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5">
            <circle
              cx="11"
              cy="11"
              r="8"
            />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
