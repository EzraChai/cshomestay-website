import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import {useEffect} from "react"
import { StrategicPlace } from '../components/StrategicPlace'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

import flag from "../public/Flag_of_Negeri_Sembilan.svg"


export default function Home() {

  const { scroll } = useLocomotiveScroll()
  let timeline = gsap.timeline()

  useEffect(() => {
    timeline.to(".container", {duration: 0, css: {display: "block"}})
    .from(".main-text",{duration: 2, y:600, delay: 1, ease:"power3.inOut"},"end")
    .from(".secondary-text",{duration: 1.5,y:600, delay: 2, ease:"power3.inOut"},"end");
  },[])

  return (
    <div data-scroll-section>
      <Head>
        <title>Cozy & Sweet Homestay Port Dickson</title>
        <meta name="description" content="" />
        <meta name="keywords" content="port dickson,homestay port dickson,homestay,cozy,sweet,cozy and sweet,cozy homestay,best homestay,best homestay port dickson" />
      </Head>
      <div className="container hidden bg-zinc-100 mx-auto py-6">
        <div className="wrapper px-2">
          <div className="home flex items-center h-[90vh] w-full flex-col">
            <div className="mt-[14rem] md:mt-[16rem]">
                <div className="hero-content-line w-full h-100 overflow-hidden">
                  <h1 className='main-text text-center font-bold text-[3rem] md:text-[6rem] lg:text-[13rem] antialiased'>Cozy & Sweet.</h1>
                </div>
                <div className="hero-content-line w-full h-100 overflow-hidden antialiased">
                  <p className='secondary-text mt-2 lg:mt-2 text-center text-[0.6rem] md:text-[1rem] font-semibold tracking-widest uppercase'>homestay in <span className='hover:underline decoration-2 underline-offset-2	'>
                    <Link hrefLang="en" rel="external" href={"https://en.wikipedia.org/wiki/Port_Dickson_(town)"}>Port Dickson</Link>
                    </span>,
                    <span className='hover:underline decoration-2 underline-offset-2 cursor-pointer'>
                        <Link hrefLang="en" rel="external" href={"https://en.wikipedia.org/wiki/Negeri_Sembilan"} passHref>
                          <span>
                            <span className='ml-1 rounded-sm overflow-hidden'>
                              <Image src={flag} width={24} height={12} priority alt="Flag of Negeri Sembilan, Malaysia"></Image>
                            </span> Negeri Sembilan
                          </span>
                        </Link>
                    </span>
                    </p>
                </div>
              </div>
            {/* <StrategicPlace /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
