"use client";

import { Film, Headphones, House } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-md z-9999 md:absolute fixed bg-white dark:bg-black bottom-0 py-4 border-t-gray-200 border-t">
      <ul className="flex space-x-4 flex-row justify-around align-middle py-1 w-full">
        <li>
          <Link href="/" aria-label="Go to home page">
            <House aria-hidden="true" />
          </Link>
        </li>
        <li>
          <Link
            href="/film"
            aria-label="Go to favourite film list page"
            prefetch={false}
          >
            <Film aria-hidden="true" />
          </Link>
        </li>
        <li>
          <Link href="/music" aria-label="Go to playlist page">
            <Headphones aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
