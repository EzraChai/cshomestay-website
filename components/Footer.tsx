import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-zinc-900 mt-14">
      <div className="text-xl font-black logo md:text-2xl">
        <Link href="/">Cozy & Sweet.</Link>
      </div>

      <div className="flex justify-center py-6">
        <Link
          href={"/"}
          className="font-semibold transition border-b-2 border-transparent hover:border-cyan-400"
        >
          Home
        </Link>
        <div className="px-3 md:px-6 text-zinc-400">|</div>
        <Link
          href={"/about"}
          className="font-semibold transition border-b-2 border-transparent hover:border-cyan-400"
        >
          About
        </Link>
        <div className="px-3 md:px-6 text-zinc-400">|</div>
        <Link
          href={"/pictures"}
          className="font-semibold transition border-b-2 border-transparent hover:border-cyan-400"
        >
          Pictures
        </Link>
        <div className="px-3 md:px-6 text-zinc-400">|</div>
        <Link
          href={"/question"}
          className="font-semibold transition border-b-2 border-transparent hover:border-cyan-400"
        >
          Questions
        </Link>
      </div>
      <div className="mb-24 text-sm text-center md:text-normal text-zinc-500">
        {`© ${new Date().getFullYear()} Cozy & Sweet Homestay Port Dickson`}
      </div>
    </div>
  );
};

export default Footer;
