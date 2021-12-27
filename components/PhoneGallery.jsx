import Image from "next/image"
import { photos } from "./photos"

export const PhoneGallery = () => {
    return (
        <div className="px-6 snap-mandatory snap-y">
            {photos.map((picture, i) => (
                <div key={i} className="bg-zinc-100 snap-center mb-6 rounded-lg overflow-hidden pb-6 p-2 shadow-lg">.
                    <div className="touch-pinch-zoom">
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
