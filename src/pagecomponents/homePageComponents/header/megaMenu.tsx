/* eslint-disable no-undef */
"use client";

import { useState, useRef, useEffect, type JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MenuItemType } from "@/lib/menu-data";

// Animation variants
const menuVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
};

const miniMenuVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  exit: { opacity: 0, x: 10, transition: { duration: 0.15 } }
};

interface MegaMenuProps {
  items: MenuItemType[];
  isScrolled: boolean;
}

export default function MegaMenu({ items, isScrolled }: MegaMenuProps): JSX.Element {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (menuTimeout !== null) {
        clearTimeout(menuTimeout);
      }
    };
  }, [menuTimeout]);

  // Menu interaction handlers
  const handleMenuEnter = (menuTitle: string): void => {
    if (menuTimeout !== null) {
      clearTimeout(menuTimeout);
    }
    setActiveMenu(menuTitle);
  };

  const handleMenuLeave = (): void => {
    const timeout = setTimeout(() => setActiveMenu(null), 200);
    setMenuTimeout(timeout);
  };

  // Styles based on scroll state
  const textColor = isScrolled ? "text-white" : "text-primary";
  const hoverColor = isScrolled ? "hover:text-white/80" : "hover:text-secondary";
  const textShadow = !isScrolled ? "drop-shadow-sm" : "";

  return (
    <nav
      className="hidden lg:flex items-center space-x-1"
      ref={menuRef}>
      {items.map((item) => (
        <div
          key={item.id}
          className="relative">
          {item.href !== undefined && item.children === undefined ? (
            <Link
              href={item.href}
              className={cn("flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors", textColor, hoverColor, textShadow)}>
              {item.title}
            </Link>
          ) : (
            <button
              type="button"
              className={cn("flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors", textColor, hoverColor, textShadow)}
              onMouseEnter={() => handleMenuEnter(item.title)}
              onMouseLeave={handleMenuLeave}
              aria-expanded={activeMenu === item.title}>
              {item.title}
              <ChevronDown
                className={cn("ml-1 h-4 w-4 transition-transform duration-200", activeMenu === item.title ? "transform rotate-180" : "")}
              />
            </button>
          )}
        </div>
      ))}

      {/* Centered Mega Menu */}
      <AnimatePresence>
        {activeMenu !== null && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed left-0 right-0 top-[6rem] z-50 mx-auto w-full max-w-6xl bg-white rounded-md shadow-lg"
            onMouseEnter={() => {
              if (menuTimeout !== null) {
                clearTimeout(menuTimeout);
                setMenuTimeout(null);
              }
            }}
            onMouseLeave={() => setActiveMenu(null)}>
            {items.map(
              (item) =>
                item.title === activeMenu &&
                item.children !== undefined && (
                  <div
                    key={item.id}
                    className="p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {/* Column 1: Featured Image */}
                      <div className="col-span-1">
                        <div className="relative h-[200px] w-[200px] rounded-lg overflow-hidden">
                          <Image
                            src={item.image !== undefined ? item.image : "/images/menu/default.jpg"}
                            alt={`${item.title} featured image`}
                            fill
                            sizes="200px"
                            style={{ objectFit: "cover" }}
                            className="transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                            <h3 className="text-white text-lg font-bold">{item.title}</h3>
                            {item.description !== undefined && <p className="text-white/90 text-xs mt-1">{item.description}</p>}
                          </div>
                        </div>
                      </div>

                      {/* Columns 2-4: Menu Categories */}
                      <div className="col-span-3 grid grid-cols-3 gap-6">
                        {item.children.slice(0, 9).map((category, index) => (
                          <MainMenuItem
                            key={category.id}
                            item={category}
                            columnIndex={index}
                            parentTitle={item.title}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

interface MainMenuItemProps {
  item: MenuItemType;
  columnIndex: number;
  parentTitle: string;
}

function MainMenuItem({ item, columnIndex }: MainMenuItemProps): JSX.Element {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (menuTimeout !== null) {
        clearTimeout(menuTimeout);
      }
    };
  }, [menuTimeout]);

  // Mouse event handlers
  const handleMouseEnter = (): void => {
    if (menuTimeout !== null) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
    setShowSubMenu(true);
  };

  const handleMouseLeave = (): void => {
    const timeout = setTimeout(() => setShowSubMenu(false), 100);
    setMenuTimeout(timeout);
  };

  // Show mini-menu to the left for columns 3-4
  const showToLeft = columnIndex >= 1;

  return (
    <div
      ref={itemRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="mb-3">
        <h3 className="text-primary font-semibold text-sm tracking-wide">{item.title}</h3>
      </div>

      {item.children !== undefined && item.children.length > 0 && (
        <ul className="space-y-2">
          {item.children.slice(0, 5).map((subItem) => (
            <li key={subItem.id}>
              <Link
                href={subItem.href !== undefined ? subItem.href : "#"}
                className="text-gray-600 hover:text-secondary transition-colors text-sm flex items-center justify-between group">
                {subItem.title}
                {subItem.children !== undefined && subItem.children.length > 0 && <ChevronRight className="h-4 w-4 opacity-70" />}
              </Link>
            </li>
          ))}
          {item.children.length > 5 && (
            <li>
              <Link
                href="#"
                className="text-primary text-sm hover:underline">
                View all {item.title}
              </Link>
            </li>
          )}
        </ul>
      )}

      {/* Mini-mega menu */}
      {item.children !== undefined && showSubMenu && (
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={miniMenuVariants}
            className={cn("absolute top-0 z-30 bg-white rounded-md shadow-lg p-4 min-w-[220px]", showToLeft ? "right-full mr-2" : "left-full ml-2")}
            onMouseEnter={() => {
              if (menuTimeout !== null) {
                clearTimeout(menuTimeout);
                setMenuTimeout(null);
              }
              setShowSubMenu(true);
            }}
            onMouseLeave={() => setShowSubMenu(false)}>
            <h4 className="font-medium text-primary mb-3">{item.title}</h4>
            <ul className="space-y-2">
              {item.children.map((subItem) => (
                <li key={subItem.id}>
                  <Link
                    href={subItem.href !== undefined ? subItem.href : "#"}
                    className="text-gray-600 hover:text-secondary transition-colors text-sm block py-1">
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
