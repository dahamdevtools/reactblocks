"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoDesktopOutline, IoMoon, IoSunny } from "react-icons/io5";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme) => {
    document.documentElement.classList.add("no-transitions");
    setTheme(newTheme);
    setTimeout(() => {
      document.documentElement.classList.remove("no-transitions");
    }, 0);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-fit h-fit flex items-center bg-neutral-200/50 dark:bg-neutral-800/50 rounded-xl gap-1 p-1">
      <button
        onClick={() => handleThemeChange("light")}
        className={`w-8 aspect-square rounded-lg flex items-center justify-center cursor-pointer ${
          theme === "light" ? "bg-neutral-300/50 dark:bg-neutral-700/50" : ""
        }`}
      >
        <IoSunny
          className={`text-lg ${
            theme === "light"
              ? "text-neutral-500"
              : "text-neutral-400 dark:text-neutral-600"
          }`}
        />
      </button>
      <button
        onClick={() => handleThemeChange("system")}
        className={`w-8 aspect-square rounded-lg flex items-center justify-center cursor-pointer ${
          theme === "system" ? "bg-neutral-300/50 dark:bg-neutral-700/50" : ""
        }`}
      >
        <IoDesktopOutline
          className={`text-lg ${
            theme === "system"
              ? "text-neutral-400"
              : "text-neutral-400 dark:text-neutral-600"
          }`}
        />
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={`w-8 aspect-square rounded-lg flex items-center justify-center cursor-pointer ${
          theme === "dark" ? "bg-neutral-300/50 dark:bg-neutral-700/50" : ""
        }`}
      >
        <IoMoon
          className={`text-lg ${
            theme === "dark"
              ? "text-neutral-400"
              : "text-neutral-400 dark:text-neutral-600"
          }`}
        />
      </button>
    </div>
  );
}
