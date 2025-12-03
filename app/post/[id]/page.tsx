"use client";

import { posts } from "@/app/lib/data";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";
import { Post } from "../../lib/definition";

export default function PostPage(props: { params: Promise<{ id: string }> }) {
  const route = useRouter();
  const data: Post[] = posts;
  const { id } = use(props.params);
  const post = data.find((p) => p.id === id);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div
      className="flex flex-col items-center bg-white dark:bg-black sm:items-start pt-8 pb-16"
      style={{ height: "inherit" }}
    >
      <button
        type="button"
        className="self-start ml-4 py-4 cursor-pointer"
        onClick={() => route.back()}
        aria-label="Go back to previous page"
      >
        <ChevronLeft aria-hidden="true"/>
      </button>
      <main className="w-full max-w-md flex flex-col items-center bg-white dark:bg-black overflow-y-scroll">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-auto object-cover object-center"
        />
        <p className="p-4 text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-sans">
          {post.description}
        </p>
      </main>
    </div>
  );
}
