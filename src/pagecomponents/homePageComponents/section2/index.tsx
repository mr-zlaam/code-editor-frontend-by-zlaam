"use client";

import { motion } from "framer-motion";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FlipCard from "./flipCard";
import { services } from "./cardContent";
import { Lightbulb, Cloud, Shield, HeartPulse, ShoppingCart, Factory, Brain, Link, Wifi } from "lucide-react";
import NextLink from "next/link";

// Helper function to get the appropriate icon component
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ElementType> = {
    Lightbulb,
    Cloud,
    Shield,
    HeartPulse,
    ShoppingCart,
    Factory,
    Brain,
    Link,
    Wifi
  };

  return iconMap[iconName] ?? Lightbulb;
};

export default function Services() {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <section
        ref={servicesRef as React.RefObject<HTMLElement>}
        className="w-full py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={servicesVisible ? "visible" : "hidden"}
            variants={sectionVariants}
            className="space-y-12">
            <motion.div
              variants={titleVariants}
              className="text-center">
              <p className="mt-4 text-secondary max-w-2xl mx-auto">Innovate. Scale. Secure. Succeed.</p>
              <h2 className="text-3xl font-bold text-primary min-w-[85%]">
                Empowering Enterprises with Future-Ready IT & Digital Strategies for Scalable Growth, Resilient Security, and Market
                <span className="text-secondary"> Leadership</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = getIconComponent(service.icon);

                return (
                  <div
                    key={service.id}
                    className="h-80">
                    <FlipCard
                      index={index}
                      backgroundImage={service.backgroundImage}
                      frontContent={
                        <div className="flex flex-col items-center justify-center p-8 h-full text-blue-900">
                          <div className="bg-white p-4 rounded-full mb-6">
                            <Icon className="h-10 w-10 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                          <p className="text-center text-white">{service.frontContent}</p>
                        </div>
                      }
                      backContent={
                        <div className="flex flex-col items-center justify-center p-8 h-full bg-blue-900 text-white">
                          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                          <ul className="mb-6 space-y-2">
                            {service.backContent.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-center">
                                <span className="mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <NextLink
                            href={service.link}
                            className="mt-auto text-blue-300 hover:text-white transition-colors">
                            Learn More →
                          </NextLink>
                        </div>
                      }
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
