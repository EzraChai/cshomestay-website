import Image from "next/image"

const FacilityCard = ({ facility }: any) => {
    return (
        <div className="mx-3 md:mx-4">
            <div className="rounded-2xl overflow-hidden">
                <Image className="aspect-[4/3]" src={facility.image.url} width={facility.image.width} height={facility.image.height} alt={facility.image} />
            </div>
            <div className="p-2 font-semibold text-zinc-800 text-normal md:text-xl">{facility.title}</div>
        </div>
    )
}



export default FacilityCard