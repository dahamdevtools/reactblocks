export default function BrowserMockupWithTabs() {
  return (
    <div className="w-full h-fit rounded-2xl flex flex-col bg-[#f0f0f0] dark:bg-[#202020]">
      <div className="w-full h-fit flex items-center justify-start gap-4 px-4 pt-2.5 overflow-hidden">
        <div className="w-fit h-fit flex shrink-0 gap-1.5 items-center justify-start z-10">
          <div className="w-3.5 aspect-square rounded-full bg-rose-300 dark:bg-rose-600"></div>
          <div className="w-3.5 aspect-square rounded-full bg-yellow-300 dark:bg-yellow-600"></div>
          <div className="w-3.5 aspect-square rounded-full bg-emerald-300 dark:bg-emerald-600"></div>
        </div>
        <div className="w-full max-w-40 min-w-0 h-fit rounded-t-xl relative bg-neutral-200 dark:bg-neutral-800">
          <span className="w-5 h-full flex shrink-0 absolute right-0 translate-x-full bg-neutral-200 dark:bg-neutral-800">
            <span className="w-full h-full rounded-bl-xl bg-[#f0f0f0] dark:bg-[#202020]"></span>
          </span>
          <span className="w-5 h-full flex shrink-0 absolute left-0 -translate-x-full bg-neutral-200 dark:bg-neutral-800">
            <span className="w-full h-full rounded-br-xl bg-[#f0f0f0] dark:bg-[#202020]"></span>
          </span>
          <div className="w-full h-fit p-2.5 flex items-center gap-2.5">
            <div className="w-3.5 aspect-square flex shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-900/50"></div>
            <p className="text-sm text-nowrap text-ellipsis line-clamp-1 text-neutral-400 dark:text-neutral-600">
              https://google.com
            </p>
          </div>
        </div>
        <div className="w-14 flex shrink-0"></div>
      </div>
      <div className="w-full h-fit flex items-center justify-center p-2.5 pt-0">
        <div className="w-full h-fit p-20 flex items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800">
          <p className="text-2xl text-neutral-500">Hello</p>
        </div>
      </div>
    </div>
  );
}
