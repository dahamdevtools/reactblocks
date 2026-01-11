export default function HorizontalDivider() {
  return (
    <div className="w-full h-fit flex items-center gap-3">
      <div className="w-full h-0.5 bg-neutral-200 dark:bg-neutral-800"></div>
      <span className="w-fit h-fit flex text-neutral-400 dark:text-neutral-600">
        OR
      </span>
      <div className="w-full h-0.5 bg-neutral-200 dark:bg-neutral-800"></div>
    </div>
  );
}
