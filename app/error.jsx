"use client";

import { useEffect, useRef } from "react";
import Navigation from "./components/main/Navigation";
import Footer from "./components/main/Footer";

export default function Error({ error, reset }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      ref={scrollContainerRef}
      className="w-screen h-screen flex flex-col items-center justify-between overflow-x-hidden overflow-y-auto scrollbar-none"
    >
      <Navigation position={"sticky"} scrollContainerRef={scrollContainerRef} />
      <main className="w-full max-w-2xl h-full p-10 py-32 mb-8 flex flex-col items-center justify-center">
        <div className="w-fit h-fit flex flex-col items-center gap-5">
          <p className="text-xl sm:text-2xl text-center text-neutral-500">
            Something went wrong
          </p>
          <h1 className="text-xl sm:text-3xl font-extrabold text-center">
            {String(error?.message || error)}
          </h1>
          <button
            onClick={() => reset()}
            className="w-fit h-fit px-6 py-3 rounded-full cursor-pointer bg-neutral-200 dark:bg-neutral-800"
          >
            Try again
          </button>
        </div>
      </main>
      <div className="w-full max-w-[1440px] h-fit">
        <Footer />
      </div>
    </div>
  );
}
