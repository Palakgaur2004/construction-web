'use client';

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Building2,
  Palette,
  Hammer,
  ClipboardList,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Construction",
    desc: "Custom homes & renovations tailored to your lifestyle.",
    icon: Home,
    slug: "residential-construction",
  },
  {
    title: "Commercial Projects",
    desc: "Offices, retail, warehouses delivered on-budget.",
    icon: Building2,
    slug: "commercial-projects",
  },
  {
    title: "Interior Design",
    desc: "Aesthetic & functional interiors that inspire.",
    icon: Palette,
    slug: "interior-design",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Upgrade existing spaces with modern flair.",
    icon: Hammer,
    slug: "renovation-remodeling",
  },
  {
    title: "Project Management",
    desc: "End-to-end oversight for on-time completion.",
    icon: ClipboardList,
    slug: "project-management",
  },
  {
    title: "Expert Consultation",
    desc: "Get professional advice right from day one.",
    icon: MessageSquare,
    slug: "expert-consultation",
  },
];

const highlights = [
  "Experienced Team",
  "Quality Materials",
  "On-Time Delivery",
  "Transparent Pricing",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-200">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-rose-400 to-rose-600 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl"
          >
            End-to-end construction solutions, tailored to your vision.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-rose-600 shadow-sm hover:bg-rose-100"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-2xl border border-gray-200 p-6 transition hover:shadow-xl hover:border-rose-600"
              >
                <s.icon className="h-10 w-10 text-rose-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-rose-600">
                  {s.title}
                </h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose-600 hover:underline"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US STRIP */}
      <section className="bg-slate-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-bold text-rose-600"
          >
            Why Choose Our Services?
          </motion.h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-6 w-6 text-rose-600" />
                <span className="font-medium text-gray-800">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900"
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2 text-gray-600"
        >
          Let’s build something amazing together.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-700"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
