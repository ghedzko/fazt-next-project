"use client"
function PostCard({post}) {
  return (
            <article key={post.id}>
          <h4>{post.id} - {post.title}</h4>
          <p>{post.body}</p>
          <button onClick={() => alert(post.title)}>Click me</button>
        </article>
  )
}

export default PostCard