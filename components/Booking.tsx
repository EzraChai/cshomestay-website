import Link from "next/link";

import AirBnb from "../public/Airbnb.png";
import BookingDotCom from "../public/Booking.com.png";
import Agoda from "../public/Agoda.png";
import Whatsapp from "../public/Whatsapp.png";
import Image from "next/image";

export default function Book() {
  return (
    <div className=" bg-cyan-500">
      <div className="book-now-card py-36 text-primary max-w-[100rem] mx-auto">
        <div className="text-center header">
          <div className="px-10 text-4xl font-extrabold text-white lg:text-6xl lg:tracking-tight">
            Book now.
          </div>
          <div className="mt-2 mb-12 text-xl font-semibold text-center text-zinc-100 lg:text-3xl">
            With your favourite platform.
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[80%] lg:max-w-[60%] mx-auto gap-10 pb-8">
            <Link
              scroll={false}
              rel={"noopener"}
              target={"_blank"}
              href={"https://wa.link/z1sa7g"}
              className="relative overflow-hidden transition bg-white rounded-2xl hover:-translate-y-1"
            >
              <div className="absolute bottom-4 right-4 border-2 border-zinc-800 text-zinc-800 tracking-wider select-none uppercase font-bold text-xs flex justify-center items-center rounded-xl px-2 py-[0.125rem]">
                LOWEST FARE
              </div>
              <div className="items-center justify-center px-10 py-20 ">
                <div className="flex items-center justify-center">
                  <Image
                    placeholder={"blur"}
                    src={Whatsapp}
                    alt="Whatsapp logo"
                  />
                </div>
              </div>
            </Link>
            <Link
              scroll={false}
              rel={"noopener"}
              target={"_blank"}
              href={"https://www.booking.com/Share-vOyRYY"}
              className="overflow-hidden transition bg-white rounded-2xl hover:-translate-y-1"
            >
              <div className="items-center justify-center px-6 py-20 ">
                <div className="flex items-center justify-center mt-1">
                  <Image
                    placeholder={"blur"}
                    src={BookingDotCom}
                    alt="Booking.com logo"
                  />
                </div>
              </div>
            </Link>
            <Link
              scroll={false}
              rel={"noopener"}
              target={"_blank"}
              href={
                "https://www.agoda.com/cozy-sweet-bayview-villa-3-br-2bth-6-beds-8pax/hotel/port-dickson-my.html"
              }
              className="overflow-hidden transition bg-white rounded-2xl hover:-translate-y-1"
            >
              <div className="items-center justify-center px-16 py-20 lg:px-28">
                <div className="flex items-center justify-center">
                  <Image
                    placeholder={"blur"}
                    className="w-auto"
                    src={Agoda}
                    alt="Agoda logo"
                  />
                </div>
              </div>
            </Link>

            <Link
              scroll={false}
              rel={"noopener"}
              target={"_blank"}
              href={"https://www.airbnb.com/rooms/53874417"}
              className="overflow-hidden transition bg-white rounded-2xl hover:-translate-y-1"
            >
              <div className="items-center justify-center px-10 py-20 lg:px-20">
                <div className="flex items-center justify-center">
                  <Image
                    placeholder={"blur"}
                    className="w-auto"
                    src={AirBnb}
                    alt="Airbnb logo"
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
