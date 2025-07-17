'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, Paintbrush, Ruler, Building } from "lucide-react";

const services = [
  {
    icon: <Building className="w-8 h-8 text-rose-500" />,
    title: "Residential Construction",
    desc: "From foundation to finish, we build homes that last."
  },
  {
    icon: <Wrench className="w-8 h-8 text-rose-500" />,
    title: "Renovations & Repairs",
    desc: "Upgrade, fix, or modernize any part of your space."
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-rose-500" />,
    title: "Interior Designing",
    desc: "Smart, aesthetic, and functional interior solutions."
  },
  {
    icon: <Ruler className="w-8 h-8 text-rose-500" />,
    title: "Architectural Planning",
    desc: "Accurate designs to bring your vision to life."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function HomeServices() {
  return (
    <section className="bg-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12"
        >
          Our <span className="text-rose-600">Services</span>
        </motion.h2>

        <div className="flex flex-col gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-start justify-between gap-6 bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-white p-4 rounded-full">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md">
                    {service.desc}
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: false }}
                className="hidden md:flex text-rose-500 font-semibold text-sm"
              >
                <Link href="/services" className="hover:underline">
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
