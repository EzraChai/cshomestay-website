import Head from 'next/head'
import Link from "next/link"
import gsap from "gsap"
import {useEffect,useState} from "react"
import StrategicPlace from '../components/StrategicPlace'
import Reviews from '../components/Reviews'
import request, {gql} from "graphql-request"

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const END_POINT = process.env.END_POINT

export default function Home({data}) {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".big-container", {duration: 0, css: {display: "block"}})
    gsap.from(".main-text",{duration: 2, y:600 ,ease:"power3.inOut"})
    gsap.from(".secondary-text",{duration: 1.5,y:600, delay: .7, ease:"power3.inOut"})
    setLoaded(true)
  },[])

  return (
    <>
      <Head>
        <title>Cozy & Sweet Homestay Port Dickson</title>
        <meta name="description" content="Cozy & Sweet Homestay Port Dickson located in Port Dickson, Negeri Sembilan, Malaysia" />
        <meta name="keywords" content="port dickson,homestay port dickson,homestay,cozy,sweet,cozy and sweet,cozy homestay,best homestay,best homestay port dickson" />
      </Head>
      <div data-scroll-section className=" smooth-scroll big-container h-full hidden bg-zinc-100 mx-auto">
        <div className="wrapper px-1 lg:px-2">
          <div className="home flex items-center h-[40vh] lg:h-[90vh] w-full flex-col">
            <div className="mt-[8rem] lg:mt-[16rem]">
                 <div className="hero-content-line w-full h-100 overflow-hidden">
                  <h1 className='main-text text-center font-extrabold title-font text-[2.8rem] md:text-[5rem] lg:text-[12rem] antialiased'>Cozy & Sweet.</h1>
                </div>
                <div className="hero-content-line w-full text-gray-600 h-100 title-font overflow-hidden antialiased">
                  <p className='secondary-text mt-2 lg:mt-2 text-center text-[0.6rem] md:text-[1rem] font-semibold tracking-widest uppercase'>homestay in <span className='hover:underline decoration-2 underline-offset-2'>
                    <Link hrefLang="en" rel="external" href={"https://en.wikipedia.org/wiki/Port_Dickson_(town)"}>Port Dickson</Link>
                    </span>, 
                    <span className='hover:underline decoration-2 underline-offset-2 cursor-pointer'>
                        <Link hrefLang="en" rel="external" href={"https://en.wikipedia.org/wiki/Negeri_Sembilan"} passHref>
                            <span> Negeri Sembilan</span> 
                        </Link>
                    </span>
                  </p>
                </div>
              </div>
              {true && <>
              <StrategicPlace />
              <Reviews reviews={data.reviews}/>
              </>}
          </div>
      </div>
      </div>
    </>
  )
}




const getReviews = async() => {
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
  `
  
  return await request(END_POINT, query);
}



export const getServerSideProps = async () => {
  const data = await getReviews()
  return {
    props: {
      data
    }
  }
}