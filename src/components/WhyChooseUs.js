"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, HardHat, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: <HardHat className="w-8 h-8 text-rose-500" />, // Changed to rose
    title: "Experienced Team",
    desc: "Skilled professionals delivering excellence in every project.",
  },
  {
    icon: <Clock className="w-8 h-8 text-rose-500" />,
    title: "On-Time Delivery",
    desc: "Timely execution without compromising quality.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-rose-500" />,
    title: "Quality Assurance",
    desc: "Rigorous checks to ensure high construction standards.",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-rose-500" />,
    title: "Customer Satisfaction",
    desc: "Our work isn't done until you're happy.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4"
        >
          Why Clients Trust <span className="text-rose-600">BuilderPro</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-slate-600 max-w-2xl mx-auto mb-12"
        >
          Here's what sets us apart in the construction industry — our commitment to excellence, on-time delivery, and your satisfaction.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
