"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogPostClient({ post }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 32 });
    }
  }, [inView, controls]);

  return (
    <motion.main
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-6 py-20"
    >
      <h1 className="text-4xl font-bold text-slate-800">{post.title}</h1>
      <p className="mt-2 text-gray-500">
        {post.author} • {post.date}
      </p>

      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={450}
        className="my-8 rounded-xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Link
        href="/blog"
        className="mt-12 inline-block text-indigo-600 hover:underline"
      >
        ← Back to Blog
      </Link>
    </motion.main>
  );
}
