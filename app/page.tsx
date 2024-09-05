import { PostManager } from "./components/PostManager";

export default function Home() {
  return (
    <main className="min-h-screen py-8 bg-background text-foreground">
      <PostManager />
    </main>
  );
}
