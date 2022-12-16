import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";

import "swiper/css";
import Review from "./Review";

const ReviewsSwipper = ({ reviews }: any) => {
  return (
    <Swiper
      className=" max-w-7xl mx-auto"
      slidesPerView={3}
      grabCursor
      autoplay
      modules={[A11y, Autoplay]}
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
