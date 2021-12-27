import Image from "next/image"
import { photos } from "./photos"

export const PhoneGallery = () => {
    return (
        <div className="px-6 mt-4">
            {photos.map((picture, i) => (
                <div key={i} className=" bg-slate-100 rounded-sm mb-6 overflow-hidden pb-6 p-3 shadow-lg">
                    <div className="">
                        <Image src={picture.src} alt={picture.title}/>
                    </div>
                    <div className="title mt-1 cursive font-semibold ml-2 tracking-wider text-xl">
                        {picture.title}
                    </div>
                </div>
            ))}
        </div>
    )
}
