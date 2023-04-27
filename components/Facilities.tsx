import FacilityCard from "./FacilityCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { A11y, Mousewheel } from "swiper";

const Facilities = ({ facilities }: any) => {
  return (
    <div className="pt-6 mx-auto mt-24 max-w-7xl lg:mt-0 md:pb-24">
      <h2 className="text-4xl font-extrabold text-center  lg:text-6xl lg:tracking-tight text-zinc-800">
        Facilities.
      </h2>
      <Swiper
        mousewheel={{ forceToAxis: true }}
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
        modules={[A11y, Mousewheel]}
        className="mt-6  lg:mt-14"
      >
        {facilities.map((facility) => (
          <SwiperSlide key={facility.id}>
            <FacilityCard facility={facility} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Facilities;
