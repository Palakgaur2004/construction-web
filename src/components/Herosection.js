"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, BadgeCheck, Workflow } from "lucide-react";

export function Herosection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Black Fade Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero1.jpg"
          alt="Construction Site"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="w-full h-full flex flex-col justify-center items-center px-6 text-center text-white">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
        >
          Building <span className="text-rose-600">Better Futures</span> One
          Brick at a Time
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mt-4 max-w-2xl text-slate-200"
        >
          From concept to completion — we deliver craftsmanship that stands the
          test of time.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 text-lg shadow-lg rounded-md transition"
          >
            Get a Quote
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center text-white border border-white px-6 py-3 text-lg rounded-md hover:bg-white/10 transition"
          >
            View Projects
          </Link>
        </motion.div>

        {/* Decorative Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 right-10 hidden md:block"
        ></motion.div>

        {/* Promise Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <div className="flex flex-col items-center text-white ">
            <BadgeCheck size={36} className="text-rose-400 mb-2" />
            <h3 className="font-semibold text-lg">Timely Delivery</h3>
            <p className="text-sm text-slate-300 mt-2 text-center">
              We value your time and ensure on-time project completion.
            </p>
          </div>
          <div className="flex flex-col items-center text-white">
            <Workflow size={36} className="text-rose-400 mb-2" />
            <h3 className="font-semibold text-lg">Streamlined Process</h3>
            <p className="text-sm text-slate-300 mt-2 text-center">
              From blueprint to handover, our process is smooth and transparent.
            </p>
          </div>
          <div className="flex flex-col items-center text-white">
            <BadgeCheck size={36} className="text-rose-400 mb-2" />
            <h3 className="font-semibold text-lg">Quality First</h3>
            <p className="text-sm text-slate-300 mt-2 text-center">
              We prioritize quality materials and expert craftsmanship every
              step.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
