"use client";

import Footer from "@/app/components/main/Footer";
import Navigation from "@/app/components/main/Navigation";
import { useRef } from "react";

export default function Documentation() {
  const scrollContainerRef = useRef(null);

  return (
    <div
      ref={scrollContainerRef}
      className="w-screen h-screen flex flex-col items-center overflow-x-hidden overflow-y-auto"
    >
      <Navigation position={"sticky"} scrollContainerRef={scrollContainerRef} />
      <div className="w-full max-w-[1440px] h-full flex flex-col items-center justify-between">
        <div className="w-full h-full flex flex-col items-center">
          <main className="w-full max-w-3xl h-fit flex flex-col py-20 mb-8">
            <h1 className="text-center font-extrabold text-6xl">
              Documentation
            </h1>
            <h4 className="text-center text-2xl text-neutral-500">
              Everything you need to know to get started with ComponentLib.
            </h4>
          </main>
          <div className="w-full h-fit flex flex-col gap-8 pb-16">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-3xl">Installation</h3>
              <p className="text-xl text-neutral-500">
                ReactBlocks doesn't require any pre installation. There are no
                npm packages to install, no build tools to configure. However,
                some components might require some packages that should be
                installed and all the requirements are given per component if
                any.
              </p>
            </div>
            <div className="w-full h-fit flex flex-col gap-2.5 rounded-3xl p-8 px-9 bg-neutral-200 dark:bg-neutral-900">
              <h4 className="text-xl">Prerequisites</h4>
              <ul>
                <li>A React project (Next.js, Create React App, Vite, etc.)</li>
                <li>Tailwind CSS installed and configured</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-3xl">Basic Usage</h3>
              <p className="text-xl text-neutral-500">
                Using components is simple: browse, copy, paste, and customize.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
