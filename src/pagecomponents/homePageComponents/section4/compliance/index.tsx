"use client";
import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ShieldCheck, Shield, Lock } from "lucide-react";

export const ComplianceSection: React.FC = () => {
  const bgImageAnimation = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const textBoxAnimation = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const logoAnimation = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  });

  const descriptionAnimation = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="max-w-screen-xl mx-auto rounded-xl min-h-[500px] lg:h-[80dvh] m-3 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="h-full w-full flex flex-col lg:flex-row items-center">
          {/* Left section with background image */}
          <div className="left w-full lg:h-full lg:flex-[2] relative overflow-hidden">
            {/* Background image with overlay - absolute positioning ONLY within this div */}
            <div
              ref={bgImageAnimation.ref as React.RefObject<HTMLDivElement>}
              className={cn(
                "absolute inset-0 w-full h-full transition-opacity duration-1000",
                bgImageAnimation.isVisible ? "opacity-100" : "opacity-0"
              )}>
              <div className="relative w-full h-full hidden lg:flex">
                <Image
                  src="https://placehold.co/1000x1000.jpg"
                  alt="Business meeting"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0" />
              </div>
            </div>

            {/* Content for left section */}
            <div className="relative z-10 p-4 md:p-6 bg-primary/80 lg:p-8 min-h-[350px] lg:h-full flex flex-col justify-between items-center">
              {/* Compliance icons */}
              <div className="flex space-x-4 md:space-x-6 my-6 lg:mb-8">
                <div className="flex items-center bg-white rounded-full p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 justify-center">
                  <ShieldCheck className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="flex items-center bg-white rounded-full p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 justify-center">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="flex items-center bg-white rounded-full p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 justify-center">
                  <Lock className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
              </div>

              {/* Compliance text box */}
              <div
                ref={textBoxAnimation.ref as React.RefObject<HTMLDivElement>}
                className={cn(
                  "bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-lg max-w-xl w-full mx-4 md:mx-0 transition-all duration-700 transform",
                  textBoxAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                <p className="font-medium text-base md:text-lg text-primary">
                  Our solutions are designed to align with US industry regulations, including GDPR, HIPAA, PCI-DSS, and federal cybersecurity
                  standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right section with solid background */}
          <div className="right w-full lg:h-full lg:flex-1 bg-primary p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center">
            {/* America First logo */}
            <div
              ref={logoAnimation.ref as React.RefObject<HTMLDivElement>}
              className={cn(
                "relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6 transition-all duration-700 transform",
                logoAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
              <Image
                src="https://placehold.co/200x200.jpg"
                alt="America First"
                fill
                sizes="(max-width: 768px) 96px, 128px"
                className="object-contain"
              />
            </div>

            {/* Description */}
            <div
              ref={descriptionAnimation.ref as React.RefObject<HTMLDivElement>}
              className={cn(
                "text-white mb-6 md:mb-8 max-w-md text-center lg:text-right transition-all duration-700 transform",
                descriptionAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
              <p className="text-base md:text-lg">
                At PLS, we master your market&apos;s intricacies. Our experts deliver tailored solutions nationwide, from advanced automation to
                transformative digital marketing, driving your success.
              </p>
            </div>
            <div className="rounded-full overflow-hidden">
              <Image
                height={80}
                width={80}
                src={"https://placehold.co/200x200.jpg"}
                alt="CEO"
                className="md:h-[100px] md:w-[100px]"
              />
            </div>
            <h1 className="text-white font-bold text-base md:text-lg my-2">Fyaz Khan (CEO)</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

