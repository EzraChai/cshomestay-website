import FacilityCard from "./FacilityCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { A11y } from "swiper";

const Facilities = ({ facilities }: any) => {
    return (
        <div className="max-w-7xl mt-24 lg:mt-0 mx-auto pt-6 md:pb-24">
            <h2 className=" text-4xl text-center lg:text-6xl lg:tracking-tight font-extrabold text-zinc-800">
                Facilities.
            </h2>
            <Swiper
                slidesPerView={1.6}
                breakpoints={{
                    640: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3.5,
                    },
                }}
                grabCursor
                modules={[A11y]}
                className=" mt-6 lg:mt-14">
                {facilities.map((facility) => (
                    <SwiperSlide key={facility.id}>
                        <FacilityCard facility={facility} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default Facilities