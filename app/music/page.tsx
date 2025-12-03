"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MusicPage() {
  const route = useRouter();
  return (
    <div
      className="flex flex-col bg-white dark:bg-black pt-8 w-full items-center pb-16"
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
      <main className="w-full max-w-md bg-white dark:bg-black overflow-y-scroll flex-1">
        <iframe
          data-testid="embed-iframe"
          className="w-full h-full"
          src="https://open.spotify.com/embed/playlist/1ImVc7apx77CbIhXRyGLuv?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </main>
    </div>
  );
}
