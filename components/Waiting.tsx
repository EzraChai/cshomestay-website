import Link from "next/link";
import type { FC } from "react";
import { BsFacebook } from "react-icons/bs";

const Waiting: FC = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full">
        <h2 className="text-4xl lg:text-6xl px-2 lg:px-0 lg:tracking-tight text-center font-extrabold">
          Feel free to book with us.
        </h2>
        <div className="mt-6">
          <Link
            href={"https://www.facebook.com/profile.php?id=100079928042529"}
            target={"_blank"}
            className="group border-2 border-zinc-800 text-zinc-800 transition hover:bg-zinc-800 rounded-xl px-2 flex justify-around items-center gap-2"
          >
            <div className="rounded-full w-5 flex items-center justify-center h-5 group-hover:bg-white">
              <BsFacebook className="group-hover:text-[#005cae] transition" />
            </div>
            <span className="mb-[0.1rem] text-xl font-semibold group-hover:text-white transition py-2">
              Follow us
            </span>
          </Link>
        </div>
        <div className="absolute z-[-1] inset-0 top-[7rem] md:top-[12rem] flex justify-center -space-x-11 opacity-40 blur-xl">
          <div className="mix-blend-multiply bg-blue-200 w-60 h-60 rounded-full" />
          <div className="mix-blend-multiply bg-pink-200 w-60 h-60 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Waiting;
