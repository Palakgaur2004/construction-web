"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Neha Patel",
    city: "Hyderabad",
    project: "Home Renovation",
    quote:
      "BuilderPro turned our 20-year-old house into a modern dream in 4 weeks!",
    img: "/images/testimonial-neha.jpg",
    rating: 5,
  },
  {
    name: "Ravi Sharma",
    city: "Mumbai",
    project: "Commercial Office",
    quote: "On-time, on-budget, and the quality exceeded every expectation.",
    img: "/images/testimonial-ravi.jpg",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    city: "Delhi",
    project: "Kitchen Remodel",
    quote:
      "Transparent pricing and daily photo updates made the process stress-free.",
    img: "/images/testimonial-anjali.jpg",
    rating: 5,
  },
  {
    name: "Arjun Kapoor",
    city: "Bangalore",
    project: "Retail Store",
    quote: "We opened 2 days ahead of schedule—unbelievable execution!",
    img: "/images/testimonial-arjun.jpg",
    rating: 5,
  },
  {
    name: "Sunita Reddy",
    city: "Chennai",
    project: "Bathroom Upgrade",
    quote: "Attention to detail was flawless. Highly recommend!",
    img: "/images/testimonial-sunita.jpg",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    city: "Pune",
    project: "Duplex Construction",
    quote: "From blueprint to keys, everything felt effortless.",
    img: "/images/testimonial-vikram.jpg",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-slate-200">
      {/* 1. Hero Section with background */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/images/testimonial-hero.jpg"
          alt="Testimonials Background"
          fill
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.div
          className="relative z-20 text-white px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.4 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            What Our Clients Say
          </h1>
          <div className="mt-4 flex justify-center items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
            ))}
            <span className="ml-2 text-lg font-semibold text-white">
              4.9/5 Average
            </span>
          </div>
        </motion.div>
      </section>

      {/* 2. Stats bar */}
      <motion.section
        className="bg-gray-900 text-white py-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ amount: 0.4 }}
      >
        <div className="mx-auto max-w-4xl px-6 flex justify-center gap-8 text-center text-sm sm:text-base">
          <div>500+ Reviews</div>
          <div>98% Referral Rate</div>
          <div>4.9 / 5 Rating</div>
        </div>
      </motion.section>

      {/* 3. Testimonials grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{t.name}</h3>
                    <p className="text-sm text-gray-500">
                      {t.city} • {t.project}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-3">“{t.quote}”</p>
                <div className="flex items-center">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <motion.section
        className="bg-slate-200 text-black py-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.4 }}
      >
        <h2 className="text-3xl font-bold">Ready to Join Them?</h2>
        <p className="mt-2 text-lg">Let’s create something amazing together.</p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-rose-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-rose-700 transition"
        >
          Get Your Free Quote
        </Link>
      </motion.section>
    </main>
  );
}
