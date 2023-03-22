import Head from "next/head";
import Link from "next/link";
import { GraphQLClient, gql } from "graphql-request";

import Reviews from "../components/Reviews";
import StrategicPlace from "../components/StrategicPlace";
import Mission from "../components/Mission";
import Book from "../components/Booking";
import Gallery from "../components/Gallery";
import Question from "../components/Question";
import Bed from "../components/Bed";
import Footer from "../components/Footer"
import Chat from "../components/Chat"

import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import PlacesToVisit from "../components/PlacesToVisit";
import Facilities from "@/components/Facilities";

const END_POINT = process.env.END_POINT;
const HYGRAPH_PERMANENT_TOKEN = process.env.HYGRAPH_PERMANENT_TOKEN;

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
        <meta property="og:title" content="Cozy & Sweet Homestay Port Dickson - A cozy and affordable place to stay"></meta>
        <meta
          property="og:image"
          content="https://cshomestay.vercel.app/api/image/og"
        />
        <meta
          property="og:description"
          content="Get ready to spent your holiday in Port Dickson and stay with us."
        />
        <meta
          property="og:url"
          content="https://cshomestay.vercel.app"
        />
      </Head>
      <div className="pt-10 smooth-scroll big-container hidden h-full bg-white mx-auto">
        <div className="relative wrapper">
          <div className="mt-32 absolute rounded-2xl overflow-hidden w-[1080px] left-0 right-0 mr-auto ml-auto">
            <video autoPlay loop aria-hidden muted>
              <source src="https://media.graphassets.com/mywVYgpT1C6G9DEMMyZU" type="video/mp4" />
            </video>
          </div>

          <div className="absolute opacity-70 bg-white w-[1080px] h-full left-0 right-0 mr-auto ml-auto"></div>
          <div className="home flex items-center h-[50vh] lg:h-[90vh] w-full flex-col">
            <div className="mt-[8rem] lg:mt-[16rem]">
              <div className="hero-content-line w-full h-100 overflow-hidden">
                <h1 className="main-text text-center font-extrabold title-font text-[2.8rem] md:text-[5rem] lg:text-[12rem] antialiased">
                  Cozy & Sweet.
                </h1>
              </div>
              <div className="hero-content-line w-full text-zinc-800 h-100 title-font overflow-hidden antialiased">
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
                      <span>Negeri Sembilan</span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chat />
      <div className="mt-24">
        <Mission />
        <Gallery images={data.images} />
        <Bed />
        <Facilities facilities={data.facilities} />
        <StrategicPlace />
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
  const client = new GraphQLClient(END_POINT, {
    headers: {
      Authorization: `Bearer ${HYGRAPH_PERMANENT_TOKEN}`,
    },
  });
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
        image{
          url
          width
          height
        }
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
