 "use client";

import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  DraftingCompass,
  HardHat,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    subtitle: "Tell us your vision & requirements",
    details:
      "A dedicated project manager meets you on-site or virtually to capture every detail—budget, timeline, lifestyle, and aesthetic goals. We listen first, advise second.",
    icon: MessageSquare,
  },
  {
    title: "Design & Planning",
    subtitle: "We craft detailed plans tailored to your goals",
    details:
      "Architects produce CAD drawings, 3-D renders, and a transparent cost breakdown. You review, tweak, and approve before we ever break ground.",
    icon: DraftingCompass,
  },
  {
    title: "Build & Deliver",
    subtitle: "We execute with quality, speed, and precision",
    details:
      "Skilled trades, weekly photo/video updates, on-site quality checkpoints, and a live cost tracker keep you in control. Final walk-through and hand-over—keys only when you smile.",
    icon: HardHat,
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-slate-200">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[75vh]">
        <Image
          src="/images/how-hero.jpg"
          alt="BuilderPro process"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
          >
            How We Build Your Dream
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-xl sm:text-2xl"
          >
            From the first sketch to the final handover — full transparency, step by step.
          </motion.p>
        </div>
      </section>

      {/* Step Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-rose-600 text-white shadow-2xl">
                <step.icon className="h-14 w-14" />
              </div>
              <h3 className="mt-8 text-3xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-lg text-rose-700 font-medium">
                {step.subtitle}
              </p>
              <p className="mt-6 max-w-sm text-gray-600 leading-relaxed">
                {step.details}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
    <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-slate-200 text-slate-800 py-24"
>
  <div className="mx-auto max-w-3xl px-6 text-center">
    <h2 className="text-4xl font-bold">Ready to Begin?</h2>
    <p className="mt-4 text-lg text-slate-600">
      Book your free consultation and receive a tailored roadmap for your project.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-3 rounded-md bg-rose-500 px-8 py-4 text-lg font-semibold text-white hover:bg-rose-600 transition-all duration-300"
      >
        Book Your Free Consultation
      </Link>
      <Link
        href="/services"
        className="inline-flex items-center justify-center gap-3 rounded-md border border-slate-400 px-8 py-4 text-lg font-semibold text-slate-800 hover:bg-slate-100 transition-all duration-300"
      >
        Explore Our Services
      </Link>
    </div>
  </div>
</motion.section>

    </main>
  );
}
