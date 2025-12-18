import { LuUser } from "react-icons/lu";

export default function SquareAvatar() {
  return (
    <div className="w-16 aspect-square rounded-2xl flex items-center justify-center bg-neutral-200 dark:bg-neutral-800">
      <LuUser className="text-neutral-500 text-3xl" />
    </div>
  );
}
