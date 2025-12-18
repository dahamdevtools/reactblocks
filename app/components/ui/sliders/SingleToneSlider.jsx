import { useState } from "react";

export default function SingleToneSlider({ defaultValue = 50 }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <input
      type="range"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full h-2 rounded-full outline-0 appearance-none bg-indigo-500/10 dark:bg-indigo-600/30
         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:bg-indigo-400 dark:[&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-200 dark:[&::-webkit-slider-thumb]:border-indigo-300
         [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:aspect-square [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-indigo-400 dark:[&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-indigo-200 dark:[&::-moz-range-thumb]:border-indigo-300"
    />
  );
}
