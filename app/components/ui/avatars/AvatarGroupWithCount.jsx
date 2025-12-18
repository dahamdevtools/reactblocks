import { LuUser } from "react-icons/lu";

export default function AvatarGroupWithCount() {
  return (
    <div className="w-fit flex -space-x-6">
      <div className="w-14 aspect-square rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 border-4 border-neutral-50 dark:border-neutral-900">
        <LuUser className="text-neutral-500 text-2xl" />
      </div>
      <div className="w-14 aspect-square rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 border-4 border-neutral-50 dark:border-neutral-900">
        <LuUser className="text-neutral-500 text-2xl" />
      </div>
      <div className="w-14 aspect-square rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 border-4 border-neutral-50 dark:border-neutral-900">
        <LuUser className="text-neutral-500 text-2xl" />
      </div>
      <div className="w-14 aspect-square rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 border-4 border-neutral-50 dark:border-neutral-900">
        <span className="font-extrabold text-neutral-500">+99</span>
      </div>
    </div>
  );
}
