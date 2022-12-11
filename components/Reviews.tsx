import Review from "./Review";

const Reviews = ({ reviews }) => {
  return (
    <div className="bg-zinc-50 py-12 max-width-[100rem]">
      <div className="title text-center mt-16 lg:mt-24">
        <p className="text-4xl lg:text-6xl lg:tracking-tight font-extrabold text-zinc-700">
          Reviews from
          <br />
          our previous guest.
        </p>
      </div>
      <div className="reviews-location mx-auto container lg:mt-20 mt-8 lg:grid lg:grid-cols-3 p-8 md:px-16 lg:px-13 lg:gap-10 pb-28 lg:pb-32">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
