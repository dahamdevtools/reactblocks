export default function VerticalDivider() {
  return (
    <div className="w-full h-fit flex items-center gap-3">
      <div className="w-full h-32"></div>
      <div className="h-full w-fit flex flex-col items-center gap-3">
        <div className="h-full w-0.5 bg-neutral-200 dark:bg-neutral-800"></div>
        <span className="w-fit h-fit text-neutral-400 dark:text-neutral-600">
          OR
        </span>
        <div className="h-full w-0.5 bg-neutral-200 dark:bg-neutral-800"></div>
      </div>
      <div className="w-full h-32"></div>
    </div>
  );
}
