import Image from "next/image";
import { photos } from "./photos";

export const PhoneGallery = () => {
  return (
    <div className="px-6 container-gallery hidden">
      <div className="pt-8 ml-2 ">
        <div className="w-full h-[100px] overflow-hidden">
          <div className="text text-5xl font-bold">Gallery.</div>
        </div>
      </div>
    </div>
  );
};
