import { notFound } from "next/navigation";
import { posts } from "@/lib/posts"; // ✅ Import posts data
import Image from "next/image";
import PostContent from "./PostContent"; // ✅ Import PostContent component

// ✅ Generate metadata dynamically for SEO
export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return {
    title: post.title,
    description: post.description,
  };
}

// ✅ Render the blog post based on slug
export default function BlogPostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return <PostContent post={post} />;
}
