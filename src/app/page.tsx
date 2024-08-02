import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pb-20 pt-2 bg-zinc-300 min-h-screen">
      <NavBar />

      <div className="mt-16 flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-red-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center">
          <h2 className="text-4xl font-bold lg:text-5xl mb-6">
            <Link href="/">WELCOME TO ARTICLE DASHBOARD</Link>
          </h2>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex space-x-4 mt-8">
        <Link className="inline-block px-8 py-3 text-lg font-medium text-red-600 bg-white rounded-md hover:bg-zinc-400 hover:text-red-700 transition duration-300" href="/login">
          Login
        </Link>
        <Link className="inline-block px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-zinc-400 hover:text-white transition duration-300" href="/signup">
          Sign Up
        </Link>
      </div>

      <Footer />
    </main>
  );
}
