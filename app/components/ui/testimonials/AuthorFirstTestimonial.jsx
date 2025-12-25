import { LuUser } from "react-icons/lu";

export default function AuthorFirstTestimonial() {
  return (
    <div className="w-full h-fit flex flex-col gap-6 p-6 pb-7 rounded-3xl bg-[#f0f0f0] dark:bg-[#202020]">
      <div className="w-full h-fit flex items-center gap-5">
        <div className="w-12 flex items-center justify-center shrink-0 aspect-square rounded-full bg-neutral-300 dark:bg-neutral-900">
          <LuUser className="text-neutral-500 text-2xl" />
        </div>
        <div className="w-full h-fit flex flex-col">
          <p className="text-ellipsis line-clamp-1 text-neutral-600">
            Lorem, ipsum.
          </p>
          <p className="text-xl text-ellipsis line-clamp-1">
            Lorem, ipsum dolor.
          </p>
        </div>
      </div>
      <p className="px-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sint
        tenetur quibusdam modi ipsum maiores dicta deserunt fugit excepturi
        voluptatum. Lorem, ipsum.
      </p>
    </div>
  );
}
