import React, { useState } from "react";
import { Post } from "../types/Post";

interface PostFormProps {
  onAddPost: (post: Omit<Post, "id">) => void;
}

export function PostForm({ onAddPost }: PostFormProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    onAddPost({ title, body, userId: 1 });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 p-6">
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-3 border-2 border-foreground rounded-md bg-input-bg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div className="mb-6">
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          className="w-full p-3 border-2 border-foreground rounded-md bg-input-bg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-button-bg text-white px-6 py-3 rounded-md hover:bg-button-hover focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Post
      </button>
    </form>
  );
}
