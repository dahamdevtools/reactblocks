"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  IoColorFill,
  IoFlash,
  IoGrid,
  IoMoon,
  IoRocket,
  IoSettings,
} from "react-icons/io5";
import { useRef } from "react";
import Link from "next/link";
import StructuredData from "@/lib/utils/StructuredData";
import Navigation from "../components/main/Navigation";
import Ticker from "../components/main/Ticker";
import LandingPageFaq from "../components/main/LandingPageFaq";
import Footer from "../components/main/Footer";

export default function HomePageContent() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ReactBlocks",
    description:
      "Accelerate your development with fully responsive, production-ready React components. Built with Tailwind CSS. Free and open source.",
    url: "https://react-blocks.dev",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://react-blocks.dev/components?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ReactBlocks",
    url: "https://react-blocks.dev",
    logo: "https://react-blocks.dev/icon.svg",
    description: "Free and open-source React component library",
    sameAs: [
      "https://x.com/daahaamm",
      "https://github.com/dahamdevtools/reactblocks",
    ],
  };

  const { ref, inView } = useInView({ triggerOnce: true });
  const scrollContainerRef = useRef(null);

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={organizationSchema} />
      <div
        ref={scrollContainerRef}
        className="w-screen h-screen flex flex-col items-center overflow-x-hidden overflow-y-auto scrollbar-none"
      >
        <Navigation
          position={"fixed"}
          scrollContainerRef={scrollContainerRef}
        />
        <div className="w-full max-w-[1440px] h-fit flex flex-col items-center gap-20 px-3.5">
          <main className="w-full h-full min-h-screen flex flex-col items-center justify-between gap-16">
            <div className="w-full py-12"></div>
            <div className="w-full max-w-4xl h-fit flex flex-col items-center gap-6 px-10">
              <div className="w-fit h-fit flex items-center gap-2 p-2 pe-4 rounded-full bg-neutral-200 dark:bg-neutral-800">
                <span className="h-full aspect-square flex items-center justify-center rounded-full overflow-visible relative">
                  <span className="w-3 absolute aspect-square rounded-full animate-ping bg-emerald-300 dark:bg-emerald-500"></span>
                  <span className="w-3 aspect-square rounded-full bg-emerald-300 dark:bg-emerald-500"></span>
                </span>
                <p className="text-sm sm:text-base">
                  40+ Components and Growing
                </p>
              </div>
              <h1 className="text-5xl sm:text-7xl font-extrabold text-center">
                Ready-Made React Components for Modern Applications
              </h1>
              <h3 className="text-lg sm:text-2xl text-center text-neutral-500">
                Accelerate your development with 40+ fully responsive,
                production-ready React components. Built with Tailwind CSS. No
                setup, no dependencies.
              </h3>
              <div className="w-fit h-fit flex flex-wrap items-center justify-center gap-6">
                <Link
                  href={"/components"}
                  className="w-fit h-fit px-6 py-3 rounded-2xl bg-neutral-200 dark:bg-neutral-800"
                >
                  Browse Components
                </Link>
                <Link href={"/documentation"}>View Documentation</Link>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col items-center">
              <p className="text-xl text-center text-neutral-500">
                Trusted by developers building modern web applications with
              </p>
              <div className="w-full h-fit flex mask-l-from-70% mask-r-from-70%">
                <Ticker
                  text={
                    <div className="w-fit h-fit flex items-center gap-16 py-8">
                      <p className="text-3xl font-extrabold">Next.js</p>
                      <p className="text-3xl font-extrabold">React</p>
                      <p className="text-3xl font-extrabold">Tailwind CSS</p>
                      <p className="text-3xl font-extrabold pe-16">
                        JavaScript
                      </p>
                    </div>
                  }
                  direction={1}
                  speed={40}
                />
              </div>
            </div>
          </main>
          <section
            ref={ref}
            className="w-full h-fit flex flex-col sm:flex-row gap-16 sm:gap-8 pb-8 px-8"
          >
            <div className="w-full flex flex-col items-center">
              <p className="text-7xl font-extrabold">
                {inView && <CountUp start={0} end={40} duration={3} />}+
              </p>
              <p className="text-base sm:text-lg font-extrabold">Components</p>
            </div>
            <div className="w-full flex flex-col items-center">
              <p className="text-7xl font-extrabold">
                {inView && <CountUp start={0} end={100} duration={3} />}%
              </p>
              <p className="text-base sm:text-lg font-extrabold">
                Free & Open Source
              </p>
            </div>
            <div className="w-full flex flex-col items-center">
              <p className="text-7xl font-extrabold">
                {inView && <CountUp start={0} end={8} duration={3} />}
              </p>
              <p className="text-base sm:text-lg font-extrabold">Categories</p>
            </div>
          </section>
          <section className="w-full h-fit flex flex-col items-center gap-8">
            <div className="w-full h-fit flex flex-col gap-2 px-8">
              <h3 className="text-3xl sm:text-5xl font-bold text-center">
                Everything Developers Need at a Glance
              </h3>
              <p className="text-lg sm:text-2xl text-center text-neutral-500">
                Built for developers who value simplicity, speed, and clean
                code.
              </p>
            </div>
            <div className="w-full h-fit grid grid-cols-3 gap-3.5">
              <div className="w-full col-span-3 md:col-span-1 flex flex-col rounded-3xl p-8 gap-4 bg-neutral-200 dark:bg-neutral-900">
                <div className="w-20 aspect-square rounded-2xl flex items-center justify-center text-3xl bg-neutral-300 dark:bg-neutral-800">
                  <IoFlash className="text-neutral-500 dark:text-neutral-300" />
                </div>
                <h4 className="text-2xl font-semibold">Fast Integration</h4>
                <p className="text-neutral-500">
                  Copy, paste, and start building immediately. No setup or
                  configuration required.
                </p>
              </div>
              <div className="w-full col-span-3 md:col-span-1 flex flex-col rounded-3xl p-8 gap-4 bg-neutral-200 dark:bg-neutral-900">
                <div className="w-20 aspect-square rounded-2xl flex items-center justify-center text-3xl bg-neutral-300 dark:bg-neutral-800">
                  <IoColorFill className="text-neutral-500 dark:text-neutral-300" />
                </div>
                <h4 className="text-2xl font-semibold">Tailwind CSS Powered</h4>
                <p className="text-neutral-500">
                  Fully styled with Tailwind CSS utility classes. Easy to
                  customize to match your design system.
                </p>
              </div>
              <div className="w-full col-span-3 md:col-span-1 flex flex-col rounded-3xl p-8 gap-4 bg-neutral-200 dark:bg-neutral-900">
                <div className="w-20 aspect-square rounded-2xl flex items-center justify-center text-3xl bg-neutral-300 dark:bg-neutral-800">
                  <IoMoon className="text-neutral-500 dark:text-neutral-300" />
                </div>
                <h4 className="text-2xl font-semibold">Dark Mode Support</h4>
                <p className="text-neutral-500">
                  Every component supports dark mode out of the box. Switch
                  themes effortlessly with Tailwind's dark variant.
                </p>
              </div>
              <div className="w-full col-span-3 md:col-span-1 flex flex-col rounded-3xl p-8 gap-4 bg-neutral-200 dark:bg-neutral-900">
                <div className="w-20 aspect-square rounded-2xl flex items-center justify-center text-3xl bg-neutral-300 dark:bg-neutral-800">
                  <IoGrid className="text-neutral-500 dark:text-neutral-300" />
                </div>
                <h4 className="text-2xl font-semibold">Responsive Design</h4>
                <p className="text-neutral-500">
                  Mobile-first design ensures your UI looks perfect on all
                  screen sizes.
                </p>
              </div>
              <div className="w-full col-span-3 md:col-span-1 flex flex-col rounded-3xl p-8 gap-4 bg-neutral-200 dark:bg-neutral-900">
                <div className="w-20 aspect-square rounded-2xl flex items-center justify-center text-3xl bg-neutral-300 dark:bg-neutral-800">
                  <IoRocket className="text-neutral-500 dark:text-neutral-300" />
                </div>
                <h4 className="text-2xl font-semibold">
                  Production Ready Code
                </h4>
                <p className="text-neutral-500">
                  Clean, well-structured code following React best practices.
                  Ready to ship to production immediately.
                </p>
              </div>
              <div className="w-full col-span-3 md:col-span-1 flex flex-col rounded-3xl p-8 gap-4 bg-neutral-200 dark:bg-neutral-900">
                <div className="w-20 aspect-square rounded-2xl flex items-center justify-center text-3xl bg-neutral-300 dark:bg-neutral-800">
                  <IoSettings className="text-neutral-500 dark:text-neutral-300" />
                </div>
                <h4 className="text-2xl font-semibold">Actively Maintained</h4>
                <p className="text-neutral-500">
                  New components added regularly. Join our community and get
                  notified when new components are released.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full h-fit flex flex-col items-center gap-8">
            <div className="w-full h-fit flex flex-col gap-2 px-8">
              <h3 className="text-3xl sm:text-5xl font-bold text-center">
                Start Building in 3 Simple Steps
              </h3>
              <p className="text-lg sm:text-2xl text-center text-neutral-500">
                No complex setup. No configuration files. Just copy and code.
              </p>
            </div>
            <div className="w-full h-fit flex flex-col">
              <div className="w-full flex items-center gap-8">
                <div className="w-full flex flex-1 flex-col pt-6">
                  <h4 className="text-lg sm:text-2xl font-bold text-end">
                    Browse Components
                  </h4>
                  <p className="text-base sm:text-lg text-end text-neutral-500">
                    Explore our library and find the perfect component for your
                    needs.
                  </p>
                </div>
                <div className="w-0.5 h-full bg-neutral-300 dark:bg-neutral-800"></div>
                <div className="w-full h-fit flex flex-1 pt-6">
                  <div className="h-24 aspect-square rounded-2xl flex items-center justify-center bg-neutral-200 dark:bg-neutral-900">
                    <p className="text-4xl font-extrabold text-neutral-500">
                      01
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center gap-8">
                <div className="w-full h-fit flex flex-1 py-6 justify-end">
                  <div className="h-24 aspect-square rounded-2xl flex items-center justify-center bg-neutral-200 dark:bg-neutral-900">
                    <p className="text-4xl font-extrabold text-neutral-500">
                      02
                    </p>
                  </div>
                </div>
                <div className="w-0.5 h-full bg-neutral-300 dark:bg-neutral-800"></div>
                <div className="w-full flex flex-1 flex-col py-6">
                  <h4 className="text-lg sm:text-2xl font-bold">
                    Copy the Code
                  </h4>
                  <p className="text-base sm:text-lg text-neutral-500">
                    Click the view code button and copy the component with one
                    click.
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center gap-8">
                <div className="w-full flex flex-1 flex-col pb-6">
                  <h4 className="text-lg sm:text-2xl font-bold text-end">
                    Paste & Customize
                  </h4>
                  <p className="text-base sm:text-lg text-end text-neutral-500">
                    Integrate seamlessly into your project and tailor to your
                    design.
                  </p>
                </div>
                <div className="w-0.5 h-full bg-neutral-300 dark:bg-neutral-800"></div>
                <div className="w-full h-fit flex flex-1 pb-6">
                  <div className="h-24 aspect-square rounded-2xl flex items-center justify-center bg-neutral-200 dark:bg-neutral-900">
                    <p className="text-4xl font-extrabold text-neutral-500">
                      03
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full h-fit flex flex-col items-center gap-8">
            <div className="w-full max-w-2xl h-fit flex flex-col gap-2 px-8">
              <h3 className="text-3xl sm:text-5xl font-bold text-center">
                Frequently Asked Questions
              </h3>
              <p className="text-lg sm:text-2xl text-center text-neutral-500">
                A few quick answers before you start building. For more details,
                check out the{" "}
                <Link
                  href={"/faq"}
                  className="underline underline-offset-2 text-neutral-900 dark:text-neutral-300"
                >
                  full FAQ page.
                </Link>
              </p>
            </div>
            <div className="w-full max-w-2xl h-fit px-5">
              <LandingPageFaq />
            </div>
          </section>
          <section className="w-full h-fit flex flex-col items-center gap-5 px-8 pt-10 sm:pt-13 pb-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900">
            <h3 className="text-3xl sm:text-5xl font-bold text-center">
              Ready to Build Faster?
            </h3>
            <p className="w-full max-w-3xl text-lg sm:text-2xl text-center text-neutral-500">
              Join developers who are shipping products faster with our
              component library. Start building today — it's completely free.
            </p>
            <Link
              href={"/components"}
              className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-200 dark:bg-neutral-800"
            >
              Browse All Components
            </Link>
            <div className="w-full h-fit flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-5">
              <p className="sm:flex-1 text-center sm:text-right text-neutral-500">
                100% Free & Open Source
              </p>
              <div className="w-1/2 sm:w-0.5 h-0.5 sm:h-10 shrink-0 bg-neutral-200 dark:bg-neutral-800"></div>
              <p className="sm:flex-1 text-center sm:text-left text-neutral-500">
                Just copy and paste
              </p>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
