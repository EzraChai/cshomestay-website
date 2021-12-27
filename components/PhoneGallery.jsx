import Image from "next/image"
import { photos } from "./photos"

export const PhoneGallery = () => {
    return (
        <div className="px-6">
            {photos.map((picture, i) => (
                <div key={i} className="bg-zinc-100 mb-6 rounded-lg overflow-hidden pb-6 p-3 shadow-lg">
                    <div className="">
                        <Image src={picture.src} alt={picture.title}/>
                    </div>
                    <div className="title">
                        {picture.title}
                    </div>
                </div>
            ))}
        </div>
    )
}
