import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../types/Post";

export function usePostsManager(apiUrl: string) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>(apiUrl);
      setPosts(response.data);
    } catch (err) {
      setError("Failed to fetch posts");
    }
  };

  const addPost = async (newPost: Omit<Post, "id">) => {
    try {
      const response = await axios.post<Post>(apiUrl, newPost);
      setPosts([response.data, ...posts]);
    } catch (err) {
      setError("Failed to add post");
    }
  };

  const updatePost = async (updatedPost: Post) => {
    try {
      await axios.put(`${apiUrl}/${updatedPost.id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
      );
    } catch (err) {
      setError("Failed to update post");
    }
  };

  const deletePost = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      setError("Failed to delete post");
    }
  };

  return { posts, error, addPost, updatePost, deletePost };
}
