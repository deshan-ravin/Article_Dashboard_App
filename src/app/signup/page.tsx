import Link from "next/link";
import ThemeChanger from "../../components/darkswitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { SignUpForm } from "../../components/signupform";
import { Footer } from "../../components/footer";
export default function Pages() {
  return (
    <>
     <main className="flex min-h-screen flex-col items-center justify-center pt-25 pb-24 pl-24 pr-24 bg-zinc-300">
     <h1 className="text-4xl font-bold mt-12 mb-6 text-red-500"> 
        <Link href="/">Article Dashboard</Link>
     </h1>
    <div> 
        <SignUpForm/>
    </div>
    <Footer/>
</main>

    </>
  );
}
