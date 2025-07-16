"use client";

import { motion } from "framer-motion";
import { MessagesSquare, PencilRuler, Hammer } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "Tell us your vision and requirements",
    icon: MessagesSquare,
  },
  {
    title: "Design & Planning",
    description: "We craft detailed plans tailored to your goals",
    icon: PencilRuler,
  },
  {
    title: "Build & Deliver",
    description: "We execute with quality, speed, and precision",
    icon: Hammer,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-800"
        >
          How It Works
        </motion.h2>
        <p className="mt-2 text-slate-600 text-lg">
          A simple and effective process from idea to reality
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-t-4 border-rose-500"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-10 w-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
