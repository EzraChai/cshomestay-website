import { BsWhatsapp } from "react-icons/bs"
import Link from "next/link"

const Chat = () => {
    return (
        <Link href={"https://wa.link/z1sa7g"}
            target={"_blank"}
            rel={"noopener"}
            className=" fixed right-5 lg:right-6 bottom-5 z-[3] bg-green-500 w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] lg:w-20 lg:h-20 flex items-center justify-center rounded-full">
            < div className="relative" >
                <BsWhatsapp className="text-white w-[2.6rem] h-[2.6rem] md:w-[2.7rem] md:h-[2.7rem]  lg:w-[3.4rem] lg:h-[3.4rem]" />
            </div >
        </Link >
    )
}

export default Chat