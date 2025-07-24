// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-50" // ➜ solid white, no blur
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="BuilderPro Logo"
              width={36}
              height={36}
              className="rounded-md"
            />
            <div>
              <p className="text-lg font-bold tracking-wide text-[#1E293B]">
                BuilderPro
              </p>
              <p className="text-xs text-gray-500 -mt-1">
                Construction Experts
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium underline-offset-4 transition ${
                    isActive
                      ? "text-rose-600 bold"
                      : "text-slate-700 hover:text-rose-500 hover:bold"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="border border-gray-300 text-sm px-3 py-1.5 rounded-md hover:bg-gray-100 transition">
              Call Now
            </button>
            <Link
              href="/contact"
              className="bg-rose-500 hover:bg-rose-600 text-white text-sm px-4 py-1.5 rounded-md transition font-semibold shadow"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 flex flex-col px-6 pt-6 pb-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center space-x-2 mb-8 text-lg font-semibold text-slate-700"
                >
                  <X size={28} />
                  <span>Close</span>
                </button>

                {/* Nav Links */}
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        className={`text-1.9xl font-bold ${
                          pathname === item.href
                            ? "text-rose-600"
                            : "text-slate-800 hover:text-rose-500"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}