"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Villa",
    category: "Residential",
    images: ["/images/villa-1.jpg", "/images/villa-2.jpg", "/images/villa-3.jpg",
      "/images/villa-4.jpg"],
    specs: {
      area: "4 500 sq ft",
      duration: "6 months",
      budget: "₹2.5 Cr",
    },
    description:
      "A sleek, contemporary villa with floor-to-ceiling windows, smart home automation, and a rooftop infinity pool. Ideal for families seeking luxury and function.",
  },
  {
    id: 2,
    title: "Tech-Office Renovation",
    category: "Commercial",
    images: ["/images/office-1.jpg", "/images/office-2.jpg", "/images/office-3.jpg", 
      "/images/office-4.jpg"],
    specs: {
      area: "3 200 sq ft",
      duration: "30 days",
      budget: "₹75 L",
    },
    description:
      "Transformed a dull workspace into a vibrant, open-plan office with acoustic panels and biophilic walls. Designed for creativity and collaboration.",
  },
  {
    id: 3,
    title: "Restaurant Fit-out",
    category: "Commercial",
    images: ["/images/rest-1.jpg", "/images/rest-2.jpg", "/images/rest-3.jpg", 
      "/images/rest-4.jpg"],
    specs: {
      area: "1 800 sq ft",
      duration: "45 days",
      budget: "₹40 L",
    },
    description:
      "Rustic-indoor meets alfresco dining with custom lighting and reclaimed wood finishes. A perfect blend of ambiance and function for high footfall areas.",
  },
  {
    id: 4,
    title: "Apartment Remodel",
    category: "Residential",
    images: ["/images/apt-1.jpg", "/images/apt-2.jpg", "/images/apt-3.jpg", 
      "/images/apt-4.jpg"],
    specs: {
      area: "1 200 sq ft",
      duration: "21 days",
      budget: "₹18 L",
    },
    description:
      "Budget-friendly remodel that turned cramped rooms into airy, multifunctional spaces. Smart storage and minimal design create a fresh vibe.",
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!selected) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === selected.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [selected, currentIndex]);

  return (
    <>
      {/* Hero section */}
      <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/images/project-hero.jpg')" }}>
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Crafted With Precision</h1>
          <p className="mt-2 text-lg sm:text-xl">Explore our finest architectural achievements</p>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-slate-200 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">Our Projects</h2>
          <p className="mt-2 text-center text-gray-600">Click any project to explore in detail.</p>

          <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2">
            {projects.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white shadow-lg overflow-hidden"
              >
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  width={600}
                  height={340}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.category}</p>
                  <button
                    onClick={() => {
                      setSelected(p);
                      setCurrentIndex(0);
                    }}
                    className="mt-3 inline-block bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700"
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex flex-col md:flex-row"
          >
            <div className="relative w-full md:w-4/5 h-[60vh] md:h-auto flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={selected.images[currentIndex]}
                    alt={selected.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() =>
                  setCurrentIndex((c) =>
                    c === 0 ? selected.images.length - 1 : c - 1
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 p-2 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((c) =>
                    c === selected.images.length - 1 ? 0 : c + 1
                  )
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 p-2 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="w-full md:w-1/5 bg-white p-4 md:p-6 overflow-y-auto">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold">{selected.title}</h2>
                <button onClick={() => setSelected(null)} className="p-1">
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <p><strong>Category:</strong> {selected.category}</p>
                <p><strong>Area:</strong> {selected.specs.area}</p>
                <p><strong>Duration:</strong> {selected.specs.duration}</p>
                <p><strong>Budget:</strong> {selected.specs.budget}</p>
              </div>
              <p className="mt-3 text-sm text-gray-700">{selected.description}</p>
              <Link
                href="/contact"
                className="mt-4 inline-block w-full text-center bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700"
              >
                Get Similar Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
