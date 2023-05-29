import PlacesToVisitCard from "./PlacesToVisitCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsInfoCircleFill } from "react-icons/bs";

import "swiper/css";
import { A11y, Mousewheel } from "swiper";

const PlacesToVisit = ({ places }) => {
  return (
    <div className="relative overflow-hidden z-[1] mt-24 pt-24 pb-32  bg-gradient-to-b from-cyan-500 to-cyan-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="px-2 text-4xl font-extrabold text-center text-white lg:text-6xl lg:px-0 lg:tracking-tight">
          Places to visit in <br className="md:hidden" /> Port Dickson.
        </h2>
        <div className="mt-2 mb-12 text-xl font-semibold text-center text-zinc-100 lg:text-3xl">
          Other than beaches.
        </div>

        <Swiper
          grabCursor
          mousewheel={{ forceToAxis: true }}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 3.3,
            },
          }}
          modules={[A11y, Mousewheel]}
          className=" mt-14"
        >
          {places.map((place) => (
            <SwiperSlide key={place.id}>
              <PlacesToVisitCard place={place} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center mt-4 text-sm text-zinc-800">
          <BsInfoCircleFill className="mr-2" /> Click on the card to show the
          location.
        </div>
      </div>
    </div>
  );
};

export default PlacesToVisit;
