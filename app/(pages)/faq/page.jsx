"use client";

import Footer from "@/app/components/main/Footer";
import Navigation from "@/app/components/main/Navigation";
import Link from "next/link";
import { useRef, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";

export default function FAQ() {
  const scrollContainerRef = useRef(null);

  const [openItem, setOpenItem] = useState("item-1");

  const accordionData = [
    {
      id: "item-1",
      trigger: "What is ReactBlocks?",
      content:
        "A curated collection of beautiful, copy-paste React components built with Tailwind CSS. No dependencies, just clean, production-ready code you can use instantly.",
    },
    {
      id: "item-2",
      trigger: "Is ReactBlocks really free?",
      content:
        "Yes ReactBlocks is completely free and open source. No subscriptions, no paywalls, and no hidden tiers. Every component is available for everyone, forever.",
    },
    {
      id: "item-3",
      trigger: "Do I need to install anything?",
      content:
        "No setup required. ReactBlocks is a copy-paste library. Just make sure your project uses React and Tailwind CSS, then paste the code directly into your files. However, some components require packages that should be installed which are given with the code.",
    },
    {
      id: "item-4",
      trigger: "Can I use these components in commercial projects?",
      content:
        "Absolutely. You can use ReactBlocks components in personal, client, or commercial projects. Once you copy the code, it's yours to use however you like.",
    },
    {
      id: "item-5",
      trigger: "Do the components work with Next.js?",
      content:
        "Yes! ReactBlocks works seamlessly with Next.js (App Router and Pages Router), Vite, CRA, Remix, and any other React framework.",
    },
    {
      id: "item-6",
      trigger: "Are the components accessible?",
      content:
        "All components are built with accessibility best practices in mind. Since you own the code after copying, you can further adjust ARIA attributes and keyboard support to meet your specific needs.",
    },
    {
      id: "item-7",
      trigger: "Can I customize the components?",
      content:
        "Of course that's the whole point. Once you copy a component, you own the code. Modify colors, sizes, layouts, or add your own logic as needed.",
    },
    {
      id: "item-8",
      trigger: "Do the components support TypeScript?",
      content:
        "All examples are written in JavaScript, but they're fully TypeScript-friendly. Just add type annotations for props, and you're good to go.",
    },
    {
      id: "item-9",
      trigger: "How often are new components added?",
      content:
        "New components and updates are added regularly. Follow ReactBlocks on GitHub or X to stay updated with the latest releases.",
    },
    {
      id: "item-10",
      trigger: "What if I find a bug?",
      content:
        "Since you own the copied code, you can fix it immediately in your project. If it's an issue with the original component, please open a GitHub issue so we can patch it for everyone.",
    },
    {
      id: "item-11",
      trigger: "Can I request a new component?",
      content:
        "Yes! We welcome community suggestions. Submit your ideas through GitHub or our contact page, we can't promise everything, but we always listen.",
    },
    {
      id: "item-12",
      trigger: "Do the components include dark mode?",
      content:
        "Yes all components include built-in dark mode support using Tailwind's dark: classes. If your project doesn't use dark mode, you can remove those classes easily.",
    },
    {
      id: "item-13",
      trigger: "How do I get support?",
      content:
        "Start with the documentation for quick answers. If you still need help, reach out through GitHub or our contact form. While we can't debug customized code, we're happy to help with issues in the original components.",
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
              Frequently Asked Questions
            </h1>
            <h4 className="text-center text-lg sm:text-2xl text-neutral-500">
              Answers to the most common questions about ReactBlocks. Still
              looking for something specific?{" "}
              <Link
                href={"/contact"}
                className="underline underline-offset-2 text-neutral-900 dark:text-neutral-300"
              >
                Contact us
              </Link>{" "}
              we'd love to help.
            </h4>
          </main>
          <div className="w-full max-w-3xl h-fit flex flex-col gap-8 px-10 mb-20">
            <style>{`                @keyframes accordion-down {
                  from {
                    height: 0;
                    opacity: 0;
                  }
                  to {
                    height: var(--radix-accordion-content-height);
                    opacity: 1;
                  }
                }
 
                @keyframes accordion-up {
                  from {
                    height: var(--radix-accordion-content-height);
                    opacity: 1;
                  }
                  to {
                    height: 0;
                    opacity: 0;
                  }
                }
 
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
 
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
 
                .accordion-item {
                  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
                }
 
                .accordion-content[data-state="open"] {
                  animation: accordion-down 400ms cubic-bezier(0.87, 0, 0.13, 1);
                }
 
                .accordion-content[data-state="closed"] {
                  animation: accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1);
                }
 
                .accordion-content[data-state="open"] .accordion-content-inner {
                  animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards;
                }
              `}</style>

            <Accordion.Root
              className="w-full"
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
            >
              {accordionData.map((item, index) => (
                <Accordion.Item
                  key={item.id}
                  className="accordion-item transition-all duration-400ms ease-cubic-bezier(0.4,0,0.2,1) border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
                  value={item.id}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="flex flex-1 gap-3 items-center justify-between py-6 text-left group transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) cursor-pointer">
                      <span className="group-hover:text-indigo-400 dark:group-hover:text-indigo-300 font-semibold text-md sm:text-xl transition-colors duration-300 ease-cubic-bezier(0.4,0,0.2,1)">
                        {item.trigger}
                      </span>
                      <div className="bg-neutral-200/70 dark:bg-neutral-800/50 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-800/30 flex items-center justify-center shrink-0 w-10 h-10 rounded-xl transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1)">
                        <div className="relative w-4 h-4">
                          <span className="bg-neutral-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300 absolute top-1/2 left-1/2 w-full h-0.5 rounded-full -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) group-data-[state=open]:w-0" />
                          <span className="bg-neutral-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300 absolute left-1/2 top-1/2 w-0.5 h-full rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) group-data-[state=open]:rotate-90" />
                        </div>
                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content className="accordion-content overflow-hidden">
                    <div className="text-neutral-400 accordion-content-inner pb-6 leading-relaxed transition-all duration-200 ease-in-out">
                      {item.content}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
            <div className="w-full h-fit flex flex-col items-center rounded-3xl p-8 pt-10 gap-4 bg-neutral-200 dark:bg-neutral-900">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-center">
                Still have questions?
              </h3>
              <p className="text-xl text-center text-neutral-500">
                Couldn't find what you're looking for? We're happy to help you
                out.
              </p>
              <Link
                href={"/contact"}
                className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300/50 dark:bg-neutral-800/50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
