'use client'

import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0F172A]  text-slate-300 pt-12 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="BuilderPro" width={36} height={36} className="rounded-md" />
            <span className="text-xl font-bold text-white">BuilderPro</span>
          </div>
          <p className="text-sm text-slate-400">
            Building spaces that last a lifetime. Your vision, our expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/how-it-works">How It Works</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail size={16} /> support@builderpro.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> New Delhi, India</li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="#"><Instagram size={20} className="hover:text-rose-400" /></Link>
            <Link href="#"><Facebook size={20} className="hover:text-rose-400" /></Link>
            <Link href="#"><Linkedin size={20} className="hover:text-rose-400" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-center text-slate-500">
        &copy; {new Date().getFullYear()} BuilderPro. All rights reserved.
      </div>
    </footer>
  )
}
