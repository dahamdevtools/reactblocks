import { FaStar } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";

export default function FloatingAvatarTestimonial() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-6 p-6 rounded-3xl relative bg-[#f0f0f0] dark:bg-[#202020]">
      <div className="w-20 flex items-center justify-center shrink-0 aspect-square rounded-full absolute top-0 -translate-y-1/2 border-6 border-neutral-50 dark:border-neutral-900 bg-[#f0f0f0] dark:bg-[#202020]">
        <LuUser className="text-neutral-500 text-4xl" />
      </div>
      <div className="w-full h-fit flex flex-col pt-10">
        <p className="text-ellipsis line-clamp-1 text-center text-neutral-600">
          Lorem, ipsum.
        </p>
        <p className="text-xl text-ellipsis line-clamp-1 text-center">
          Lorem, ipsum dolor.
        </p>
      </div>
      <p className="px-3 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui
        pariatur sint similique cupiditate est quaerat odio harum aliquam hic?
      </p>
      <div className="w-full h-fit flex items-center justify-center text-lg gap-1 pb-1.5">
        <FaStar className="text-orange-300 dark:text-yellow-600" />
        <FaStar className="text-orange-300 dark:text-yellow-600" />
        <FaStar className="text-orange-300 dark:text-yellow-600" />
        <FaStar className="text-orange-300 dark:text-yellow-600" />
        <FaStar className="text-neutral-300 dark:text-neutral-700" />
      </div>
    </div>
  );
}
