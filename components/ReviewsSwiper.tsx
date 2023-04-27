import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Mousewheel } from "swiper";

import "swiper/css";
import Review from "./Review";

const ReviewsSwipper = ({ reviews }: any) => {
  return (
    <Swiper
      mousewheel={{
        forceToAxis: true,
      }}
      className="mx-auto  max-w-7xl"
      slidesPerView={2}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
      }}
      grabCursor
      autoplay
      modules={[A11y, Autoplay, Mousewheel]}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <Review review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSwipper;
