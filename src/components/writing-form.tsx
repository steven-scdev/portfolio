"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export function WritingForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [topics, setTopics] = useState("");
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== "steven12") {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/writings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          content,
          topics: topics.split(",").map((topic) => topic.trim()),
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      // Reset form
      setTitle("");
      setDescription("");
      setContent("");
      setTopics("");
      setPassword("");

      // Refresh the page to show new content
      router.refresh();
    } catch (error) {
      console.error("Error submitting:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="topics" className="block text-sm font-medium mb-1">
          Topics (comma-separated)
        </label>
        <Input
          id="topics"
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          placeholder="Technology, AI, Web Development"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-1">
          Content
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="h-48"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          required
          className={passwordError ? "border-red-500" : ""}
        />
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">Incorrect password</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Writing"}
      </Button>
    </form>
  );
}
