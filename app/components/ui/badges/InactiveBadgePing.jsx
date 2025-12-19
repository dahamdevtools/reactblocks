export default function AnimatedInactiveBadge() {
  return (
    <div className="w-fit h-fit p-2 pe-5 gap-2 flex items-center rounded-full overflow-visible bg-neutral-100 dark:bg-neutral-800">
      <span className="h-full aspect-square flex items-center justify-center rounded-full overflow-visible relative">
        <span className="w-3 absolute aspect-square rounded-full animate-ping bg-neutral-300 dark:bg-neutral-500"></span>
        <span className="w-3 aspect-square rounded-full bg-neutral-300 dark:bg-neutral-500"></span>
      </span>
      <p className="text-neutral-500 dark:text-neutral-300">Inactive</p>
    </div>
  );
}
