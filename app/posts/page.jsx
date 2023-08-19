import { PostCard } from '@/components'
import React from 'react'
async function loadPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json() 
  console.log({posts})
  return posts
}

async function PostsPages() {
 const posts = await loadPosts()
  return (
    <section>
      <h3>Posts</h3>
      {posts.map(post => (
        <PostCard post={post} key={post.id} />
      ))}

    </section>
  )
}

export default PostsPages