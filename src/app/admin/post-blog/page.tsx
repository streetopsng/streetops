"use client"
import Editor from "@/components/Editor";


export default function AdminPage() {
  return (
    <main className="px-3 py-6">
      <h1 className="text-xl font-bold mb-4">Create New Blog Post</h1>
      <Editor />
    </main>
  );
}
