import Link from "next/link";
import { posts } from "../lib/data";
import { Post } from "../lib/definition";

export default function Posts() {
  const data: Post[] = posts;
  return (
    <div className="grid grid-cols-3">
      {data.map((post: Post) => (
        <Link href={`/post/${post.id}`} key={post.id}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image_url}
            alt={post.title}
            className="object-cover object-center size-38 focus:opacity-80 hover:opacity-80"
          />
        </Link>
      ))}
    </div>
  );
}

