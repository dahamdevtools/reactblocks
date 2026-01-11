"use client";

import Navigation from "../components/main/Navigation";
import Footer from "../components/main/Footer";
import Link from "next/link";
import { useRef } from "react";

export default function ChangeLogPageContent() {
  const scrollContainerRef = useRef(null);

  const updates = [
    {
      version: "1.0.0",
      date: "December 2025",
      type: "launch",
      items: [
        "Initial release of ReactBlocks",
        "Introduced 50+ production-ready components built with React and Tailwind CSS",
        "Organized into 8 categories: Buttons, Forms, Navigation, Layouts, Modals, Cards, Lists, and Utilities",
        "Full dark mode support out of the box using Tailwind's dark: variant",
        "All components designed to be fully responsive across breakpoints",
        "Complete developer documentation with usage and customization guides",
        "Built-in component search and category filtering",
        "One-click code copy functionality for instant integration",
        "Consistent, accessible, and customizable component architecture",
      ],
    },
  ];

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
              Changelog
            </h1>
            <h4 className="text-center text-lg sm:text-2xl text-neutral-500">
              A transparent record of every release, improvement, and new
              component added to ReactBlocks. Stay up to date with the latest
              changes and what's coming next.
            </h4>
          </main>
          <div className="w-full max-w-3xl h-fit flex flex-col gap-8 px-8 mb-20">
            {updates.map((update, index) => (
              <div key={index} className="w-full h-fit flex flex-col gap-3.5">
                <div className="w-full h-fit flex items-center gap-5">
                  <h3 className="font-extrabold text-nowrap text-2xl sm:text-3xl">
                    Version {update.version}
                  </h3>
                  <div className="w-fit h-fit px-4 py-1.5 rounded-full text-nowrap text-ellipsis line-clamp-1 bg-neutral-200 dark:bg-neutral-800">
                    {update.date}
                  </div>
                </div>
                <ul className="w-full flex flex-col gap-1.5">
                  {update.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-lg ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="w-full h-fit flex flex-col rounded-3xl p-10 pb-9 gap-4 bg-neutral-200/50 dark:bg-neutral-800/30">
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                What's Coming Next
              </h3>
              <p className="text-lg sm:text-xl text-neutral-500">
                We're continuously improving ReactBlocks with new components,
                design refinements, and developer experience enhancements.
                Here's what's currently on our roadmap:
              </p>
              <ul className="w-full flex flex-col gap-1">
                <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                  Expanded form components - checkboxes, radios, selects, and
                  date pickers
                </li>
                <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                  Navigation patterns - navbars, sidebars, breadcrumbs, and tab
                  menus
                </li>
                <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                  Advanced UI blocks - data tables, charts, timelines, and
                  calendars
                </li>
                <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                  Layout templates - hero sections, feature grids, pricing
                  sections, and dashboards
                </li>
                <li className="ps-3.5 border-s-4 border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                  Improved accessibility coverage and TypeScript type support
                </li>
              </ul>
            </div>
            <div className="w-full h-fit flex flex-col rounded-3xl p-8 pt-10 gap-4 bg-neutral-200 dark:bg-neutral-900">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-center">
                Stay in the Loop
              </h3>
              <p className="text-xl text-center text-neutral-500">
                ReactBlocks is growing fast. Follow us on GitHub or X to stay
                updated on new releases, components, and upcoming features.
              </p>
              <div className="w-full flex flex-wrap items-center justify-center gap-3.5">
                <Link
                  href={"https://github.com/dahamdevtools/reactblocks"}
                  className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300 dark:bg-neutral-800"
                >
                  Follow on GitHub
                </Link>
                <Link
                  href={"https://x.com/daahaamm"}
                  className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300/50 dark:bg-neutral-800/50"
                >
                  Follow on X
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
