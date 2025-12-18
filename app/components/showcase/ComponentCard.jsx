"use client";

import { useState } from "react";
import CodeModal from "./CodeModal";
import { LuGithub } from "react-icons/lu";

export default function ComponentCard({ component }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Component = component.component;

  return (
    <>
      <div className="w-full h-full flex flex-col bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
        <div className="w-full h-full flex flex-col items-center justify-center p-10">
          <Component />
        </div>
        <div className="w-full h-fit p-5 pt-0">
          <div className="w-full h-fit flex flex-col p-5 gap-5 bg-neutral-200/40 dark:bg-neutral-800/50 rounded-xl">
            <div className="w-full h-fit flex flex-col gap-3">
              <h3 className="text-lg font-semibold">{component.name}</h3>
              <p className="text-neutral-500">{component.description}</p>
              <div className="w-full flex flex-wrap gap-2">
                {component.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3.5 py-1 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-500 rounded-lg select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full h-fit flex gap-3 items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full h-12 flex items-center justify-center px-5 bg-neutral-200 dark:bg-neutral-800 rounded-lg cursor-pointer"
              >
                View Code
              </button>
              <a
                href={component.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="h-12 flex items-center justify-center aspect-square bg-neutral-50 dark:bg-neutral-900 rounded-lg cursor-pointer"
              >
                <LuGithub className="text-2xl text-neutral-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <CodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        component={component}
      />
    </>
  );
}
