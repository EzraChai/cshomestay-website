import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Review from "./Review";
import { A11y, Autoplay } from "swiper";

const ReviewsSwipper = ({ reviews }: any) => {
  return (
    <Swiper
      className=" max-w-7xl mx-auto"
      spaceBetween={30}
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
