"use client";

import { IoCamera } from "react-icons/io5";

export default function ImageContentCard() {
  return (
    <div className="w-full h-fit flex flex-col p-5 gap-5 rounded-3xl bg-neutral-200/50 dark:bg-neutral-800/60">
      <div className="w-full aspect-video rounded-xl flex items-center justify-center bg-neutral-200 dark:bg-neutral-800">
        <IoCamera className="text-5xl text-neutral-300 dark:text-neutral-700" />
      </div>
      <div className="w-full h-fit flex flex-col gap-3.5 px-1.5">
        <h4 className="text-xl font-semibold">Urban Street Photography</h4>
        <p className="text-ellipsis line-clamp-2 text-neutral-500">
          Capturing the energy and motion of everyday city life from fleeting
          expressions to vibrant colors hidden in plain sight.
        </p>
        <div className="w-full flex flex-wrap gap-2">
          <span className="text-sm px-3.5 py-1 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-500 rounded-lg select-none">
            photography
          </span>
          <span className="text-sm px-3.5 py-1 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-500 rounded-lg select-none">
            urban
          </span>
          <span className="text-sm px-3.5 py-1 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-500 rounded-lg select-none">
            portfolio
          </span>
        </div>
      </div>
      <button className="w-full h-fit px-5 py-3 rounded-xl cursor-pointer bg-neutral-200 dark:bg-neutral-800">
        View Gallery
      </button>
    </div>
  );
}
