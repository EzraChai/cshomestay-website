import Link from "next/link";

export default function Custom404() {
  return (
    <div className="absolute inset-0 flex h-full justify-center items-center">
      <div className="absolute flex items-center justify-center text-[14rem] md:text-[24rem] font-extrabold text-zinc-50 z-[-1] inset-0">
        404
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className=" text-[6rem] lg:text-[7rem] bg-gradient-to-r from-red-600 bg-clip-text text-transparent to-orange-400 font-extrabold uppercase">
          Oops!
        </div>
        <div className="-mt-5">
          <div className=" text-zinc-600">
            We can&apos;t seem to find the page you&apos;re looking for.
          </div>
          <div className="flex justify-center items-center mt-4 flex-col">
            <Link
              className=" font-bold text-xl flex text-zinc-900 items-center mx-auto w-22 justify-center border-b-2 border-transparent hover:border-black transition"
              href={"/"}
            >
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
