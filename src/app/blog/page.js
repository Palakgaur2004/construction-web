"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { posts } from "@/lib/posts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tags = ["All", "Residential", "Commercial", "Tips", "Trends"];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchTag = activeTag === "All" || p.tag === activeTag;
    const matchSearch = search
      ? p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchTag && matchSearch;
  });

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh]">
        <Image
          src="/images/blog-hero.jpg"
          alt="BuilderPro Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            BuilderPro Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            Insights, tips & stories from the job site.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTag(t)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                    activeTag === t
                      ? "bg-rose-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="grid gap-8 md:grid-cols-2">
              {filtered.map((post, idx) => (
                <AnimatedPostCard key={post.slug} post={post} delay={idx * 0.1} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
            </div>

            <div className="bg-rose-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Stay updated with the latest tips & trends.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Subscribed!");
                }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3"
                />
                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

// ✅ Separated animated post card
function AnimatedPostCard({ post, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: false,
    margin: "-20% 0px",
  });

  return (
    <motion.article
      ref={ref}
      initial={{ y: 30, opacity: 0, scale: 0.97 }}
      animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, type: "spring", delay }}
      className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white"
    >
      <Image
        src={post.image}
        alt={post.title}
        width={600}
        height={340}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-xs font-semibold text-rose-600 uppercase">
          {post.tag}
        </span>
        <h2 className="mt-2 text-xl font-bold text-gray-900">{post.title}</h2>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center mt-4 text-xs text-gray-500">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-rose-600"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
