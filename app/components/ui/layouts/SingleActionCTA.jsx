export default function SingleActionCTA() {
  return (
    <div className="w-full max-w-3xl h-fit flex flex-col items-center rounded-3xl p-8 pt-10 sm:pt-12 gap-4 bg-neutral-200/50 dark:bg-neutral-800/60">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-center">
        Ready to Build Faster?
      </h3>
      <p className="text-xl text-center px-0 sm:px-12 text-neutral-500">
        Explore 50+ handcrafted React components and ship beautiful interfaces
        in minutes.
      </p>
      <button className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300 dark:bg-neutral-900">
        Browse Components
      </button>
    </div>
  );
}
