import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-fit flex items-center justify-center p-5 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
      <p className="w-fit flex gap-2 items-center">
        Made with
        <FaHeart className="text-rose-300 dark:text-rose-700" />
        by Daham Senarathne
      </p>
    </footer>
  );
}
