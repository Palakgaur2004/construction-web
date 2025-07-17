'use client'

import Image from "next/image";
import Link from "next/link";
import { Building2, Users, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: 250 },
  { label: "Years of Experience", value: 12 },
  { label: "Happy Clients", value: 180 },
];

export default function AboutCompany() {
  return (
    <section className="bg-slate-200 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
         viewport={{ once: false, amount: 0.3 }}

          className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 shadow">
            <Image
              src="/aboutcompany.jpg"
              alt="BuilderPro team on site"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="mt-12 lg:mt-0 text-slate-800">
            <h2 className="text-3xl font-bold tracking-tight text-rose-600 sm:text-4xl">
              About BuilderPro
            </h2>
            <p className="mt-6 text-lg leading-7  ">
              From concept to completion, BuilderPro delivers craftsmanship that
              stands the test of time. We combine decades of industry expertise
              with an unwavering commitment to quality, transparency, and
              on-time delivery.
            </p>

            {/* Feature bullets */}
            <ul className="mt-8 space-y-5 list-disc pl-6 text-left">
              {[
                {
                  icon: Building2,
                  title: "Integrity First",
                  text: "Transparent quotes, honest timelines, and zero surprises.",
                },
                {
                  icon: Users,
                  title: "Client-Centric",
                  text: "Your vision drives every decision we make.",
                },
                {
                  icon: Heart,
                  title: "Quality Craftsmanship",
                  text: "Premium materials and meticulous attention to detail.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <item.icon
                    className="h-6 w-6 flex-shrink-0 text-rose-500"
                    aria-hidden="true"
                  />
                  <div>
                    <strong className="font-semibold text-slate-900">
                      {item.title}
                    </strong>
                    <p className="text-slate-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-300 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-rose-500">
                    {stat.value}+
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition"
              >
                Learn more about us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
