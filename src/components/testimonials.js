"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Sharma",
    feedback:
      "BuilderPro made the entire construction process smooth and stress-free. Highly professional and great quality work!",
  },
  {
    name: "Neha Patel",
    feedback:
      "The team was reliable, responsive, and delivered more than we expected. We love our new space!",
  },
  {
    name: "Arjun Mehta",
    feedback:
      "On-time delivery, transparent communication, and solid build quality. Would definitely recommend BuilderPro!",
  },
];

export function HomeTestimonials() {
  return (
    <section className="bg-slate-200 py-16 px-4 md:px-8  ">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-8"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md border border-slate-200 text-left"
            >
              <div className="flex items-center gap-2 mb-4 text-rose-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 mb-4">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>
              <p className="text-sm font-semibold text-slate-900">
                &mdash; {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
