import { LuUser } from "react-icons/lu";

export default function PendingAvatar() {
  return (
    <div className="w-16 aspect-square rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 relative">
      <span className="w-5 rounded-full aspect-square bg-orange-300 dark:bg-orange-500 border-4 border-neutral-50 dark:border-neutral-900 absolute top-0 right-0"></span>
      <LuUser className="text-neutral-500 text-3xl" />
    </div>
  );
}
