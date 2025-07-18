'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CTABanner() {
  return (
    <section className="bg-[#0F172A] py-16 px-4 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Ready to <span className="text-rose-500">Elevate</span> Your Next Construction Project?
        </h2>
        <p className="text-slate-300 text-lg">
          Let’s turn your vision into a solid, lasting reality. BuilderPro delivers quality, speed & trust.
        </p>
       <Link
              href="/contact"
              className="bg-rose-500 hover:bg-rose-600 text-white text-sm px-4 py-1.5 rounded-md transition font-semibold shadow"
            >
              Get a Free Quote
            </Link>
      </motion.div>
    </section>
  )
}
