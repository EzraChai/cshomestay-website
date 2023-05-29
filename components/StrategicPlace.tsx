// import { FaUmbrellaBeach, FaBus, FaHospitalSymbol } from "react-icons/fa";
// import { SiMcdonalds } from "react-icons/si";
import { MdLocationPin } from "react-icons/md";
// import DistanceFromProperty from "./DistanceFromProperty";

const StrategicPlace = () => {
  return (
    <div className="container mx-auto mt-24 overflow-hidden main-location max-w-7xl md:text-left">
      <div className="md:grid md:grid-cols-4 lg:grid-cols-5 lg:mb-40">
        <div className=" md:ml-12 lg:ml-0 lg:w-[90%] content-left relative col-span-2 lg:col-span-3 flex items-center justify-center ">
          <div className="">
            <h2 className="text-lg font-semibold text-gray-600 lg:text-4xl ">
              The
              <span className="mx-1 text-2xl font-extrabold text-cyan-500 lg:tracking-tight lg:text-6xl lg:mx-4">
                strategic
              </span>
              homestay in <br className="mb-2" />
              <div className="w-full overflow-hidden h-50">
                <div className="main-content-text mt-1 title-font font-extrabold text-[2.6rem] mb-2 md:mb-0 md:text-5xl lg:text-8xl text-zinc-800">
                  Port Dickson
                </div>
              </div>
            </h2>
            <div className="text-zinc-600 text-left tracking-wide font-semibold text-[0.9rem] mt-6  mx-auto">
              <div className="text-lg font-semibold lg:text-2xl">
                <div className="flex items-center">
                  <MdLocationPin className="" />
                  <h4>What&apos;s nearby</h4>
                </div>
                <ul className="mb-6 lg:mb-2">
                  <li className="mt-1 ml-6 text-sm font-normal lg:text-base">
                    <div className="">McDonald&apos;s - 2 min drive</div>
                    <div className="">Port Dickson Hospital - 5 min drive</div>
                    <div className="">Pantai Saujana - 8 min drive</div>
                    <div className="">Seremban - 36 min drive</div>
                  </li>
                </ul>
              </div>
              {/* <DistanceFromProperty key={5} minutesNeeded={5}>
                <FaBus className="text-base lg:text-xl" />
              </DistanceFromProperty>
              <DistanceFromProperty key={4} minutesNeeded={4}>
                <FaUmbrellaBeach className="text-base lg:text-xl" />
              </DistanceFromProperty>
              <DistanceFromProperty key={3} minutesNeeded={3}>
                <FaHospitalSymbol className="text-sm lg:text-xl" />
              </DistanceFromProperty>
              <DistanceFromProperty key={2} minutesNeeded={2}>
                <SiMcdonalds className="text-sm lg:text-xl" />
              </DistanceFromProperty> */}
            </div>
            <div className="absolute float-right text-sm italic text-gray-600 -bottom-10 md:bottom-10 right-10">
              based on Google map
            </div>
          </div>
        </div>
        <div className="col-span-2 overflow-hidden mt-14 lg:mt-0">
          <div className="flex justify-center content-right">
            <iframe
              title="Google Map for the Cozy & Sweet Homestay Port Dickson's location"
              className="overflow-hidden rounded-lg aspect-square lg:w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1993.048515417508!2d101.85464963425447!3d2.474808281170744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf77fbf9bcc17%3A0x573234c80a0083d7!2sCozy%20%26%20Sweet%20Homestay!5e0!3m2!1sen!2smy!4v1640871664571!5m2!1sen!2smy"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPlace;
