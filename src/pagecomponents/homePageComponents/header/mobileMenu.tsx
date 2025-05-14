"use client";
import { Button } from "@/components/ui/button";
import { menuData, type MenuItemType } from "@/lib/menu-data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type JSX, useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps): JSX.Element {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (id: number): void => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  // Recursive function to render menu items
  const renderMenuItem = (item: MenuItemType, depth = 0): JSX.Element => {
    const isExpanded = expandedItems.includes(item.id);
    const hasChildren = Boolean(item.children && item.children.length > 0);

    return (
      <li
        key={item.id}
        className={cn("w-full", depth > 0 ? "ml-4" : "")}>
        <div className="flex items-center justify-between">
          {item.href !== undefined && item.href !== null ? (
            <Link
              href={item.href}
              className="py-3 text-lg w-full text-gray-900"
              onClick={onClose}>
              {item.title}
            </Link>
          ) : (
            <button
              type="button"
              className="flex items-center justify-between w-full py-3 text-lg text-gray-900"
              onClick={() => hasChildren && toggleItem(item.id)}>
              {item.title}
              {hasChildren && <ChevronDown className={cn("h-5 w-5 transition-transform", isExpanded ? "transform rotate-180" : "")} />}
            </button>
          )}
        </div>

        {hasChildren && isExpanded && item.children && (
          <ul className="border-l-2 border-gray-200 mt-1 mb-2">{item.children.map((child) => renderMenuItem(child, depth + 1))}</ul>
        )}
      </li>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
          onClick={onClose}>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b">
              <Link
                href="/"
                onClick={onClose}>
                <Image
                  src="https://placehold.co/100x100.jpg"
                  alt="PLogic Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="p-2 rounded-md hover:bg-gray-100"
                onClick={onClose}>
                <X
                  className="h-6 w-6 text-gray-900"
                  aria-hidden="true"
                />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-1">{menuData.map((item) => renderMenuItem(item))}</ul>

              <div className="mt-8 space-y-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={onClose}
                  asChild>
                  <Link href="/get-started">GET STARTED</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  onClick={onClose}
                  asChild>
                  <Link href="/get-quote">GET QUOTE</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
