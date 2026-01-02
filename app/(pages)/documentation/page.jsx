"use client";

import Footer from "@/app/components/main/Footer";
import Navigation from "@/app/components/main/Navigation";
import Link from "next/link";
import { useRef } from "react";

export default function Documentation() {
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
              Documentation
            </h1>
            <h4 className="text-center text-lg sm:text-2xl text-neutral-500">
              Learn how to use ReactBlocks effectively in your React or Next.js
              project. Everything you need to get started, customize, and build
              faster.
            </h4>
          </main>
          <div className="w-full max-w-3xl h-fit flex flex-col gap-8 px-8 mb-20">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-2xl sm:text-3xl">
                Installation
              </h3>
              <p className="text-lg sm:text-xl text-neutral-500">
                ReactBlocks doesn't require any pre installation or setup. It's
                a copy-paste component library, so you can use it instantly
                without adding dependencies or running{" "}
                <span className="text-sm text-nowrap px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800">
                  npm install
                </span>
              </p>
              <p className="text-lg sm:text-xl text-neutral-500">
                All you need is a React project with Tailwind CSS configured. If
                a specific component requires a dependency (for example, icons
                or animation libraries), you'll see it clearly mentioned within
                that component's code.
              </p>
            </div>
            <div className="w-full h-fit flex flex-col gap-3.5 rounded-3xl p-8 px-9 bg-neutral-200 dark:bg-neutral-900">
              <h4 className="text-xl">Prerequisites</h4>
              <ul className="w-full h-fit flex flex-col gap-1 text-neutral-500 dark:text-neutral-400">
                <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800">
                  A React project (Next.js is recommended).
                </li>
                <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800">
                  Tailwind CSS properly installed and configured.
                </li>
                <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800">
                  Basic understanding of React components and JSX
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-2xl sm:text-3xl">
                Basic Usage
              </h3>
              <p className="text-lg sm:text-xl text-neutral-500">
                Using ReactBlocks components takes seconds. Simply browse, copy,
                paste, and customize, that's it.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">
                  Step 1 - Browse Components
                </h4>
                <p className="text-neutral-500">
                  Explore the{" "}
                  <Link
                    href={"/components"}
                    className="underline underline-offset-2 text-neutral-900 dark:text-neutral-300"
                  >
                    component library
                  </Link>{" "}
                  and find the component you want to use. Each component
                  includes a live preview and the full source code.
                </p>
              </div>
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">
                  Step 2 - Copy the Code
                </h4>
                <p className="text-neutral-500">
                  Click the "View Code" button to reveal the full
                  implementation, then click "Copy" to copy it to your
                  clipboard.
                </p>
              </div>
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">
                  Step 3 - Paste Into Your Project
                </h4>
                <p className="text-neutral-500">
                  Create a new file in your components folder and paste the
                  code.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-2xl sm:text-3xl">
                Customization
              </h3>
              <p className="text-lg sm:text-xl text-neutral-500">
                Every component in ReactBlocks is built entirely with Tailwind
                CSS utility classes, making customization effortless. You own
                the code so you can modify, refactor, and extend it however you
                need.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">Change Colors</h4>
                <p className="text-neutral-500">
                  Simply replace color classes. For example, change{" "}
                  <span className="text-sm text-nowrap px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800">
                    bg-blue-600
                  </span>{" "}
                  to{" "}
                  <span className="text-sm text-nowrap px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800">
                    bg-purple-600
                  </span>{" "}
                  for a purple variant.
                </p>
              </div>
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">
                  Adjust Sizes and Spacing
                </h4>
                <p className="text-neutral-500">
                  Modify padding{" "}
                  <span className="text-sm text-nowrap px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800">
                    px-6 py-3
                  </span>{" "}
                  , margins{" "}
                  <span className="text-sm text-nowrap px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800">
                    mt-4
                  </span>{" "}
                  , or font sizes{" "}
                  <span className="text-sm text-nowrap px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800">
                    text-lg
                  </span>{" "}
                  to fit your layout.
                </p>
              </div>
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">
                  Add Animations or Logic
                </h4>
                <p className="text-neutral-500">
                  Because you own the source, you can integrate animation
                  libraries like Framer Motion or GSAP, add state management
                  with React hooks, or combine components to create complex
                  layouts.
                </p>
              </div>
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">Dark Mode Support</h4>
                <p className="text-neutral-500">
                  Every component supports Tailwind's dark mode out of the box
                  using{" "}
                  <span className="text-sm text-nowrap px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800">
                    dark:
                  </span>{" "}
                  variants. If your project doesn't use dark mode, you can
                  safely remove those classes.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-2xl sm:text-3xl">
                Troubleshooting
              </h3>
              <p className="text-lg sm:text-xl text-neutral-500">
                If something isn't working as expected, here are some quick
                checks before you panic,
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">Styles not applying?</h4>
                <p className="text-neutral-500">
                  Make sure Tailwind CSS is properly configured in your project.
                </p>
              </div>
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">
                  Component not rendering?
                </h4>
                <ul className="text-neutral-500">
                  <li>
                    Ensure you've added{" "}
                    <span className="text-sm text-nowrap px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800">
                      'use client'
                    </span>{" "}
                    at the top of the file if you're using Next.js App Router.
                  </li>
                  <li>
                    Verify that your import paths are correct and your component
                    file names match.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-1 ps-6 border-s-4 border-neutral-300 dark:border-neutral-800">
                <h4 className="font-semibold text-lg">
                  Dark mode not working?
                </h4>
                <p className="text-neutral-500">
                  Ensure dark mode is enabled in your Tailwind config.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-2xl sm:text-3xl">Next Steps</h3>
              <p className="text-lg sm:text-xl text-neutral-500">
                Once you're comfortable using ReactBlocks components, explore
                the{" "}
                <Link
                  href={"/components"}
                  className="underline underline-offset-2 text-neutral-900 dark:text-neutral-300"
                >
                  full library
                </Link>{" "}
                to build faster. You can also customize existing components, mix
                and match layouts, and even contribute your own.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-2xl sm:text-3xl">
                Support & Contribution
              </h3>
              <p className="text-lg sm:text-xl text-neutral-500">
                ReactBlocks is open source and community-driven. If you find a
                bug or want to request a new component,
              </p>
            </div>
            <ul className="w-full flex flex-col gap-1 text-neutral-500">
              <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800">
                Open an issue on{" "}
                <Link
                  href={"https://github.com/dahamdevtools/reactblocks"}
                  className="underline underline-offset-2 text-neutral-900 dark:text-neutral-300"
                >
                  GitHub
                </Link>{" "}
              </li>
              <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800">
                Share ideas or feedback through our contact page
              </li>
              <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800">
                Star the repository to support ongoing development
              </li>
            </ul>
            <div className="w-full h-fit flex flex-col rounded-3xl p-8 pt-10 gap-4 bg-neutral-200 dark:bg-neutral-900">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-center">
                Need More Help?
              </h3>
              <p className="text-xl text-center text-neutral-500">
                Still can't find what you're looking for? Check our FAQ or reach
                out directly.
              </p>
              <div className="w-full flex flex-wrap items-center justify-center gap-3.5">
                <Link
                  href={"/faq"}
                  className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300 dark:bg-neutral-800"
                >
                  View FAQ
                </Link>
                <Link
                  href={"/contact"}
                  className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300/50 dark:bg-neutral-800/50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
