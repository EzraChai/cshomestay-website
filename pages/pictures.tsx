import Head from "next/head";
import { PhotoInterface, photos } from "../components/photos";
import Image from "next/image";

export default function Pictures() {
  return (
    <div className=" bg-pinkLavender/40">
      <Head>
        <title>Pictures</title>
      </Head>
      <div className="pt-32 pb-12 w-full h-full max-w-5xl mx-auto p-5 md:p-10">
        <div className="grid grid-cols-2 gap-2 md:gap-5">
          {photos.map((photo: PhotoInterface, index) => {
            return index % 3 == 0 ? (
              <div
                key={index}
                className=" col-span-2 rounded-xl overflow-hidden"
              >
                <Image
                  className="object-cover h-auto w-full"
                  src={photo.src}
                  alt={photo.title}
                />
              </div>
            ) : (
              <div key={index} className=" rounded-xl overflow-hidden">
                <Image
                  className="object-cover h-auto w-full"
                  src={photo.src}
                  alt={photo.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
