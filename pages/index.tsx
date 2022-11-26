import Head from "next/head";
import Link from "next/link";
import StrategicPlace from "../components/StrategicPlace";
import Reviews from "../components/Reviews";
import request, { gql } from "graphql-request";
import Mission from "../components/Mission";
import Book from "../components/Booking";

const END_POINT = process.env.END_POINT;

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Cozy & Sweet Homestay Port Dickson</title>
        <meta
          name="description"
          content="Cozy & Sweet Homestay Port Dickson located in Port Dickson, Negeri Sembilan, Malaysia"
        />
        <meta
          name="keywords"
          content="port dickson,homestay port dickson,homestay,cozy,sweet,cozy and sweet,cozy homestay,best homestay,best homestay port dickson, homestay in port dickson, Port Dickson"
        />
      </Head>
      <div className=" smooth-scroll big-container h-full bg-zinc-100 pb-10 mx-auto">
        <div className="wrapper px-1 lg:px-2">
          <div className="home flex items-center h-[40vh] lg:h-[90vh] w-full flex-col">
            <div className="mt-[8rem] lg:mt-[16rem]">
              <div className="hero-content-line w-full h-100 overflow-hidden">
                <h1 className="main-text text-center font-extrabold title-font text-[2.8rem] md:text-[5rem] lg:text-[12rem] antialiased">
                  Cozy & Sweet.
                </h1>
              </div>
              <div className="hero-content-line w-full text-gray-600 h-100 title-font overflow-hidden antialiased">
                <p className="primary-text mt-2 lg:mt-2 text-center text-[0.88rem] md:text-[1.2rem] font-semibold tracking-wide">
                  Comfortable Homestay in{" "}
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
            <div className="mt-24 lg:mt-72">
              <Mission />
              <StrategicPlace />
              <Reviews reviews={data.reviews} />

              <Book />
            </div>
          </div>
        </div>
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
