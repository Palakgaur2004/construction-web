"use client";

import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceDetails({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/services"
          className="inline-flex items-center text-rose-600 hover:underline text-sm mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Services
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {service.title}
        </h1>

        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow mb-8">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="text-gray-700 leading-relaxed text-lg mb-6 whitespace-pre-line">
          {service.description}
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Key Highlights
        </h2>
        <ul className="space-y-3 mb-10">
          {service.highlights.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-start gap-3 text-gray-700"
            >
              <CheckCircle className="text-rose-600 mt-1 h-5 w-5" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>

        {/* 🔻 Enquiry Button */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-rose-600 transition"
          >
            Enquire Now
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
