"use client";

import { IoFlash } from "react-icons/io5";

export default function IconFeatureCard() {
  return (
    <div className="w-full h-fit flex flex-col p-7 gap-7 rounded-4xl bg-neutral-200/50 dark:bg-neutral-800/60">
      <div className="w-18 aspect-square rounded-xl flex items-center justify-center bg-neutral-200 dark:bg-neutral-800">
        <IoFlash className="text-3xl text-neutral-400 dark:text-neutral-600" />
      </div>
      <div className="w-full h-fit flex flex-col gap-2 px-1.5">
        <h4 className="text-xl font-semibold">Fast Integration</h4>
        <p className="text-ellipsis line-clamp-2 text-neutral-500">
          Copy, paste, and start building immediately. No setup or configuration
          required.
        </p>
      </div>
    </div>
  );
}
