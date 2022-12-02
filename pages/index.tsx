import Head from "next/head";
import Link from "next/link";
import StrategicPlace from "../components/StrategicPlace";
import Reviews from "../components/Reviews";
import request, { gql } from "graphql-request";
import Mission from "../components/Mission";
import Book from "../components/Booking";
import { useEffect, useState } from "react";
import gsap from "gsap/dist/gsap";
import { Gallery } from "../components/Gallery";

const END_POINT = process.env.END_POINT;

export default function Home({ data }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    var tl = gsap.timeline();
    tl.to(".big-container", { duration: 0, css: { display: "block" } });
    tl.from(".main-text", { duration: 1, y: 300, ease: "power3.inOut" });
    tl.from(".secondary-text", {
      duration: 1,
      y: 300,
      ease: "power3.inOut",
    });
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Cozy & Sweet Homestay Port Dickson</title>
        <meta
          name="description"
          content="Cozy & Sweet Homestay Port Dickson located in Port Dickson, Negeri Sembilan, Malaysia.
          Best place for you to stay when you plan travel to Port Dickson."
        />
        <meta
          name="keywords"
          content="port dickson,homestay port dickson,homestay,cozy,sweet,cozy and sweet,cozy homestay,best homestay,best homestay port dickson, homestay in port dickson, Port Dickson, cozy sweet homestay, cozysweet homestay"
        />
        <meta
          property="og:image"
          content="https://cshomestay.vercel.app/api/og"
        />
      </Head>
      <div className="pt-10 smooth-scroll big-container hidden h-full bg-zinc-100 mx-auto">
        <div className="wrapper">
          <div className="home flex items-center h-[50vh] lg:h-[90vh] w-full flex-col">
            <div className="mt-[8rem] lg:mt-[16rem]">
              <div className="hero-content-line w-full h-100 overflow-hidden">
                <h1 className="main-text text-center font-extrabold title-font text-[2.8rem] md:text-[5rem] lg:text-[12rem] antialiased">
                  Cozy & Sweet.
                </h1>
              </div>
              <div className="hero-content-line w-full text-gray-600 h-100 title-font overflow-hidden antialiased">
                <p className="secondary-text mt-2 lg:mt-2 text-center text-[0.88rem] md:text-[1.2rem] font-semibold tracking-wide">
                  Homestay in{" "}
                  <span className="hover:underline decoration-2 underline-offset-2">
                    <Link
                      hrefLang="en"
                      rel="external"
                      href={"https://en.wikipedia.org/wiki/Port_Dickson_(town)"}
                    >
                      Port Dickson
                    </Link>
                  </span>
                  ,
                  <span className="hover:underline decoration-2 underline-offset-2 cursor-pointer">
                    <Link
                      hrefLang="en"
                      rel="external"
                      href={"https://en.wikipedia.org/wiki/Negeri_Sembilan"}
                      passHref
                    >
                      <span> Negeri Sembilan</span>
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Mission />
        <Gallery />
        <StrategicPlace />
        <Reviews reviews={data.reviews} />
        <Book />
      </div>
    </>
  );
}

const getReviews = async () => {
  const query = gql`
    {
      reviews {
        username
        description
        avatar {
          url
          width
          height
        }
        website {
          url
          width
          height
        }
      }
    }
  `;

  return await request(END_POINT, query);
};

export const getServerSideProps = async () => {
  const data = await getReviews();
  return {
    props: {
      data,
    },
  };
};
