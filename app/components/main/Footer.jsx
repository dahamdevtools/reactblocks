import ThemeSwitcher from "@/lib/utils/ThemeSwitcher";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-fit flex flex-col gap-8 px-8">
      <nav className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="w-full flex flex-col gap-8">
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
          <p className="text-neutral-400">
            Beautiful React components built with Tailwind CSS. Copy, paste, and
            ship faster.
          </p>
          <ThemeSwitcher />
        </div>
        <div className="w-full flex flex-col gap-8">
          <h4 className="text-2xl font-bold">Quick Links</h4>
          <div className="w-full flex flex-col gap-2 text-neutral-400">
            <Link href={"/"}>Home</Link>
            <Link href={"/components"}>Components</Link>
            <Link href={"/documentation"}>Documentation</Link>
            <Link href={"/changelog"}>Changelog</Link>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          <h4 className="text-2xl font-bold">Resources</h4>
          <div className="w-full flex flex-col gap-2 text-neutral-400">
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          <h4 className="text-2xl font-bold">Connect</h4>
          <div className="w-full flex flex-col gap-2 text-neutral-400">
            <Link href={"https://github.com/dahamdevtools/reactblocks"}>
              GitHub
            </Link>
            <Link href={"https://x.com/daahaamm"}>X</Link>
          </div>
        </div>
      </nav>
      <div className="w-full h-fit flex flex-col items-center">
        <div className="w-full h-fit mask-l-from-50% mask-r-from-50%">
          <hr className="border-neutral-300 dark:border-neutral-600" />
        </div>
        <p className="text-center py-6">
          react-blocks.dev | &copy; 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
