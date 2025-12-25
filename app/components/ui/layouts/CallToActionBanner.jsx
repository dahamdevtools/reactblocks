export default function CallToActionBanner() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-5 px-8 pt-10 sm:pt-13 pb-8 rounded-3xl bg-neutral-200/50 dark:bg-neutral-800/60">
      <h3 className="text-2xl sm:text-3xl font-semibold text-center">
        Ready to transform your workflow?
      </h3>
      <p className="text-lg sm:text-xl text-center">
        Join thousands of teams already building faster and smarter.
      </p>
      <button className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300 dark:bg-neutral-900">
        Get Started
      </button>
      <div className="w-full h-fit flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-5">
        <p className="sm:flex-1 text-center sm:text-right text-neutral-500">
          Start your free trial today
        </p>
        <div className="w-1/2 sm:w-0.5 h-0.5 sm:h-10 shrink-0 bg-neutral-200 dark:bg-neutral-800"></div>
        <p className="sm:flex-1 text-center sm:text-left text-neutral-500">
          No credit card required
        </p>
      </div>
    </div>
  );
}
