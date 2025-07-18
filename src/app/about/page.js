"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  Users,
  Heart,
  Shield,
  Eye,
  Building,
} from "lucide-react";

const timeline = [
  { year: 2012, title: "Founded", desc: "Started with a single dream and a toolbox." },
  { year: 2016, title: "100th Project", desc: "Crossed the century mark with a luxury villa." },
  { year: 2020, title: "Commercial Wing", desc: "Expanded into offices, retail, and warehouses." },
  { year: 2024, title: "500+ Happy Clients", desc: "And counting—every smile is our trophy." },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects" },
  { value: 12, suffix: "", label: "Years" },
  { value: 98, suffix: "%", label: "On-Time" },
  { value: 250, suffix: "Cr+", label: "Value" },
];

const founders = [
  {
    name: "Ravi Mehta",
    role: "Managing Director",
    quote: "We build structures, but more importantly, we build trust.",
    img: "/images/founder1.jpg",
  },
  {
    name: "Anita Sharma",
    role: "Chief Architect",
    quote: "Design is not just what it looks like, but how it makes you feel.",
    img: "/images/founder2.jpg",
  },
];

const values = [
  { icon: Shield, title: "Integrity" },
  { icon: Award, title: "Quality" },
  { icon: Eye, title: "Transparency" },
  { icon: Heart, title: "Client-First" },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] sm:h-[85vh]">
        <Image
          src="/images/about-hero.jpg"
          alt="BuilderPro team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
        >
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Built on Trust, Brick by Brick
          </h1>
          <p className="mt-6 max-w-2xl text-xl">
            From a single room to skyscrapers, we turn visions into landmarks.
          </p>
        </motion.div>
      </section>

      {/* 2. Story Timeline */}
      <section className="py-20 sm:py-32 bg-slate-200">
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h2>
          <div className="relative flex flex-col space-y-12 before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-rose-300 md:before:left-1/2 md:before:-translate-x-1/2">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="relative flex items-start md:items-center md:odd:flex-row-reverse"
              >
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <span className="text-3xl font-bold text-rose-600">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
                <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-rose-600 border-4 border-white md:left-1/2 md:-translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Stats */}
      <section className="py-20 bg-slate-200">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white shadow-xl py-10 rounded-lg"
            >
              <span className="block text-5xl font-extrabold text-rose-600">
                {s.value}
                {s.suffix}
              </span>
              <span className="mt-2 text-gray-700">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Founders */}
      <section className="py-20 bg-slate-200">
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            Meet the Founders
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center"
              >
                <Image
                  src={f.img}
                  alt={f.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
                <h3 className="mt-4 text-2xl font-bold">{f.name}</h3>
                <p className="text-rose-600 font-medium">{f.role}</p>
                <blockquote className="mt-4 italic text-gray-600">
                  “{f.quote}”
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-20 bg-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            Core Values
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-rose-600 shadow-lg">
                  <v.icon className="h-10 w-10" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <motion.section
        className="bg-slate-200 text-black py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold">Join 500+ Satisfied Clients</h2>
          <p className="mt-4 text-lg">
            Let’s build something remarkable together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md text-white bg-rose-600 px-8 py-4 text-lg font-semibold hover:bg-rose-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
