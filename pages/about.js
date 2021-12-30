import Head from 'next/head'
import { useEffect } from 'react'
import gsap from "gsap"
import {MdShower,MdKingBed,MdFreeBreakfast} from "react-icons/md"
import {SiMcdonalds} from 'react-icons/si'
import {FaYoutube} from "react-icons/fa"
import {MdPool,MdSportsTennis} from "react-icons/md"
import {GiKidSlide,GiBarbecue} from "react-icons/gi"
// import {IoWaterSharp} from "react-icons/io"

export default function Solution() {

  useEffect(() => {
    gsap.to(".container", {duration: 0, css: {display: "block"}})
  },[])

  return (
    <div>
        <Head>
            <title>About</title>
        </Head>
        <div className="container hidden bg-zinc-100 mx-auto py-6">
          <div className="wrapper px-2">
            <div className="home mt-6">
              <h1 className="">
                <div className="text-6xl px-2 md:px-10 font-bold tracking-wide ">
                  About.
                </div>
              </h1>
              <div className="bg-white md:mt-10 mt-4 p-4 md:p-6 mx-1 md:mx-10 rounded-3xl">
                  <h3 className="text-xl font-semibold underline decoration-2">About this space</h3>
                  <p className="mt-2 text-gray-600">
                    Spacious (1100 ft&sup2;), corner-lot apartment <br />
                    - 3 bedrooms <MdKingBed className="inline-flex"/>
                    <br /> - 2 bathrooms <MdShower className="inline-flex"/>. <br className="mb-2"/>

                    Nice Bayview scene and minutes away from beautiful beaches (less than 5 mins drive to the nearest beach). <br />
                    It is a strategic place which is very near (short walking distance) to convenient stores (eg. Mr. DIY, Eco-shop), supermarkets, fast food shop eg <br /> ( <SiMcdonalds  className="inline-flex"/> McDonald&apos;s ) and restaurants. 
                    <div className="flex justify-center">
                      <iframe className="border-0 mt-4 aspect-square" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1097.2301202688734!2d101.85528845136899!3d2.474516545902193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf73adfc38a09%3A0x3aec72ca66cbc884!2sBayView%20Villas%20Condominium!5e0!3m2!1sen!2smy!4v1640853449969!5m2!1sen!2smy" allowFullScreen loading="lazy"></iframe>
                    </div>
                    <br/>
                    <MdFreeBreakfast className="inline-flex mr-1"/>Relax with the whole family at this peaceful place to stay.😊</p>
              </div>
              <div className="bg-white mt-6 md:mt-10 p-4 md:p-6 mx-1 md:mx-10 rounded-3xl">
                  <h3 className="text-xl font-semibold underline decoration-2">The space</h3>
                  <p className="mt-2 text-gray-600 ">
                    The apartment is equipped with: <br className="mb-2"/>
                    - Air conditioners<br />
                    - Smart TV (Youtube <FaYoutube className="inline-flex"/>)  <br />
                    - Water dispenser <br />
                    - Kitchen (including utensils) <br />
                    - Washing machine <br />
                    - Bathrooms with water heater  <br className="mb-2"/>

                    There are 3 bedrooms which include: <br className="mb-2"/>
                    - 1 king-size bed <br />
                    - 1 queen-size bed <br />
                    - 2 single beds  <br />
                    - 2 mattresses <br />
                    - fresh towels <br />
                    - toiletries <br className="mb-2" />
                    It is perfect for families with kids, big groups and couples as it is sweet and cozy.😊
                  </p>
              </div>
              <div className="bg-white mt-6 md:mt-10 mb-[15rem] p-4 md:p-6 mx-1 md:mx-10 rounded-3xl">
                  <h3 className="text-xl font-semibold underline decoration-2">Guest access</h3>
                  <p className="mt-2 text-gray-600 ">
                    - Swimming pools <MdPool className="inline-flex"/><br />
                    - Kids playground <GiKidSlide className="inline-flex"/> <br />
                    - Tennis court  <MdSportsTennis className="inline-flex"/> <br />
                    - BBQ pits <GiBarbecue className="inline-flex"/>(available for rental upon request) 
                  </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}