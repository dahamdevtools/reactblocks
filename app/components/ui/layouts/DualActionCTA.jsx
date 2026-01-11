export default function DualActionCTA() {
  return (
    <div className="w-full max-w-3xl h-fit flex flex-col rounded-3xl p-8 pt-10 sm:pt-12 gap-4 bg-neutral-200/50 dark:bg-neutral-800/60">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-center">
        Need More Help?
      </h3>
      <p className="text-xl text-center px-0 sm:px-12 text-neutral-500">
        Still can't find what you're looking for? Check our FAQ or reach out
        directly.
      </p>
      <div className="w-full flex flex-wrap items-center justify-center gap-3.5">
        <button className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300/50 dark:bg-neutral-800">
          View FAQ
        </button>
        <button className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300 dark:bg-neutral-900/50">
          Contact Us
        </button>
      </div>
    </div>
  );
}
