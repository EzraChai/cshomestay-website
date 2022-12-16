import Head from "next/head";
import Link from "next/link";
import request, { gql } from "graphql-request";

import Reviews from "../components/Reviews";
import StrategicPlace from "../components/StrategicPlace";
import Mission from "../components/Mission";
import Book from "../components/Booking";
import Gallery from "../components/Gallery";
import Waiting from "../components/Waiting";
import Question from "../components/Question";

import { useEffect } from "react";
import gsap from "gsap/dist/gsap";

const END_POINT = process.env.END_POINT;

export default function Home({ data }) {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.to(".big-container", { duration: 0, css: { display: "block" } });
    tl.from(".main-text", { duration: 1, y: 300, ease: "power3.inOut" });
    tl.from(".secondary-text", {
      duration: 1,
      y: 300,
      ease: "power3.inOut",
    });
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
                <div className="secondary-text mt-2 lg:mt-2 text-center text-[0.77rem] md:text-[1.2rem] font-semibold tracking-wide">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Mission />
        <Gallery />
        <StrategicPlace />
        <Question questions={data.questions} />
        <Reviews reviews={data.reviews} />
        <Waiting />
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
      questions {
        question
        answer
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
