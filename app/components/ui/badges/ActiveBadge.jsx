export default function ActiveBadge() {
  return (
    <div className="w-fit h-fit px-5 py-2 rounded-full relative bg-neutral-200 dark:bg-neutral-800">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-emerald-300 dark:bg-emerald-500 border-4 border-neutral-50 dark:border-neutral-900"></span>
      Active
    </div>
  );
}
