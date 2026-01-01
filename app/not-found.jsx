"use client";

import { useRef } from "react";
import Navigation from "./components/main/Navigation";
import Footer from "./components/main/Footer";
import Link from "next/link";

export default function NotFoundPage() {
  const scrollContainerRef = useRef(null);

  return (
    <div
      ref={scrollContainerRef}
      className="w-screen h-screen flex flex-col items-center justify-between overflow-x-hidden overflow-y-auto scrollbar-none"
    >
      <Navigation position={"sticky"} scrollContainerRef={scrollContainerRef} />
      <main className="w-full h-full p-10 py-32 mb-8 flex flex-col items-center justify-center">
        <div className="w-fit h-fit flex flex-col items-center gap-5">
          <p className="text-xl sm:text-2xl text-center text-neutral-500">
            Oops..! there's nothing here...
          </p>
          <h1 className="text-6xl sm:text-8xl font-extrabold text-center">
            404
          </h1>
          <Link
            href={"/"}
            className="w-fit h-fit px-6 py-3 rounded-full bg-neutral-200 dark:bg-neutral-800"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <div className="w-full max-w-[1440px] h-fit">
        <Footer />
      </div>
    </div>
  );
}
