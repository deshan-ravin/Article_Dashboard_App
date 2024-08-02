"use client";

import Navbar from "@/components/nav";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateArticle() {
  const router = useRouter();
  const [authorName, setAuthorName] = useState("");
  const [dateCreated, setDateCreated] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");

  useEffect(() => {
    // Example of query params extraction (replace with your actual logic)
    const url = new URL(window.location.href);
    const author = url.searchParams.get('author');
    const date = url.searchParams.get('date');
    const title = url.searchParams.get('title');
    const content = url.searchParams.get('content');
    
    if (author && date && title && content) {
      setAuthorName(author);
      setDateCreated(date);
      setArticleTitle(title);
      setArticleContent(content);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-25 pb-24 pl-24 pr-24 bg-zinc-300">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-left flex mt-10 mb-4 text-red-600">
          Deshan 👨‍💻
        </h1>
      </div>


      <Card className="w-full max-w-3xl p-4 mt-8"> 
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">{authorName}</CardTitle>
            <CardDescription className="text-gray-500">{dateCreated}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="title">Title 
                <CardDescription className="text-red-500">
                    (Update Title) 
                </CardDescription>
              </Label>
              <Input
                id="title"
                type="text"
                value={articleTitle}
                onChange={(e) => setArticleTitle(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Content
              <CardDescription className="text-red-500">
                    (Update Content) 
              </CardDescription>
              </Label>
              <Textarea
                id="content"
                value={articleContent}
                onChange={(e) => setArticleContent(e.target.value)}
                className="h-60 w-full"
              />
            </div>
          </div>
        </CardContent>

        <div className="p-4 flex justify-between">
        <a href="/user">
          <button className="px-6 py-3 text-lg font-medium text-red-600 bg-white rounded-md hover:bg-zinc-400 hover:text-red-700 transition duration-300">
            Cancel
          </button>
        </a>

          <button className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300">
            Update
          </button>
        </div>
      </Card>

      <Footer/>
    </main>
  );
}
