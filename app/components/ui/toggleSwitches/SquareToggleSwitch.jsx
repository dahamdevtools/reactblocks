export default function SquareToggleSwitch({
  id,
  value = false,
  onChange = () => {},
}) {
  return (
    <label htmlFor={id} className="cursor-pointer inline-block">
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
      <span className="w-11 h-6 flex items-center bg-neutral-200 dark:bg-neutral-800 transition-colors duration-200">
        <span
          className={`w-4 aspect-square bg-neutral-50 dark:bg-neutral-700 transition-transform duration-100 ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </span>
    </label>
  );
}
