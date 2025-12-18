import { LuUser } from "react-icons/lu";

export default function BusyAvatar() {
  return (
    <div className="w-16 aspect-square rounded-full flex items-center justify-center relative bg-neutral-200 dark:bg-neutral-800">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 bg-rose-300 dark:bg-rose-500 border-4 border-neutral-50 dark:border-neutral-900"></span>
      <LuUser className="text-neutral-500 text-3xl" />
    </div>
  );
}
