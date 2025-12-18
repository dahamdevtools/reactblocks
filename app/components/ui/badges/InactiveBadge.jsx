export default function InactiveBadge() {
  return (
    <div className="w-fit h-fit px-5 py-2 rounded-full relative bg-neutral-200 dark:bg-neutral-800">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-neutral-200 dark:bg-neutral-800 border-4 border-neutral-50 dark:border-neutral-900"></span>
      Inactive
    </div>
  );
}
