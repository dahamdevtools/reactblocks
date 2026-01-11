"use client";

import Link from "next/link";
import { useRef } from "react";
import Navigation from "../components/main/Navigation";
import Footer from "../components/main/Footer";

export default function AboutPageContent() {
  const scrollContainerRef = useRef(null);

  return (
    <div
      ref={scrollContainerRef}
      className="w-screen h-screen flex flex-col items-center overflow-x-hidden overflow-y-auto scrollbar-none"
    >
      <Navigation position={"sticky"} scrollContainerRef={scrollContainerRef} />
      <div className="w-full max-w-[1440px] flex-1 flex flex-col items-center justify-between">
        <div className="w-full flex flex-col items-center">
          <main className="w-full max-w-3xl h-fit flex flex-col gap-2 py-20 mb-8 px-5 sm:px-10">
            <h1 className="text-center font-extrabold text-3xl sm:text-6xl">
              Built by Developers, For Developers
            </h1>
            <h4 className="text-center text-lg sm:text-2xl text-neutral-500">
              ReactBlocks was born out of a simple idea - developers shouldn't
              waste hours rebuilding the same UI patterns every time. We believe
              in reusable, clean, and instantly usable code that helps you move
              faster.
            </h4>
          </main>
          <div className="w-full max-w-3xl h-fit flex flex-col gap-8 px-8 mb-20">
            <div className="flex flex-col gap-8">
              <h3 className="font-semibold text-2xl sm:text-3xl">
                How It Started,
              </h3>
              <p className="text-lg sm:text-xl text-justify text-neutral-500">
                Hi! I'm{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  Daham Senarathne
                </strong>
                , a developer and student from Sri Lanka. I started building
                software in{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  2023
                </strong>
                , and by{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  2025
                </strong>
                , I switched my tech stack to{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  React
                </strong>
                . Since then, I've worked with frameworks like{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  Vite
                </strong>{" "}
                and{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  Next.js
                </strong>{" "}
                and I completely fell in love with{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  Next.js
                </strong>
                .
              </p>
              <p className="text-lg sm:text-xl text-justify text-neutral-500">
                I began building projects just for fun, but over time, I started
                developing SaaS applications, some of which are still in
                progress. Throughout this journey, I've tried countless CSS
                frameworks, component libraries, and animation tools because I
                really enjoy{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  frontend development
                </strong>
                .
              </p>
              <p className="text-lg sm:text-xl text-justify text-neutral-500">
                But there was one thing I kept noticing in my workflow:{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  repetition
                </strong>
                .
              </p>
              <p className="text-lg sm:text-xl text-justify text-neutral-500">
                Every time I started a new project, I'd find myself searching
                for components I had already built before. I'd dig through old
                files, copy snippets, and rewrite code again and again. I used
                libraries like{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  shadcn/ui
                </strong>{" "}
                and{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  Radix UI
                </strong>
                , which were awesome and saved time but I always ended up
                tweaking them to fit my own minimal style.
              </p>
              <p className="text-lg sm:text-xl text-justify text-neutral-500">
                So, I decided to collect the components I found myself reusing
                and built a small app where I could search and copy them
                instantly. That little project saved me a lot of time and I'm so
                glad I built it. Eventually, I thought,{" "}
                <strong className="italic text-neutral-800 dark:text-neutral-300">
                  "why not share this with others too?"
                </strong>
              </p>
              <p className="text-lg sm:text-xl text-justify text-neutral-500">
                That's how{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  ReactBlocks
                </strong>{" "}
                was born. These are the components{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  I've built, still use, and will continue to use
                </strong>{" "}
                in my projects. They reflect my own design style,{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  clean
                </strong>
                ,{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  simple
                </strong>
                , and{" "}
                <strong className="text-neutral-800 dark:text-neutral-300">
                  minimal
                </strong>{" "}
                but feel free to tweak them however you like.
              </p>
              <p className="text-lg sm:text-xl text-justify text-neutral-500">
                Thanks a lot for checking out ReactBlocks. If you find it
                helpful, have suggestions, or just want to say hi,{" "}
                <Link href={"/contact"}>
                  <strong className="underline underline-offset-2 text-neutral-800 dark:text-neutral-300">
                    I'd love to hear from you!
                  </strong>
                </Link>
              </p>
            </div>
            <h3 className="font-semibold text-2xl sm:text-3xl">Our Mission</h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">
                  Make UI Development Effortless
                </h4>
                <p className="text-neutral-500">
                  We believe developers should spend time building ideas, not
                  boilerplate. ReactBlocks gives you production-ready building
                  blocks so you can design, iterate, and ship faster.
                </p>
              </div>
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">Keep It Simple</h4>
                <p className="text-neutral-500">
                  No dependencies, no setup, no complexity. Just clean React
                  code and Tailwind classes you can fully control and
                  understand.
                </p>
              </div>
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">Stay Open & Free</h4>
                <p className="text-neutral-500">
                  ReactBlocks is and always will be 100% free and open source.
                  You're free to use, customize, and contribute, no licenses, no
                  restrictions, no paywalls.
                </p>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col items-center rounded-3xl p-8 pt-10 gap-4 bg-neutral-200 dark:bg-neutral-900">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-center">
                Ready to Build Faster?
              </h3>
              <p className="text-xl text-center text-neutral-500">
                Explore 50+ handcrafted React components and ship beautiful
                interfaces in minutes.
              </p>
              <Link
                href={"/components"}
                className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300 dark:bg-neutral-800"
              >
                Browse Components
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
