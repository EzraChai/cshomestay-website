import { FiImage } from "react-icons/fi";
import { BsInfoCircleFill } from "react-icons/bs"
import Link from "next/link";
import { LargeImageWithModal, SmallImageWithModal } from "./ImageWithModal";

const Gallery = ({ images }: any) => {
  return (
    <>
      <div className="relative mt-24 pb-6 grid max-w-7xl md:max-w-4xl lg:max-w-7xl md:grid-cols-4 lg:grid-cols-8 grid-rows-8 gap-2 lg:gap-5 mx-auto px-4 md:px-24 lg:px-0">
        {images.map((image, index) => {
          if (index === 0)
            return <LargeImageWithModal key={image.id} image={image} />;

          return <SmallImageWithModal key={image.id} image={image} />;
        })}

        <div className="hidden lg:block bottom-12 right-3 lg:w-[10%] lg:h-[5%] z-[1] lg:absolute ">
          <Link
            scroll={false}
            href={"/pictures"}
            className="group bg-white hover:bg-black transition-all rounded-xl flex justify-evenly items-center"
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
          scroll={false}
          href={"/pictures"}
          className="group lg:hidden w-[40%] md:w-[20%] border-2 border-zinc-700 bg-white hover:bg-black transition-all rounded-xl flex justify-evenly items-center"
        >
          <FiImage className="group-hover:text-white transition" />
          <div className="text-black font-semibold text-xl py-2 group-hover:text-white transition">
            All Photos
          </div>
        </Link>
      </div>
      <div className="mt-6 text-zinc-800 text-sm flex justify-center items-center"><BsInfoCircleFill className="mr-2" /> Click on the image to enlarge it.</div>
    </>
  );
};

export default Gallery;
