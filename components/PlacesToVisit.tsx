import PlacesToVisitCard from "./PlacesToVisitCard";

const PlacesToVisit = ({ places }) => {
  return (
    <div className="relative z-[1] mt-24 pt-24 pb-32 bg-gray-600 bg-gradient-to-b from-cyan-500 to-[#c4ecf3]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-white lg:text-6xl  px-2 lg:px-0 lg:tracking-tight text-center font-extrabold">
          Places to visit in Port Dickson.
        </h2>
        <div className=" mt-10 grid lg:grid-cols-3 gap-10">
          {places.map((place) => (
            <PlacesToVisitCard place={place} key={place.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacesToVisit;
