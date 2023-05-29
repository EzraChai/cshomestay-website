import Head from "next/head";
import Link from "next/link";
import { gql } from "graphql-request";

import Reviews from "@/components/Reviews";
import StrategicPlace from "@/components/StrategicPlace";
import Mission from "@/components/Mission";
import Book from "@/components/Booking";
import Gallery from "@/components/Gallery";
import Question from "@/components/Question";
import Rooms from "@/components/Rooms";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";
import PlacesToVisit from "@/components/PlacesToVisit";
import Facilities from "@/components/Facilities";

import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { client } from "@/lib/hygraph";

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
          Best place for you to stay when you plan travel to Port Dickson. Cozy and affordable place to stay."
        />
        <meta
          name="keywords"
          content="port dickson,homestay port dickson,homestay,cozy,sweet,cozy and sweet,cozy homestay,best homestay,best homestay port dickson, homestay in port dickson, Port Dickson, cshomestay,cshomestay port dickson, cozy sweet homestay, cozysweet homestay"
        />
        <meta
          property="og:title"
          content="Cozy & Sweet Homestay Port Dickson - A cozy and affordable place to stay"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/zH54RQW/og.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://cshomestay.vercel.app/og-whatsapp.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:description"
          content="Get ready to spent your holiday in Port Dickson and stay with us."
        />
        <meta property="og:url" content="https://cshomestay.vercel.app" />
        <meta
          name="google-site-verification"
          content="SUGhy7TGs0Wx3FzM_6F4BcLxwGq-3oXGYrFoa4ydUhQ"
        />
      </Head>
      <div className="hidden h-full pt-10 pb-10 mx-auto bg-white smooth-scroll big-container">
        <div className="relative overflow-hidden wrapper">
          <div className="mt-20 md:mt-24 lg:mt-32 absolute lg:rounded-2xl overflow-hidden w-[563px] md:w-[1080px] left-0 right-0 mr-auto ml-auto">
            <video autoPlay loop preload={"auto"} aria-hidden muted>
              <source
                src="https://media.graphassets.com/jsoYJFeuRcSlNF66uFf5"
                type="video/webm"
              />
              <source
                src="https://media.graphassets.com/mywVYgpT1C6G9DEMMyZU"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="absolute opacity-70 bg-white w-[563px] md:w-[1080px] h-full left-0 right-0 mr-auto ml-auto"></div>
          <div className="home mt-4 flex items-center h-[50vh] lg:h-[90vh] w-full flex-col">
            <div className="mt-[10rem] lg:mt-[16rem]">
              <div className="w-full overflow-hidden hero-content-line h-100">
                <h1 className="main-text text-center font-extrabold title-font text-[2.8rem] md:text-[5rem] lg:text-[12rem] antialiased">
                  Cozy & Sweet.
                </h1>
              </div>
              <div className="w-full overflow-hidden antialiased hero-content-line text-zinc-800 h-100 title-font">
                <div className="secondary-text mt-2 lg:mt-2 text-center text-[0.77rem] md:text-[1.2rem] font-semibold tracking-wide">
                  {"Homestay in "}
                  <span className="hover:underline decoration-2 underline-offset-2">
                    <Link
                      hrefLang="en"
                      rel="external"
                      href={"https://en.wikipedia.org/wiki/Port_Dickson_(town)"}
                    >
                      {"Port Dickson"}
                    </Link>
                  </span>
                  {", "}
                  <span className="cursor-pointer hover:underline decoration-2 underline-offset-2">
                    <Link
                      hrefLang="en"
                      rel="external"
                      href={"https://en.wikipedia.org/wiki/Negeri_Sembilan"}
                    >
                      {"Negeri Sembilan"}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chat />
      <div className="mt-12 lg:mt-24">
        <Mission />
        <Gallery images={data.images} />
        <Rooms rooms={data.rooms} />
        <StrategicPlace />
        <Facilities facilities={data.facilities} />
        <PlacesToVisit places={data.places} />
        <Question questions={data.questions} />
        <Reviews reviews={data.reviews} />
        <Book />
      </div>
      <Footer />
    </>
  );
}

const getData = async () => {
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
      images(first: 5) {
        id
        title
        image {
          url
          width
          height
        }
      }
      questions {
        question
        answer
      }
      places {
        id
        nameOfThePlace
        tag
        description
        url
        locationLink
        image {
          url
          width
          height
        }
      }
      facilities {
        id
        title
        image {
          url
          width
          height
        }
      }
      rooms {
        image {
          url
          width
          height
        }
        totalNumber
        title
      }
    }
  `;

  return await client.request(query);
};

export const getStaticProps = async () => {
  const data = await getData();
  return {
    props: {
      data,
    },
  };
};
