"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { menuData } from "@/lib/menu-data";
import MegaMenu from "./megaMenu";
import { MobileMenu } from "./mobileMenu";
import React from "react";
// Mobile menu component

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure header height for mega menu positioning
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === headerRef.current) {
          setHeaderHeight(entry.contentRect.height);
        }
      }
    });

    const currentHeaderRef = headerRef.current;
    if (currentHeaderRef) {
      resizeObserver.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        resizeObserver.unobserve(currentHeaderRef);
      }
    };
  }, [scrolled]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled ? "bg-primary text-white py-12" : "bg-white text-primary py-8"
      )}
      style={{ "--header-height": `${headerHeight}px` } as React.CSSProperties}>
      <div className="container mx-auto flex items-center justify-between ">
        <Link
          href="/"
          className="flex items-center relative z-10 bg-yellow-500">
          <Image
            src="https://placehold.co/400x400.jpg"
            alt="PLogic Logo"
            width={120}
            height={150}
            className={cn("transition-all duration-300", scrolled ? "h-10 w-auto" : "h-12 w-auto")}
            priority
          />
        </Link>

        {/* Desktop Navigation with MegaMenu */}
        <MegaMenu
          items={menuData}
          isScrolled={scrolled}
        />

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="outline"
            className={cn("bg-transparent transition-all duration-300", !scrolled && "hover:bg-primary hover:text-white duration-300 transition-all")}
            asChild>
            <Link href="/get-started">GET STARTED</Link>
          </Button>

          <Button
            variant={"outline"}
            className={cn("bg-transparent transition-all duration-300", !scrolled && "hover:bg-primary hover:text-white duration-300 transition-all")}
            asChild>
            <Link href="/get-quote">GET QUOTE</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={cn(
            "lg:hidden p-2 rounded-md focus:outline-none",
            scrolled ? "hover:bg-white/10 text-white" : "hover:bg-primary/10 text-primary"
          )}
          onClick={() => setMobileMenuOpen(true)}>
          <Menu
            className="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
