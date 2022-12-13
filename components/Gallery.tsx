import LivingRoom from "./../public/living-room.jpg";
import LivingRoom2 from "./../public/living-room.webp";
import DiningRoom from "./../public/dining.webp";
import MainBedroom from "./../public/main-bedroom.webp";
import SecondaryBedroom from "./../public/secondary-bedroom.webp";
import Image from "next/image";
import { FiImage } from "react-icons/fi";
import Link from "next/link";
import type { FC } from "react";

const Gallery: FC = () => {
  return (
    <>
      <div className="mt-24 pb-6 grid max-w-7xl md:max-w-4xl lg:max-w-7xl md:grid-cols-4 lg:grid-cols-8 grid-rows-8  gap-2 lg:gap-5 mx-auto px-4 md:px-24 lg:px-0">
        <div className=" col-span-4 row-span-4 rounded-xl overflow-hidden relative hover:cursor-pointer">
          <Image
            className="object-cover h-full w-auto"
            src={LivingRoom}
            alt="Living room"
          />
          <div className=" top-0 left-0 w-full h-full absolute flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
        </div>
        <div className=" relative col-span-2  row-span-2 rounded-xl overflow-hidden md:h-72 h-[10rem] w-auto hover:cursor-pointer">
          <Image
            className="object-cover h-full w-auto"
            src={LivingRoom2}
            alt="Living room"
          />
          <div className=" top-0 left-0 w-full h-full absolute flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
        </div>
        <div className=" relative col-span-2  row-span-2 rounded-xl overflow-hidden md:h-72 w-auto h-[10rem] hover:cursor-pointer">
          <Image
            className="object-cover h-full w-auto"
            src={DiningRoom}
            alt="Living room"
          />
          <div className=" top-0 left-0 w-full h-full absolute flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
        </div>
        <div className=" relative col-span-2  row-span-2 rounded-xl overflow-hidden md:h-72 w-auto  h-[10rem] hover:cursor-pointer">
          <Image
            className="object-cover h-full w-auto"
            src={MainBedroom}
            alt="Living room"
          />
          <div className=" top-0 left-0 w-full h-full absolute flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
        </div>
        <div className=" relative col-span-2  row-span-2 rounded-xl overflow-hidden md:h-72 w-auto h-[10rem] hover:cursor-pointer">
          <Image
            className="object-cover h-full w-auto"
            src={SecondaryBedroom}
            alt="Living room"
          />
          <Link
            href={"/pictures"}
            className="group bottom-4 right-5 lg:w-[42%] lg:h-[12%] z-[1] bg-white hover:bg-black transition-all rounded-xl  lg:absolute flex justify-evenly items-center"
          >
            <FiImage className="group-hover:text-white transition" />
            <div className="text-black font-semibold text-xl py-2 group-hover:text-white transition ">
              All Photos
            </div>
          </Link>

          <div className=" top-0 left-0 w-full h-full absolute flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
        </div>
      </div>
      <Link
        href={"/pictures"}
        className="group lg:hidden w-[40%] md:w-[18%] mx-auto border-2 border-zinc-700 bg-white hover:bg-black transition-all rounded-xl flex justify-evenly items-center"
      >
        <FiImage className="group-hover:text-white transition" />
        <div className="text-black font-semibold text-xl py-2 group-hover:text-white transition ">
          All Photos
        </div>
      </Link>
    </>
  );
};

export default Gallery;
