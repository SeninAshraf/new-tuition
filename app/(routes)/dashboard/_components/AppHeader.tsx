"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Home, Calendar, Notebook } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuOption = [
    {
      id: 1,
      name: "Home",
      path: "/dashboard",
      icon: <Home className="w-5 h-5 text-black" />,
    },
    {
      id: 2,
      name: "Schedule",
      path: "/dashboard/schedule",
      icon: <Calendar className="w-5 h-5 text-black" />,
    },
    {
      id: 3,
      name: "Notes",
      path: "/dashboard/notes",
      icon: <Notebook className="w-5 h-5 text-black" />,
    },
  ];

  return (
    <div className="relative w-full">
      <Navbar className="bg-white">
        {/* Desktop Navigation */}
        <NavBody className="bg-white">
          <div className="text-black text-xl font-bold italic px-2 py-1">
            Selinte Tuition
          </div>

          {/* Desktop Nav Items with Hover and Animated Underline */}
          <div
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative hidden lg:flex flex-row items-center justify-center space-x-4"
          >
            {menuOption.map((item, idx) => (
              <Link
                key={item.id}
                href={item.path}
                onMouseEnter={() => setHoveredIndex(idx)}
                className="relative px-4 py-2 text-black hover:text-gray-700 transition-all duration-200"
              >
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <UserButton appearance={{ elements: { userButtonAvatarBox: "border-black" } }} />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="bg-white">
          <MobileNavHeader>
            <div className="text-black text-xl font-bold italic px-2 py-1">
              Selinte Tuition
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-white text-black"
          >
            {menuOption.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-black hover:text-gray-700 flex items-center gap-2 transition-all duration-200"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonAvatarBox: "border-black" } }} />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default AppHeader;
