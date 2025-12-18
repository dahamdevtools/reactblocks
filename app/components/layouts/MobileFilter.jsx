import { useRef, useState, useEffect } from "react";
import { getCategoryCount } from "@/data/component-data";

export default function MobileFilter({
  categories,
  selectedCategory,
  onCategorySelect,
}) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="w-full h-fit flex gap-2 px-3.5 overflow-x-auto scrollbar-hide cursor-grab select-none"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <button
        onClick={() => onCategorySelect("all")}
        onMouseDown={(e) => e.stopPropagation()}
        className={`w-fit h-fit ps-4 pe-1 py-1 rounded-xl flex items-center gap-3 cursor-pointer duration-200 shrink-0 ${
          selectedCategory === "all"
            ? "bg-neutral-200 dark:bg-neutral-700/50"
            : "bg-neutral-50 dark:bg-neutral-900"
        }`}
      >
        <span className="text-nowrap">All Components</span>
        <span
          className={`text-sm px-3 py-1.5 text-neutral-500 dark:text-neutral-400 rounded-lg duration-200 ${
            selectedCategory === "all"
              ? "bg-neutral-100/70 dark:bg-neutral-700/70"
              : "bg-neutral-200/60 dark:bg-neutral-800"
          }`}
        >
          {categories?.reduce((acc, cat) => acc + getCategoryCount(cat), 0) ??
            0}
        </span>
      </button>
      {categories.map((category) => {
        const count = getCategoryCount(category);
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            onMouseDown={(e) => e.stopPropagation()}
            className={`w-fit h-fit ps-4 pe-1 py-1 rounded-xl flex items-center gap-3 cursor-pointer duration-200 shrink-0 ${
              isActive
                ? "bg-neutral-200 dark:bg-neutral-700/50"
                : "bg-neutral-50 dark:bg-neutral-900"
            }`}
          >
            <span className="text-nowrap">{category}</span>
            <span
              className={`text-sm px-3 py-1.5 text-neutral-500 dark:text-neutral-400 rounded-lg duration-200 ${
                isActive
                  ? "bg-neutral-100/70 dark:bg-neutral-700/70"
                  : "bg-neutral-200/60 dark:bg-neutral-800"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
