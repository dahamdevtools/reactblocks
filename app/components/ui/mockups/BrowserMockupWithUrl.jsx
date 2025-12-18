export default function BrowserMockupWithUrl() {
  return (
    <div className="w-full h-fit rounded-2xl flex flex-col bg-neutral-200/50 dark:bg-neutral-800/60">
      <div className="w-full h-fit flex items-center justify-between gap-4 px-4 py-2.5">
        <div className="w-fit h-fit flex gap-1.5 items-center justify-start">
          <div className="w-3.5 aspect-square rounded-full bg-rose-300 dark:bg-rose-600"></div>
          <div className="w-3.5 aspect-square rounded-full bg-yellow-300 dark:bg-yellow-600"></div>
          <div className="w-3.5 aspect-square rounded-full bg-emerald-300 dark:bg-emerald-600"></div>
        </div>
        <div className="w-full h-fit px-3 py-1.5 rounded-lg text-sm text-nowrap text-ellipsis line-clamp-1 text-neutral-400 dark:text-neutral-600 bg-neutral-200 dark:bg-neutral-800">
          https://google.com
        </div>
        <div className="w-14"></div>
      </div>
      <div className="w-full h-fit flex items-center justify-center p-2.5 pt-0">
        <div className="w-full h-fit p-20 flex items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800">
          <p className="text-2xl text-neutral-500">Hello</p>
        </div>
      </div>
    </div>
  );
}
