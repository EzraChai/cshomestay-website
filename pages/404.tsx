import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="">
        <div className="text-[7rem] bg-gradient-to-r from-red-600 bg-clip-text text-transparent to-orange-400 font-extrabold uppercase">
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