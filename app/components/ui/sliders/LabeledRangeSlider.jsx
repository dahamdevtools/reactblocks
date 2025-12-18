import { useState } from "react";

export default function LabeledRangeSlider({
  defaultValue = 50,
  minValue = 20,
  maxValue = 80,
}) {
  const [value, setValue] = useState(defaultValue);
  const min = minValue;
  const max = maxValue;

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="relative">
        <div className="w-full h-2 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
          <div
            className="h-full bg-linear-to-r from-indigo-100 dark:from-indigo-900 to-indigo-300 dark:to-indigo-400"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min={min}
          max={max}
          className="absolute top-0 w-full h-2 bg-transparent outline-0 appearance-none
           [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:bg-indigo-400 dark:[&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-200 dark:[&::-webkit-slider-thumb]:border-indigo-300
           [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-indigo-400 dark:[&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-indigo-200 dark:[&::-moz-range-thumb]:border-indigo-300"
        />
      </div>
      <div className="w-full flex items-center justify-between gap-5 font-semibold text-neutral-400">
        <span>{min}</span>
        <span>{value}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
