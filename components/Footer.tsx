import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-white text-zinc-900 mt-14 flex items-center justify-center flex-col">
            <div className="logo font-black text-xl md:text-2xl">
                <Link href="/">Cozy & Sweet.</Link>
            </div>
            <div className="mt-4 mb-12 text-sm md:text-normal text-center text-zinc-500">
                © {new Date().getFullYear()} Cozy & Sweet Homestay Port Dickson. <br className="md:hidden" /> All right reserved.
            </div>
            <div className="flex justify-center pb-16">
                <Link href={"/"} className="font-semibold border-b-2 border-transparent hover:border-blue-900 transition">Home</Link>
                <div className="text-zinc-400 px-6">|</div>
                <Link href={"/pictures"} className="font-semibold border-b-2 border-transparent hover:border-blue-900 transition">Pictures</Link>
                <div className="text-zinc-400 px-6">|</div>
                <Link href={"/about"} className="font-semibold border-b-2 border-transparent hover:border-blue-900 transition">About</Link>
            </div>
        </div>
    )
}

export default Footer; 