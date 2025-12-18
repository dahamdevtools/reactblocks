import { useEffect, useRef, useState } from "react";

export default function DualHandleTooltipSlider({
  min = 0,
  max = 100,
  gap = 5,
  defaultMin = 20,
  defaultMax = 80,
}) {
  const [minValue, setMinValue] = useState(defaultMin);
  const [maxValue, setMaxValue] = useState(defaultMax);
  const [isDraggingMin, setIsDraggingMin] = useState(false);
  const [isDraggingMax, setIsDraggingMax] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseDown = (handle) => {
    if (handle === "min") {
      setIsDraggingMin(true);
    } else {
      setIsDraggingMax(true);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDraggingMin && !isDraggingMax) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const percentage = ((e.clientX - rect.left) / rect.width) * 100;
    const value = Math.round((percentage / 100) * (max - min) + min);

    if (isDraggingMin) {
      const newMin = Math.max(min, Math.min(value, maxValue - gap));
      setMinValue(newMin);
    } else if (isDraggingMax) {
      const newMax = Math.min(max, Math.max(value, minValue + gap));
      setMaxValue(newMax);
    }
  };

  const handleMouseUp = () => {
    setIsDraggingMin(false);
    setIsDraggingMax(false);
  };

  useEffect(() => {
    const handleMove = (e) => handleMouseMove(e);
    const handleUp = () => handleMouseUp();

    if (isDraggingMin || isDraggingMax) {
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleUp);
      document.body.style.userSelect = "none";
      document.body.style.cursor = "pointer";

      return () => {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleUp);
        document.body.style.userSelect = "";
        document.body.style.cursor = "";
      };
    }
  }, [isDraggingMin, isDraggingMax, minValue, maxValue]);

  const minPercent = ((minValue - min) / (max - min)) * 100;
  const maxPercent = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="relative w-full py-4">
      <div className="relative h-2" ref={sliderRef}>
        {/* Track background */}
        <div className="absolute w-full h-2 rounded-full bg-indigo-500/10 dark:bg-indigo-600/30"></div>

        {/* Active range */}
        <div
          className="absolute h-2 rounded-full bg-indigo-300 dark:bg-indigo-400"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        ></div>

        {/* Min handle */}
        <div
          className="absolute w-6 h-6 flex items-center justify-center bg-indigo-400 dark:bg-indigo-500 border-4 border-indigo-200 dark:border-indigo-300 rounded-full cursor-pointer active:cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2"
          style={{ left: `${minPercent}%` }}
          onMouseDown={() => handleMouseDown("min")}
        >
          <span className="transform -translate-y-9 flex items-center justify-center bg-indigo-400 dark:bg-indigo-500 text-neutral-50 px-3 py-1 rounded-full text-sm font-semibold">
            {minValue}
          </span>
        </div>

        {/* Max handle */}
        <div
          className="absolute w-6 h-6 flex items-center justify-center bg-indigo-400 dark:bg-indigo-500 border-4 border-indigo-200 dark:border-indigo-300 rounded-full cursor-pointer active:cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2"
          style={{ left: `${maxPercent}%` }}
          onMouseDown={() => handleMouseDown("max")}
        >
          <span className="transform -translate-y-9 flex items-center justify-center bg-indigo-400 dark:bg-indigo-500 text-neutral-50 px-3 py-1 rounded-full text-sm font-semibold">
            {maxValue}
          </span>
        </div>
      </div>
    </div>
  );
}
