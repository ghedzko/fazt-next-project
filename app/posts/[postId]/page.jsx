import PostCard from "@/components/PostCard/PostCard";

async function loadPost (postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await response.json();
  return post;
};
async function PostPage ({ params }) {
  const post = await loadPost(params.postId);
  return (
    <section>
      <h1>Post {params.postId} - { post.title}</h1>
      <PostCard post={post} />
    </section>
  );
};

export default PostPage;
