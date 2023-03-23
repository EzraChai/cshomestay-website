import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

const PlacesToVisitCard = ({ place }) => {
  return (
    <div className=" px-4 md:px-8 min-h-[400px] lg:mx-4 lg:px-0 relative z-[4] mt-12 md:mt-24  transition ">
      <Link scroll={false}
        rel={"noopener"}
        target={"_blank"}
        href={place.locationLink}>
        <div className="absolute w-[211.2px] md:w-72 h-44 md:h-60 left-[50%] -top-10 md:-top-20 shadow-xl rounded-xl overflow-hidden"
          style={{ transform: "translate(-50%)" }}
        >
          <div className="relative h-full w-full bg-cover bg-center bg-no-repeat transition">
            <Image
              className="absolute inset-0 w-full h-full object-cover"
              src={place.image.url}
              width={288}
              height={240}
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
                  className=" border-2 border-zinc-800 text-zinc-800 tracking-wider hover:text-white hover:bg-cyan-600 select-none transition uppercase font-bold text-[0.65rem] md:text-[0.70rem] flex justify-center items-center rounded-xl px-2 py-[0.125rem]"
                >
                  {tag}
                </div>
              ))}
            </div>
            <p className="pb-2 text-zinc-500">{place.description}</p>
            <div
              className="font-semibold border-b-2 border-transparent inline-flex items-center group-hover:border-blue-900 group-hover:text-blue-900 transition"><MdLocationOn className="mr-[0.1rem]" /> Location</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlacesToVisitCard;
