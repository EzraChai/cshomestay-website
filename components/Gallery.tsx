import { FiImage } from "react-icons/fi";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import { LargeImageWithModal, SmallImageWithModal } from "./ImageWithModal";

const Gallery = ({ images }: any) => {
  return (
    <>
      <div className="relative grid gap-2 px-4 pb-6 mx-auto mt-24 max-w-7xl md:max-w-4xl lg:max-w-7xl md:grid-cols-4 lg:grid-cols-8 grid-rows-8 lg:gap-5 md:px-24 lg:px-0">
        {images.map((image, index) => {
          if (index === 0) {
            return <LargeImageWithModal key={image.id} image={image} />;
          } else {
            return <SmallImageWithModal key={image.id} image={image} />;
          }
        })}

        <div className="hidden lg:block bottom-12 right-3 lg:w-[10%] lg:h-[5%] z-[1] lg:absolute ">
          <Link
            scroll={false}
            href={"/pictures"}
            className="flex items-center transition-all bg-white group hover:bg-black rounded-xl justify-evenly"
          >
            <FiImage className="transition group-hover:text-white" />
            <div className="py-2 text-xl font-semibold text-black transition group-hover:text-white ">
              All Photos
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Link
          scroll={false}
          href={"/pictures"}
          className="group lg:hidden w-[40%] md:w-[20%] border-2 border-zinc-700 bg-white hover:bg-black transition-all rounded-xl flex justify-evenly items-center"
        >
          <FiImage className="transition group-hover:text-white" />
          <div className="py-2 text-xl font-semibold text-black transition group-hover:text-white">
            All Photos
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center mt-6 text-sm text-zinc-800">
        <BsInfoCircleFill className="mr-2" /> Click on the image to enlarge it.
      </div>
    </>
  );
};

export default Gallery;
