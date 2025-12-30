"use client";

import ThemeSwitcher from "@/lib/utils/ThemeSwitcher";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export default function Navigation({ position, scrollContainerRef }) {
  const [openSlider, setOpenSlider] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef?.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (scrollContainer.scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef]);

  return (
    <>
      <header
        className={`w-full h-fit flex flex-col items-center justify-center ${position} transition-all duration-300 ease-out top-0 left-0 z-40 ${
          isScrolled ? "p-3.5" : "p-0"
        }`}
      >
        <nav
          className={`w-full max-w-[1440px] h-fit flex items-center justify-between rounded-full transition-all duration-300 ease-out ${
            isScrolled
              ? "backdrop-blur-lg p-4 ps-8 pe-6 sm:pe-5"
              : "backdrop-blur-none py-5 px-5"
          }`}
        >
          <Link
            href={"/"}
            className="w-fit h-fit flex items-center gap-2 cursor-pointer"
          >
            <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
              React
            </h1>
            <span className="text-lg font-semibold px-3 py-1 flex bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-xl">
              blocks
            </span>
          </Link>
          <div className="w-fit h-fit hidden lg:flex items-center gap-6">
            <Link href={"/"}>Home</Link>
            <Link href={"/components"}>Components</Link>
            <Link href={"/documentation"}>Docs</Link>
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <button className="w-fit h-fit hidden lg:block px-6 py-3 rounded-full bg-neutral-200 dark:bg-neutral-800">
            Star on Github
          </button>
          <button
            onClick={() => setOpenSlider(true)}
            className="block lg:hidden text-neutral-500 pe-2"
          >
            <LuMenu />
          </button>
        </nav>
      </header>
      <div
        className={`w-full h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-900 fixed top-0 left-0 p-10 gap-10 ${
          openSlider ? "translate-x-0" : "translate-x-full"
        } z-50 flex flex-col duration-300 ease-in-out`}
      >
        <div className="w-full h-fit flex items-center justify-start">
          <button
            onClick={() => setOpenSlider(false)}
            className="w-8 h-8 flex items-center justify-center aspect-square rounded-full border-4 border-rose-200 dark:border-rose-800 bg-rose-400 dark:bg-rose-500 text-neutral-50 cursor-pointer"
          >
            <LuX className="text-lg" />
          </button>
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          <div className="w-full h-fit flex flex-col gap-5">
            <Link href={"/"} className="text-xl">
              Home
            </Link>
            <Link href={"/components"} className="text-xl">
              Components
            </Link>
            <Link href={"/documentation"} className="text-xl">
              Docs
            </Link>
            <Link href={"/faq"} className="text-xl">
              FAQ
            </Link>
            <Link href={"/about"} className="text-xl">
              About
            </Link>
            <Link href={"/contact"} className="text-xl">
              Contact
            </Link>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
