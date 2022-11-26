import Link from "next/link";

import AirBnb from "../public/Airbnb.png";
import BookingDotCom from "../public/Booking.com.png";
import Agoda from "../public/Agoda.png";
import Whatsapp from "../public/Whatsapp.png";
import Image from "next/image";

export default function Book() {
  return (
    <div className="bg-maximumBlue">
      <div className="book-now-card py-36 text-primary max-w-[100rem] mx-auto">
        <div className="header text-center">
          <div className=" text-white px-10 text-4xl lg:text-6xl lg:tracking-tight font-extrabold">
            Book now.
          </div>
          <div className=" text-zinc-100 text-xl lg:text-3xl font-semibold text-center mt-2 mb-12">
            With your favourite platform.
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[80%] lg:max-w-[60%] mx-auto gap-10 pb-8">
            <Link
              target={"_blank"}
              href={"https://www.airbnb.com/rooms/53874417"}
              className="bg-white rounded-2xl"
            >
              <div className=" justify-center items-center py-20">
                <div className="flex justify-center items-center">
                  <Image
                    placeholder={"blur"}
                    className="w-auto h-20"
                    src={AirBnb}
                    alt="Airbnb logo"
                  />
                </div>
              </div>
            </Link>
            <Link
              target={"_blank"}
              href={"https://www.booking.com/Share-vOyRYY"}
              className="bg-white rounded-2xl"
            >
              <div className=" justify-center items-center py-20 px-6">
                <div className="flex justify-center items-center mt-1">
                  <Image
                    placeholder={"blur"}
                    src={BookingDotCom}
                    alt="Booking.com logo"
                  />
                </div>
              </div>
            </Link>
            <Link
              target={"_blank"}
              href={
                "https://www.agoda.com/cozy-sweet-bayview-villa-3-br-2bth-6-beds-8pax/hotel/port-dickson-my.html"
              }
              className="bg-white rounded-2xl"
            >
              <div className=" justify-center items-center py-20">
                <div className="flex justify-center items-center">
                  <Image
                    placeholder={"blur"}
                    className="w-auto h-20"
                    src={Agoda}
                    alt="Agoda logo"
                  />
                </div>
              </div>
            </Link>
            <Link
              target={"_blank"}
              href={"https://wa.link/z1sa7g"}
              className="bg-white rounded-2xl"
            >
              <div className=" justify-center items-center p-20">
                <div className="flex justify-center items-center">
                  <Image
                    placeholder={"blur"}
                    src={Whatsapp}
                    alt="Whatsapp logo"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
