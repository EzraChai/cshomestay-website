import { LargeImageWithModal } from "./ImageWithModal"

const FacilityCard = ({ facility }: any) => {
    return (
        <div className="mx-3 md:mx-4">
            <div className="rounded-xl overflow-hidden">
                <div className="">
                    <LargeImageWithModal image={facility} />
                </div>
            </div>
            <div className="p-2 font-semibold text-zinc-800 text-normal md:text-xl">{facility.title}</div>
        </div>
    )
}



export default FacilityCard