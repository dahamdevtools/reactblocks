import { useState } from "react";

export default function SteppedDotSlider({
  defaultValue = 50,
  steps = [0, 25, 50, 75, 100],
}) {
  const [value, setValue] = useState(defaultValue);

  const stepSize = steps.length > 1 ? steps[1] - steps[0] : 25;

  return (
    <div className="w-full flex items-center justify-center relative">
      <div className="w-full flex items-center justify-between relative px-1">
        <div className="absolute left-0 w-full px-1">
          <div className="w-full h-0.5 bg-neutral-200 dark:bg-neutral-800"></div>
        </div>
        {steps.map((step) => (
          <div
            key={step}
            className={`w-4 h-4 rounded-full z-10 transition-colors duration-100 ${
              step <= value
                ? "bg-indigo-300 dark:bg-indigo-500"
                : "bg-neutral-200 dark:bg-neutral-800"
            }`}
          ></div>
        ))}
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        step={stepSize}
        min={steps[0]}
        max={steps[steps.length - 1]}
        type="range"
        className="absolute z-20 w-full h-2 rounded-full outline-0 appearance-none bg-transparent
         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:bg-indigo-400 dark:[&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-200 dark:[&::-webkit-slider-thumb]:border-indigo-300
         [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:aspect-square [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-indigo-400 dark:[&::-moz-range-thumb]:bg-indigo-400 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-indigo-200 dark:[&::-moz-range-thumb]:border-indigo-300"
      />
    </div>
  );
}
