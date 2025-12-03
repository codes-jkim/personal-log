"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { films } from "../lib/data";

export default function FilmPage() {
  const route = useRouter();
  return (
    <div
      className="flex flex-col bg-white dark:bg-black pt-8 pb-16 w-full items-center"
      style={{ height: "inherit" }}
    >
      <button
        type="button"
        className="ml-4 py-4 cursor-pointer self-start"
        onClick={() => route.back()}
        aria-label="Go back to previous page"
      >
        <ChevronLeft aria-hidden="true"/>
      </button>
      <main className="w-full max-w-md bg-white dark:bg-black overflow-y-scroll flex-1">
        <ul className="grid grid-cols-3 gap-4 px-4 pb-4">
          {films.map((film) => (
            <li key={film.title} className="mx-auto relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-lg h-auto max-w-full"
                src={film.image_url}
                alt={`${film.title} Poster`}
              />
              <div className="absolute flex flex-col justify-center w-full h-full left-0 right-0 bottom-0 bg-black/70 text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity text-center pointer-events-none">
                <p>{film.title}</p>
                <p className="pt-0.5">{film.released}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
