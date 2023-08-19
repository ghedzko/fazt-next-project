"use client"

import Link from "next/link"

function PostCard({post}) {
  return (
            <article key={post.id}>
          <Link href={`/posts/${post.id}`}>
          <h4>{post.id} - {post.title}</h4>
          </Link>
          <p>{post.body}</p>
          <button onClick={() => alert(post.title)}>Click me</button>
        </article>
  )
}

export default PostCard