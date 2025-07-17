'use client';

import { motion } from "framer-motion";
import { CheckCircle, Clock, HardHat, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: <HardHat className="w-8 h-8 text-rose-500" />,
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
    desc: "We complete our work only when you are fully satisfied.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4"
        >
          Why Clients Trust <span className="text-rose-600">BuilderPro</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-slate-600 max-w-2xl mx-auto mb-12"
        >
          Here&apos;s what sets us apart in the construction industry — our commitment to excellence, on-time delivery, and your satisfaction.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
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
        </div>
      </div>
    </section>
  );
}
