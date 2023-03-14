import Link from "next/link";

import AirBnb from "../public/Airbnb.png";
import BookingDotCom from "../public/Booking.com.png";
import Agoda from "../public/Agoda.png";
import Whatsapp from "../public/Whatsapp.png";
import Image from "next/image";

export default function Book() {
  return (
    <div className="bg-cyan-500">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[80%] lg:max-w-[60%] mx-auto gap-10 pb-8">
            <Link
              rel={"noopener"}
              target={"_blank"}
              href={"https://wa.link/z1sa7g"}
              className="bg-white rounded-2xl relative hover:-translate-y-1 transition overflow-hidden"
            >
              <div className="absolute bottom-4 right-4 border-2 border-zinc-800 text-zinc-800 tracking-wider hover:text-white  select-none uppercase font-bold text-xs flex justify-center items-center rounded-xl px-2 py-[0.125rem]">LOWEST PRICE</div>
              <div className=" justify-center items-center py-20 px-10">
                <div className="flex justify-center items-center">
                  <Image
                    placeholder={"blur"}
                    src={Whatsapp}
                    alt="Whatsapp logo"
                  />
                </div>
              </div>
            </Link>
            <Link
              rel={"noopener"}
              target={"_blank"}
              href={"https://www.booking.com/Share-vOyRYY"}
              className="bg-white rounded-2xl hover:-translate-y-1 transition overflow-hidden"
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
              rel={"noopener"}
              target={"_blank"}
              href={
                "https://www.agoda.com/cozy-sweet-bayview-villa-3-br-2bth-6-beds-8pax/hotel/port-dickson-my.html"
              }
              className="bg-white rounded-2xl hover:-translate-y-1 transition overflow-hidden"
            >
              <div className=" justify-center items-center py-20 px-16 lg:px-28">
                <div className="flex justify-center items-center">
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
              rel={"noopener"}
              target={"_blank"}
              href={"https://www.airbnb.com/rooms/53874417"}
              className=" bg-white rounded-2xl overflow-hidden  hover:-translate-y-1 transition"
            >
              <div className=" justify-center items-center py-20 px-10 lg:px-20">
                <div className="flex justify-center items-center">
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
      </div >
    </div >
  );
}
