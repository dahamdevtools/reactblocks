import { useState, useRef, useEffect } from "react";

export default function CustomSelect({
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selected = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-12 px-5 flex items-center justify-between rounded-2xl cursor-pointer bg-neutral-200 dark:bg-neutral-900 text-left"
      >
        <span
          className={
            selected
              ? "text-neutral-900 dark:text-neutral-50"
              : "text-neutral-900/50 dark:text-neutral-50/50"
          }
        >
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-neutral-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1.5 rounded-2xl bg-neutral-200 dark:bg-neutral-900 overflow-hidden">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`px-5 py-2.5 cursor-pointer hover:bg-neutral-300/60 dark:hover:bg-neutral-800 ${
                opt.value === value
                  ? "bg-neutral-300 dark:bg-neutral-800 font-medium"
                  : ""
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
