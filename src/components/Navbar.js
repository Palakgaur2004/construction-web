"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - clickable */}
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

          {/* CTA Buttons */}
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
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-3 space-y-3 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-sm font-stretch-50% px-5 ${
                  pathname === item.href
                    ? "text-rose-600 bold"
                    : "text-slate-700 hover:text-rose-500"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
          </div>
        )}
      </div>
    </motion.header>
  );
}
