export default function BrowserMockup() {
  return (
    <div className="w-full h-fit rounded-2xl flex flex-col bg-neutral-200/50 dark:bg-neutral-800/60">
      <div className="w-full h-fit flex gap-1.5 items-center justify-start p-4">
        <div className="w-3.5 aspect-square rounded-full bg-rose-300 dark:bg-rose-600"></div>
        <div className="w-3.5 aspect-square rounded-full bg-yellow-300 dark:bg-yellow-600"></div>
        <div className="w-3.5 aspect-square rounded-full bg-emerald-300 dark:bg-emerald-600"></div>
      </div>
      <div className="w-full h-fit flex items-center justify-center p-2.5 pt-0">
        <div className="w-full h-fit p-20 flex items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800">
          <p className="text-2xl text-neutral-500">Hello</p>
        </div>
      </div>
    </div>
  );
}
