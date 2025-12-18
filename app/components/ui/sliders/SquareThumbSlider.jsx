import { useState } from "react";

export default function SquareThumbSlider({ defaultValue = 50 }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <input
      type="range"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full h-2 outline-0 appearance-none bg-indigo-500/10 dark:bg-indigo-600/30
         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:cursor-pointer  [&::-webkit-slider-thumb]:bg-indigo-400 dark:[&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-200 dark:[&::-webkit-slider-thumb]:border-indigo-300
         [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:aspect-square [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-indigo-400 dark:[&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-indigo-200 dark:[&::-moz-range-thumb]:border-indigo-300"
    />
  );
}
