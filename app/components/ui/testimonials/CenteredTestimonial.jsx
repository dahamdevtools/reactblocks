import { LuUser } from "react-icons/lu";

export default function CenteredTestimonial() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-6 p-6 pt-8 rounded-3xl bg-[#f0f0f0] dark:bg-[#202020]">
      <div className="w-16 flex items-center justify-center shrink-0 aspect-square rounded-full bg-neutral-300 dark:bg-neutral-900">
        <LuUser className="text-neutral-500 text-3xl" />
      </div>
      <p className="px-3 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui
        pariatur sint similique cupiditate est quaerat odio harum aliquam hic?
      </p>
      <div className="w-full h-fit flex flex-col">
        <p className="text-ellipsis line-clamp-1 text-center text-neutral-600">
          Lorem, ipsum.
        </p>
        <p className="text-xl text-ellipsis line-clamp-1 text-center">
          Lorem, ipsum dolor.
        </p>
      </div>
    </div>
  );
}
