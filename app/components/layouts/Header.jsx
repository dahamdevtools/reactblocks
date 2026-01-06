import { useState } from "react";
import MobileFilter from "./MobileFilter";
import SearchBar from "./SearchBar";
import { LuMenu, LuSearch, LuX } from "react-icons/lu";
import Link from "next/link";
import ThemeSwitcher from "@/lib/utils/ThemeSwitcher";

export default function Header({
  value,
  onChange,
  categories,
  selectedCategory,
  onCategorySelect,
}) {
  const [openSlider, setOpenSlider] = useState(false);

  return (
    <div className="w-full h-fit flex flex-col">
      <div className="w-full h-fit flex lg:hidden items-center justify-between p-5 border-b border-neutral-200 dark:border-neutral-800">
        <Link
          href={"/"}
          className="w-fit h-fit flex items-center gap-2 cursor-pointer"
        >
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
            React
          </h1>
          <span className="text-lg font-semibold px-3 py-1 flex bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-xl">
            blocks
          </span>
        </Link>
        <button
          onClick={() => setOpenSlider(true)}
          className="text-neutral-500 py-2.5 pe-2"
        >
          <LuMenu />
        </button>
      </div>
      <div className="w-full h-fit flex flex-col gap-3.5">
        <div className="w-full h-fit p-3.5 pb-0 lg:p-0">
          <div className="w-full bg-neutral-50 dark:bg-neutral-900 p-3 rounded-2xl flex items-center">
            <div className="w-full flex items-center gap-5 py-1.5 lg:py-0 px-3 pe-0 lg:pe-3 lg:px-5">
              <LuSearch className="text-2xl text-neutral-500" />
              <SearchBar value={value} onChange={onChange} />
            </div>
            <Link
              href={"https://github.com/dahamdevtools/reactblocks"}
              className="hidden lg:block text-nowrap bg-neutral-200 dark:bg-neutral-800 px-5 py-3 rounded-lg"
            >
              Star on Github
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <MobileFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={onCategorySelect}
          />
        </div>
        <div
          className={`w-full h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-900 fixed top-0 left-0 p-10 gap-10 ${
            openSlider ? "translate-x-0" : "translate-x-full"
          } z-50 flex flex-col duration-300 ease-in-out`}
        >
          <div className="w-full h-fit flex items-center justify-start">
            <button
              onClick={() => setOpenSlider(false)}
              className="w-8 h-8 flex items-center justify-center aspect-square rounded-full border-4 border-rose-200 dark:border-rose-800 bg-rose-400 dark:bg-rose-500 text-neutral-50 cursor-pointer"
            >
              <LuX className="text-lg" />
            </button>
          </div>
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col gap-5">
              <Link href={"/"} className="text-xl">
                Home
              </Link>
              <Link href={"/components"} className="text-xl">
                Components
              </Link>
              <Link href={"/documentation"} className="text-xl">
                Docs
              </Link>
              <Link href={"/faq"} className="text-xl">
                FAQ
              </Link>
              <Link href={"/about"} className="text-xl">
                About
              </Link>
              <Link href={"/contact"} className="text-xl">
                Contact
              </Link>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
