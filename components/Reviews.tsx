import Review from "./Review";
import ReviewsSwipper from "./ReviewsSwiper";

const Reviews = ({ reviews }: any) => {
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
          <Review key={index} review={review} />
        ))}
      </div>
      <div className="hidden lg:block lg:mt-20 lg:pb-32">
        <ReviewsSwipper reviews={reviews} />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Reviews;
