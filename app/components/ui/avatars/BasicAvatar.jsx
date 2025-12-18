import { LuUser } from "react-icons/lu";

export default function BasicAvatar() {
  return (
    <div className="w-16 aspect-square rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800">
      <LuUser className="text-neutral-500 text-3xl" />
    </div>
  );
}
