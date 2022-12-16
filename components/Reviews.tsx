import Review from "./Review";
import ReviewsSwipper from "./ReviewsSwiper";
import { useState } from "react";

const Reviews = ({ reviews }) => {
  const [moreReviews, setMoreReviews] = useState<boolean>(false);
  return (
    <div className=" bg-zinc-800 py-12">
      <div className="title text-center mt-16 lg:mt-24">
        <h2 className="text-4xl lg:text-6xl lg:tracking-tight font-extrabold text-white">
          Reviews from
          <br />
          our previous guest.
        </h2>
      </div>
      <div className="lg:hidden reviews-location mx-auto container mt-8 p-8 md:px-16 pb-28 ">
        {reviews.map((review, index) => (
          <div key={index}>
            {index < 3 && <Review review={review} />}
            {index === 3 && moreReviews === false && (
              <div className="text-white">
                <button
                  onClick={() => setMoreReviews((prev) => !prev)}
                  className="group lg:hidden w-[50%] md:w-[18%] mx-auto border-2 border-zinc-100 hover:bg-black transition-all rounded-xl flex justify-evenly items-center"
                >
                  <div className=" font-semibold text-xl py-2 transition ">
                    More Reviews
                  </div>
                </button>
              </div>
            )}
            {moreReviews && index > 3 && <Review review={review} />}
          </div>
        ))}
      </div>
      <div className="hidden lg:block lg:mt-20 lg:pb-32">
        <ReviewsSwipper reviews={reviews} />
      </div>
    </div>
  );
};

export default Reviews;
