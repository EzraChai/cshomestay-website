import LivingRoom from "./../public/living-room.jpg";
import LivingRoom2 from "./../public/living-room.webp";
import DiningRoom from "./../public/dining.webp";
import MainBedroom from "./../public/main-bedroom.webp";
import SecondaryBedroom from "./../public/secondary-bedroom.webp";
import { FiImage } from "react-icons/fi";
import Link from "next/link";
import type { FC } from "react";
import { LargeImageWithModal, SmallImageWithModal } from "./ImageWithModal";

const Gallery: FC = () => {
  return (
    <>
      <div className="relative mt-24 pb-6 grid max-w-7xl md:max-w-4xl lg:max-w-7xl md:grid-cols-4 lg:grid-cols-8 grid-rows-8 gap-2 lg:gap-5 mx-auto px-4 md:px-24 lg:px-0">
        <LargeImageWithModal image={LivingRoom} />
        <SmallImageWithModal image={LivingRoom2} />
        <SmallImageWithModal image={DiningRoom} />
        <SmallImageWithModal image={MainBedroom} />
        <SmallImageWithModal image={SecondaryBedroom} />

        <div className="hidden lg:block bottom-12 right-3 lg:w-[10%] lg:h-[5%] z-[1] lg:absolute ">
          <Link
            href={"/pictures"}
            className="group   bg-white hover:bg-black transition-all rounded-xl flex justify-evenly items-center"
          >
            <FiImage className="group-hover:text-white transition" />
            <div className="text-black font-semibold text-xl py-2 group-hover:text-white transition ">
              All Photos
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Link
          href={"/pictures"}
          className="group lg:hidden w-[40%] border-2 border-zinc-700 bg-white hover:bg-black transition-all rounded-xl flex justify-evenly items-center"
        >
          <FiImage className="group-hover:text-white transition" />
          <div className="text-black font-semibold text-xl py-2 group-hover:text-white transition ">
            All Photos
          </div>
        </Link>
      </div>
    </>
  );
};

export default Gallery;
