import { Swiper, SwiperSlide } from "swiper/react";
import Room from "./Room";
import { A11y } from "swiper";

const Rooms = ({ rooms }: any) => {
  return <div className="pt-32 md:pb-12 max-w-7xl mx-auto">
    <div className="md:grid pb-4 items-center grid-cols-5">
      <div className=" px-4 col-span-2 text-xl md:text-3xl lg:text-5xl font-bold text-zinc-800">More <br className="hidden md:block" /> than enough.</div>
      <div className=" px-4 col-span-3 text-md lg:text-xl text-zinc-600">Spacious, corner-lot apartment
        with 3 bedrooms, 2 bathrooms, a living room and a kitchen.
        Relax with the whole family at this peaceful place to stay.😊
        <div className="mt-2 text-zinc-600 text-sm italic">Suitable for 10 people at most.</div>
      </div>
    </div>
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
      className=" mt-6 md:mb-12 lg:mt-14">
      {rooms.map((room) => (
        <SwiperSlide key={room.id}>
          <Room room={room} />
        </SwiperSlide>
      ))}
    </Swiper>

  </div>

  // return (<div className="my-32">
  //   <div className="flex justify-around max-w-7xl mx-auto">
  // {rooms.map((room) => (
  //   <Room room={room} />
  // ))}
  //   </div>
  //   <h3 className="mt-12 mb-12 text-md text-center lg:text-3xl font-semibold text-zinc-600">
  //     Suitable for 10 people at most
  //   </h3>
  // </div>)
};

export default Rooms;
