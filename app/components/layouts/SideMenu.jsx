import { getCategoryCount } from "@/data/component-data";
import ThemeSwitcher from "@/lib/utils/ThemeSwitcher";
import Link from "next/link";

export default function SideMenu({
  categories,
  selectedCategory,
  onCategorySelect,
}) {
  return (
    <div className="w-fit h-full hidden lg:flex flex-col justify-between rounded-2xl bg-neutral-50 dark:bg-neutral-900">
      <div className="w-fit h-full flex flex-col">
        <div className="px-10 py-8 h-fit w-full">
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
        </div>
        <div className="w-full h-fit px-3.5">
          <div className="w-full h-fit border-b border-neutral-200 dark:border-neutral-800"></div>
        </div>
        <div className="w-fit flex flex-col px-10 py-10 overflow-y-auto scrollbar-none flex-1 min-h-0">
          <button
            onClick={() => onCategorySelect("all")}
            className={`w-full flex items-center ${
              selectedCategory === "all"
                ? "bg-neutral-200/50 dark:bg-neutral-800"
                : ""
            } rounded-tr-xl rounded-br-xl duration-200 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800/50 group`}
          >
            <span
              className={`w-1 h-12 duration-200 hover:bg-neutral-300 ${
                selectedCategory === "all"
                  ? "bg-neutral-500 dark:bg-neutral-400"
                  : "bg-neutral-200 dark:bg-neutral-700 group-hover:bg-neutral-300 dark:group-hover:bg-neutral-600"
              }`}
            ></span>
            <span className="w-full flex items-center justify-between gap-2.5 px-6">
              <span className="text-nowrap pe-24">All Components</span>
              <span className="text-neutral-400 text-sm">
                {categories?.reduce(
                  (acc, cat) => acc + getCategoryCount(cat),
                  0
                ) ?? 0}
              </span>
            </span>
          </button>
          {categories?.map((category) => {
            const count = getCategoryCount(category);
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => onCategorySelect(category)}
                className={`w-full flex items-center ${
                  isActive ? "bg-neutral-200/50 dark:bg-neutral-800" : ""
                } rounded-tr-xl rounded-br-xl duration-200 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800/50 group`}
              >
                <span
                  className={`w-1 h-12 duration-200 ${
                    isActive
                      ? "bg-neutral-500 dark:bg-neutral-400"
                      : "bg-neutral-200 dark:bg-neutral-700 group-hover:bg-neutral-300 dark:group-hover:bg-neutral-600"
                  }`}
                ></span>
                <span className="w-full flex items-center justify-between gap-2.5 px-6">
                  <span className="text-nowrap pe-24">{category}</span>
                  <span className="text-neutral-400 text-sm">{count}</span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="w-full h-fit px-3.5">
          <div className="w-full h-fit px-1.5 py-5 border-t border-neutral-200 dark:border-neutral-800">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}
