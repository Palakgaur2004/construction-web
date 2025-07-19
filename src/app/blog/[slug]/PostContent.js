"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PostContent({ post }) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* ✅ Animate only heading + image part */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h1 className="text-4xl font-bold text-slate-800">{post.title}</h1>
        <p className="mt-2 text-gray-500">
          {post.author} • {post.date}
        </p>

        {/* ✅ Blog Image */}
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          className="my-8 rounded-xl"
          priority
        />
      </motion.div>

      {/* ❌ No animation here to prevent content from disappearing */}
      <div
        className="prose prose-slate max-w-none text-slate-800"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Back link */}
      <Link href="/blog" className="mt-12 inline-block text-indigo-600">
        ← Back to Blog
      </Link>
    </main>
  );
}
