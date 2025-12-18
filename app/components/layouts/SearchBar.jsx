import { LuX } from "react-icons/lu";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full h-fit flex items-center relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pe-10"
        type="text"
        placeholder="Search Components..."
        spellCheck="false"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="w-7 h-7 flex absolute right-0 items-center justify-center aspect-square rounded-full border-4 border-rose-200 dark:border-rose-900 bg-rose-400 dark:bg-rose-600 text-neutral-50 cursor-pointer"
        >
          <LuX className="text-sm text-rose-200" />
        </button>
      )}
    </div>
  );
}
