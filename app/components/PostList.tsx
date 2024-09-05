"use client";

import React, { useState } from "react";
import { Post } from "../types/Post";

interface PostListProps {
  posts: Post[];
  onUpdatePost: (post: Post) => void;
  onDeletePost: (id: number) => void;
}

export const PostList = React.memo(function PostList({
  posts,
  onUpdatePost,
  onDeletePost,
}: PostListProps) {
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;
    onUpdatePost(editingPost);
    setEditingPost(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!editingPost) return;
    setEditingPost({ ...editingPost, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-6 bg-slate-900">Posts</h2>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-slate-900 border-2 border-foreground rounded-lg overflow-hidden"
          >
            {editingPost?.id === post.id ? (
              <form onSubmit={handleUpdate} className="p-6">
                <input
                  type="text"
                  name="title"
                  value={editingPost.title}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded-md bg-input-bg text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  name="body"
                  value={editingPost.body}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded-md bg-input-bg text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                />
                <div className="flex justify-end space-x-2">
                  <button
                    type="submit"
                    className="bg-button-bg hover:bg-button-hover text-white px-4 py-2 rounded-md"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingPost(null)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {post.title}
                </h3>
                <p className="text-foreground mb-4">{post.body}</p>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-button-bg hover:bg-button-hover text-white px-4 py-2 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeletePost(post.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});
