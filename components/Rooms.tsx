import { Swiper, SwiperSlide } from "swiper/react";
import Room from "./Room";
import { A11y, Mousewheel } from "swiper";

const Rooms = ({ rooms }: any) => {
  return (
    <div className="pt-32 mx-auto md:pb-12 max-w-7xl">
      <div className="items-center grid-cols-5 pb-4 md:grid">
        <div className="col-span-2 px-4 text-xl font-bold md:text-3xl lg:text-5xl text-zinc-800">
          More <br className="hidden md:block" /> than enough.
        </div>
        <div className="col-span-3 px-4 text-md lg:text-xl text-zinc-600">
          Spacious, corner-lot condominium with 3 bedrooms, 2 bathrooms, a
          living room and a kitchen. Relax with your family at this peaceful
          place.😊
          <div className="mt-2 text-sm italic text-zinc-600">
            Suitable for 10 people at most.
          </div>
        </div>
      </div>
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
        className="mt-6 md:mb-12 lg:mt-14"
      >
        {rooms.map((room, index) => (
          <SwiperSlide key={index}>
            <Room room={room} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  // return (<div className="my-32">
  //   <div className="flex justify-around mx-auto max-w-7xl">
  // {rooms.map((room) => (
  //   <Room room={room} />
  // ))}
  //   </div>
  //   <h3 className="mt-12 mb-12 font-semibold text-center text-md lg:text-3xl text-zinc-600">
  //     Suitable for 10 people at most
  //   </h3>
  // </div>)
};

export default Rooms;
