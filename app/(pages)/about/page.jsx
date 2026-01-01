"use client";

import Footer from "@/app/components/main/Footer";
import Navigation from "@/app/components/main/Navigation";
import Link from "next/link";
import { useRef } from "react";

export default function About() {
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
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-2xl sm:text-3xl">
                How It Started
              </h3>
              <p className="text-lg sm:text-xl text-neutral-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, fugit unde suscipit tempora voluptatum nam in eos
                commodi rem nesciunt voluptates animi itaque aliquam fuga
                officiis, amet magni dolor ullam!
              </p>
              <p className="text-lg sm:text-xl text-neutral-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                minus temporibus explicabo minima dicta exercitationem
                distinctio quibusdam cupiditate a praesentium beatae rem
                architecto quod culpa at atque, iure incidunt voluptatem enim,
                assumenda ratione nemo quaerat. Quod ipsa reprehenderit
                excepturi maiores?
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
                Explore 40+ handcrafted React components and ship beautiful
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
