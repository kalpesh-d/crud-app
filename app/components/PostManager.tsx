"use client";

import { PostForm } from "./PostForm";
import { PostList } from "./PostList";
import { usePostsManager } from "../hooks/usePostsManager";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export function PostManager() {
  const { posts, error, addPost, updatePost, deletePost } =
    usePostsManager(API_BASE_URL);

  if (error)
    return <div className="text-red-500 text-center text-xl">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto bg-content p-8 rounded-lg bg-slate-900">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
        Add Post
      </h1>
      <PostForm onAddPost={addPost} />
      <PostList
        posts={posts}
        onUpdatePost={updatePost}
        onDeletePost={deletePost}
      />
    </div>
  );
}
