"use client";

import { useState } from "react";
import DarkModeToggle from "./DarkLightMode";
import { Menu, X } from "lucide-react"; // Import icons

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNav = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 dark:border-neutral-200/80">
      <div className="container px-2 sm:px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl">Suraj Pandit</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="py-1 hover:text-red-500">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#contact"
              className="border-neutral-700/80 py-2 px-3 hover:text-red-500 transition-all rounded-lg text-foreground"
            >
              Contact
            </a>
            <DarkModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden md:flex flex-row items-center justify-end">
            <DarkModeToggle />
            <button
              className="ml-4"
              onClick={toggleNav}
              aria-label="Toggle navigation"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 w-100 mx-1 flex flex-col justify-center rounded-md border border-violet-800 items-center lg:hidden bg-violet-200 mt-4">
            <ul className="text-center">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-3 text-violet-800 hover:text-blue-600 hover:scale-105 transition-all"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 p-2">
              <a
                href="#contact"
                className="border rounded-lg bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-800 py-2 px-3 hover:bg-gradient-to-bl hover:scale-105 transition-all text-white"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
