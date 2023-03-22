import Link from "next/link";
import Review from "./Review";
import ReviewsSwipper from "./ReviewsSwiper";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";

const Reviews = ({ reviews }) => {
  const [moreReviews, setMoreReviews] = useState<boolean>(false);
  return (
    <div className=" bg-zinc-800 py-12">
      <div className="title text-center mt-16 lg:mt-24">
        <h2 className="text-4xl lg:text-6xl lg:tracking-tight font-extrabold text-white">
          <span className="bg-gradient-to-r from-[#99fcff] to-[#d7f4ff] bg-clip-text text-transparent">
            Reviews{" "}
          </span>{" "}
          from
          <br />
          our previous guests.
        </h2>
      </div>
      <div className="md:hidden reviews-location md:w-[80%] lg:w-full mx-auto container mt-8 p-8 md:px-16 pb-28 ">
        {reviews.map((review, index) => (
          <div key={index}>
            {index < 3 && <Review review={review} />}
            {index === 3 && moreReviews === false && (
              <div className="text-white">
                <button
                  aria-label="more reviews button"
                  onClick={() => setMoreReviews((prev) => !prev)}
                  className="group lg:hidden px-2 mx-auto border-2 border-zinc-100 hover:bg-black transition-all rounded-xl flex justify-evenly items-center"
                >
                  <div className=" font-semibold text-xl py-2 transition ">
                    More Reviews
                  </div>
                </button>
              </div>
            )}
            {moreReviews && index >= 3 && <Review review={review} />}
          </div>
        ))}
      </div>
      <div className="hidden md:block lg:hidden md:mt-12 md:mx-4 md:pb-32">
        <ReviewsSwipper reviews={reviews} />
      </div>
      <div className="hidden lg:block lg:mt-20 lg:pb-12">
        <ReviewsSwipper reviews={reviews} />
      </div>
      <div className="flex flex-col items-center justify-center text-white mb-4">
        <div className="text-zinc-300 mb-2">
          Feel free to
        </div>
        <Link
          scroll={false}
          rel={"noopener"}
          className="group font-bold flex gap-1 text-zinc-50 items-center mx-auto justify-center border-b-2 border-transparent hover:border-cyan-400 transition"
          href={"https://www.facebook.com/profile.php?id=100079928042529"}
          target={"_blank"}
        >
          <BsFacebook /> Follow us
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
