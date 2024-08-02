"use client";

import React, { useState } from "react";
import Navbar from "@/components/nav";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/footer";
import axios from "axios";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Current date in YYYY-MM-DD format
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userName, setUserName] = useState("Deshan");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/articles", {
        title,
        content,
        author,
        date
      });
      setSuccess("Article created successfully!");
      // Optionally, redirect to another page or clear the form
      setTitle("");
      setContent("");
      setAuthor("");
    } catch (error) {
      setError("Failed to create article.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-25 pb-24 pl-24 pr-24 bg-zinc-300">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-left flex mt-10 mb-4 text-red-600">
          {userName} 👨‍💻
        </h1>
      </div>

      <Card className="w-full max-w-3xl p-4 mt-8"> 
        <CardHeader>
          <CardTitle>Create Your New Article ✍️</CardTitle>
          <CardDescription className="text-red-500">
                ARTICLE DASHBOARD
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                className="w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                className="h-60 w-full"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                type="text"
                className="w-full"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                className="w-full"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </form>
        </CardContent>

        <div className="p-4 flex justify-between">
          <a href="/user">
            <button className="px-6 py-3 text-lg font-medium text-red-600 bg-white rounded-md hover:bg-zinc-400 hover:text-red-700 transition duration-300">
              Cancel
            </button>
          </a>
          
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300"
          >
            Create
          </button>
        </div>
      </Card>
      
      <Footer/>
    </main>
  );
}
