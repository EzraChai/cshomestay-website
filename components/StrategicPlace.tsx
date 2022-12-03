import { FaUmbrellaBeach, FaBus, FaHospitalSymbol } from "react-icons/fa";
import { SiMcdonalds } from "react-icons/si";

const StrategicPlace = () => {
  return (
    <div className="main-location mx-auto container mt-12 w-full text-center md:text-left max-width-[100rem]">
      <div className="md:grid md:grid-cols-4 lg:grid-cols-5 lg:mb-40 md:px-10 lg:px-10">
        <div className="content-left relative col-span-2 lg:col-span-3 flex items-center justify-center ">
          <div className="text-center">
            <h2 className="text-lg lg:text-4xl font-semibold text-gray-600 ">
              The
              <span className="text-maximumBlue text-2xl lg:tracking-tight font-extrabold lg:text-6xl mx-1 lg:mx-4">
                strategic
              </span>
              homestay in <br className="mb-2" />
              <div className="w-full h-50 overflow-hidden">
                <div className="main-content-text mt-1 title-font font-extrabold text-[2.6rem] mb-2 md:mb-0 md:text-5xl lg:text-8xl text-zinc-800">
                  Port Dickson
                </div>
              </div>
            </h2>
            <p className="text-zinc-600 text-left flex flex-wrap justify-around tracking-wide font-semibold text-[0.9rem] mt-4 lg:mt-10 w-[60%] md:w-[70%] lg:w-[80%] mx-auto">
              <div className=" flex justify-around items-center  bg-maximumBlue/20  rounded-full p-2 gap-2 hover:border-maximumBlue/30 hover:bg-maximumBlue/10 border-2 border-transparent transition ">
                <FaBus className="text-base lg:text-xl" />
                <div className="text-sm lg:text-base font-bold">5 minutes</div>
              </div>
              <div className=" flex justify-around items-center bg-maximumBlue/20  rounded-full p-2 gap-2 hover:border-maximumBlue/30 hover:bg-maximumBlue/10 border-2 border-transparent transition ">
                <FaUmbrellaBeach className="text-base lg:text-xl" />
                <div className="text-sm lg:text-base font-bold">4 minutes</div>
              </div>
              <div className=" flex justify-around items-center bg-maximumBlue/20  rounded-full p-2 gap-2 mt-3 lg:mt-0 hover:border-maximumBlue/30 hover:bg-maximumBlue/10 border-2 border-transparent transition ">
                <FaHospitalSymbol className="text-base lg:text-xl" />
                <div className="text-sm lg:text-base font-bold">3 minutes</div>
              </div>
              <div className=" flex justify-around items-center bg-maximumBlue/20  rounded-full p-2 gap-2 mt-3 lg:mt-0 hover:border-maximumBlue/30 hover:bg-maximumBlue/10 border-2 border-transparent transition ">
                <SiMcdonalds className="text-sm lg:text-xl" />
                <div className="text-sm lg:text-base font-bold">2 minutes</div>
              </div>
            </p>
            <div className="absolute -bottom-10 md:bottom-10 right-10 text-gray-400 text-xs float-right">
              based on Google map
            </div>
          </div>
        </div>
        <div className="col-span-2 overflow-hidden">
          <div className="content-right flex justify-center py-10">
            <iframe
              className="border-0 mt-6 aspect-square lg:overflow-hidden mx-6 lg:rounded-lg lg:w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1993.048515417508!2d101.85464963425447!3d2.474808281170744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf77fbf9bcc17%3A0x573234c80a0083d7!2sCozy%20%26%20Sweet%20Homestay!5e0!3m2!1sen!2smy!4v1640871664571!5m2!1sen!2smy"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPlace;
