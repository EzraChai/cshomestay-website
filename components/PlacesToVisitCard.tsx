import Image from "next/image";
const PlacesToVisitCard = ({ place }) => {
  return (
    <div className="px-8 lg:px-0 relative z-[4] mt-24 hover:-translate-y-2 transition">
      <div
        className="absolute w-72 h-60 left-[50%] -top-20 shadow-xl rounded-xl overflow-hidden"
        style={{ transform: "translate(-50%)" }}
      >
        <div className="relative h-full w-full bg-cover bg-center bg-no-repeat transition">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={place.image.url}
            width={place.image.width}
            height={place.image.height}
            alt={place.nameOfThePlace}
          />
        </div>
        <div className="bg-black z-[1] absolute inset-0 opacity-0 group-hover:opacity-25 transition"></div>
      </div>

      <div className=" group rounded-xl pt-36 bg-white overflow-hidden transition">
        <div className="p-6">
          <div className="font-bold text-zinc-800 text-2xl text-center">
            {place.nameOfThePlace}
          </div>
          <div className="tag flex gap-2 justify-center mt-2 mb-4">
            {place.tag.map((tag, index) => (
              <div
                key={index}
                className=" border-2 border-zinc-800 text-zinc-800 tracking-wider hover:text-white hover:bg-cyan-600 select-none transition uppercase font-bold text-xs flex justify-center items-center rounded-xl px-2 py-[0.125rem]"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="text-zinc-500">{place.description}</div>
        </div>
      </div>
    </div>
  );
};

export default PlacesToVisitCard;