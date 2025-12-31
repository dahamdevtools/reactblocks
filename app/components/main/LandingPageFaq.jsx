"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";

export default function LandingPageFaq() {
  const [openItem, setOpenItem] = useState("item-1");

  const accordionData = [
    {
      id: "item-1",
      trigger: "What is ReactBlocks?",
      content:
        "A curated collection of beautiful, copy-paste React components built with Tailwind CSS. No dependencies, just clean code ready to use.",
    },
    {
      id: "item-2",
      trigger: "How do I use these components?",
      content:
        "Simply browse the library, find a component you like, click the view code button to view the implementation, and copy-paste it into your project.",
    },
    {
      id: "item-3",
      trigger: "Do I need to install anything?",
      content:
        "It depends on the component. Just make sure you have Tailwind CSS in your project, then copy and paste the component code directly. If there are any mentioned packages, those packages should be installed.",
    },
    {
      id: "item-4",
      trigger: "Are these components responsive?",
      content:
        "Yes! All components are built mobile-first and fully responsive. They work beautifully across all screen sizes from phones to large displays.",
    },
    {
      id: "item-5",
      trigger: "Can I customize the components?",
      content:
        "Absolutely! All components use Tailwind classes, making them easy to customize. Simply modify the classes or add your own styling.",
    },
    {
      id: "item-6",
      trigger: "Can I use these components in commercial projects?",
      content:
        "Absolutely. You can use them in personal, client, or commercial projects, once you copy the code, it's yours to use however you like.",
    },
  ];

  return (
    <div className="w-full">
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
    </div>
  );
}
