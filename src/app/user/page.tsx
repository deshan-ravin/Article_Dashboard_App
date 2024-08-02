import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav";
import { ArticleCard } from "@/components/articlecard";
import Article from "@/lib/types";

export default function Home() {
  const articles: Article[] = [
    {
      authorName: "John Doe",
      dateCreated: "2024-07-20",
      articleTitle: "Understanding TypeScript",
      articleContent: "This article delves deeply into the world of artificial intelligence, examining the history, key concepts, and ethical considerations surrounding AI development. It explores various branches of AI, including machine learning, natural language processing, and computer vision, and discusses the potential impacts of AI on different industries. The article also addresses the challenges and future prospects of integrating AI technologies into everyday applications and the workforce."
    },
    {
      authorName: "Jane Smith",
      dateCreated: "2024-07-19",
      articleTitle: "Getting Started with Next.js",
      articleContent: "This article provides a detailed overview of the principles and practices of DevOps, emphasizing the importance of collaboration between development and operations teams. It outlines the key benefits of adopting a DevOps culture, such as increased deployment frequency, faster time to market, and improved recovery times. The article also explores various tools and methodologies used in DevOps, including continuous integration, continuous delivery, and infrastructure as code."
    },
    {
      authorName: "Alice Johnson",
      dateCreated: "2024-07-18",
      articleTitle: "Spring Boot for Beginners",
      articleContent: "AThis article explores the complexities of blockchain technology, explaining its foundational concepts and the mechanics behind distributed ledgers. It discusses the significance of blockchain in enabling secure, transparent transactions without intermediaries, and its potential applications across various sectors, such as finance, supply chain, and healthcare. The article also examines the challenges facing blockchain adoption, including scalability issues, regulatory concerns, and the need for standardization."
    },
    {
      authorName: "Bob Brown",
      dateCreated: "2024-07-17",
      articleTitle: "Advanced AWS Techniques",
      articleContent: "This article explores the complexities of blockchain technology, explaining its foundational concepts and the mechanics behind distributed ledgers. It discusses the significance of blockchain in enabling secure, transparent transactions without intermediaries, and its potential applications across various sectors, such as finance, supply chain, and healthcare. The article also examines the challenges facing blockchain adoption, including scalability issues, regulatory concerns, and the need for standardization."
    }
  ];

  const userName = " Deshan";

  return (
    
    <main className="flex flex-col  justify-between pb-20 pt-2 bg-zinc-300 min-h-screen">
  <NavBar />

        <h1 className="text-6xl font-bold text-left flex mt-10 mb-4 ml-20 text-zinc-700">
        Hello!  <div className="text-red-600"> {userName} 👋</div>
        </h1>

        <h2 className="text-5xl font-bold font-sans mt-1 w-full text-center mb-8">
        Welcome to your Article Dashboard 📟
        </h2>

        <div className="flex items-center justify-center py-10 bg-zinc-300">
            <a href="/create">
            <button className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300">
                Create New Article
            </button>
            </a>
            
        </div>

        <h3 className="text-2xl font-bold font-sans w-full text-center border-b border-red-500 dark:border-trueGray-700 pt-5 mb-0">
             Articles
        </h3>
        <div className="flex flex-wrap items-center justify-center w-full max-w-1xl gap-5 mt-10 mx-auto">
            {
              articles.map((article, index) => (
                <ArticleCard key={index} 
                articleTitle={article.articleTitle} 
                articleContent={article.articleContent} 
                authorName={article.authorName}
                dateCreated={article.dateCreated}/>
              ))  
            }
        </div>

  <Footer />
</main>

  );
}