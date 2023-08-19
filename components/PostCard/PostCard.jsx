"use client";

import Link from "next/link";

function PostCard({ post }) {
  return (
    <article key={post.id} className="bg-gray-700 p-10">
      <Link href={`/posts/${post.id}`}>
        <h4 className="text-xl font-semibold mb-3">
          {post.id} - {post.title}
        </h4>
      </Link>
      <p className="text-justify text-slate-400">{post.body}</p>
      <button onClick={() => alert(post.title)}>Click me</button>
    </article>
  );
}

export { PostCard };
