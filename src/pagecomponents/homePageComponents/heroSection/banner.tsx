"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ComponentProps = {
  banner: {
    title: string;
    subtitle: string;
    buttonText: string;
    image: string;
  }[];
};

export const Banner = ({ banner }: ComponentProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banner.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banner.length]);

  const title = banner[activeIndex]?.title ?? "";
  const words = title.split(" ");
  const firstLine = words.slice(0, 2).join(" ");
  const secondLine = words.slice(2).join(" ");

  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    }
  };

  const titleVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 3, ease: "easeOut" }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: { duration: 3, ease: "easeIn" }
    }
  };

  const subtitleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" }
    },
    exit: {
      y: -30,
      opacity: 0,
      transition: { duration: 2, ease: "easeIn" }
    }
  };

  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" }
    }
  };

  return (
    <section className="relative col-span-12 h-[calc(87.2dvh)] overflow-hidden text-white lg:px-10 px-20">
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 ">
          {/* Image container with overlays */}
          <div className="relative h-full w-full">
            <Image
              src={banner[activeIndex]?.image}
              alt={banner[activeIndex]?.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Primary color overlay with blend mode */}
            <div className="absolute inset-0 bg-primary/60 " />
            {/* Additional dark overlay for better text visibility if needed */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="absolute inset-0 flex items-center lg:px-28">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mx-6 grid gap-2 lg:container">
              <motion.p
                variants={titleVariants}
                className={cn("whitespace-normal font-montserrat text-[2rem] font-extrabold md:text-[4.5rem] lg:text-[4.8rem] lg:leading-[7rem]")}>
                {firstLine} <span className="text-secondary">{secondLine}</span>
              </motion.p>
              <motion.p
                variants={subtitleVariants}
                className="mt-2 font-montserrat text-base md:text-lg lg:text-2xl">
                {banner[activeIndex]?.subtitle}
              </motion.p>
              <motion.div
                variants={buttonVariants}
                className="mt-6 flex justify-end items-center space-x-5">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-secondary bg-transparent cursor-pointer duration-300 transition-all border-secondary px-8 py-4 ">
                  {banner[activeIndex]?.buttonText}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-secondary bg-transparent cursor-pointer duration-300 transition-all border-secondary px-8 py-4 ">
                  Consultation
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Banner;

