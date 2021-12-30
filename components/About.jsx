import {MdShower,MdKingBed,MdFreeBreakfast} from "react-icons/md"
import {SiMcdonalds} from 'react-icons/si'
import {FaYoutube} from "react-icons/fa"
import {MdPool,MdSportsTennis} from "react-icons/md"
import {GiKidSlide,GiBarbecue} from "react-icons/gi"

import gsap from "gsap"
import { useEffect } from "react"



export const About = () => {

    useEffect(() => {
        gsap.to(".main-box",{duration:0, css: {display: "block"}})
        gsap.from(".box1-about",{
            x:-1500, 
            duration: 1.5,
            opacity: 0,
            delay: .5,
            ease: "power3.inOut"
        })
        gsap.from(".box2-about",{
            x:1500,
            duration: 1.5,
            opacity: 0,
            delay: .8,
            ease: "power3.inOut"
        })
        gsap.from(".box3-about",{
            x:-1500, 
            duration: 1.5,
            opacity: 0,
            delay: 1.1,
            ease: "power3.inOut"
        },.1)
    })

    return (
        <div className="main-box hidden">
            <h1 className="">
                <div className="text-6xl px-2 pt-2 md:pt-0 md:px-10 lg:px-6 font-bold tracking-wide print:hidden">
                  About.
                </div>
              </h1>
              <div className="box1-about bg-white md:mt-10 print:m-0 mt-4 p-4 md:p-6 mx-1 md:mx-10 lg:max-w-[1200px] lg:mx-auto rounded-3xl">
                  <h3 className="text-xl lg:text-2xl font-semibold underline decoration-2">About this space</h3>
                  <p className="mt-2 lg:text-lg text-gray-600">
                    Spacious (1100 ft&sup2;), corner-lot apartment <br />
                    - 3 bedrooms <MdKingBed className="inline-flex"/>
                    <br /> - 2 bathrooms <MdShower className="inline-flex"/>. <br className="mb-2"/>

                    Nice Bayview scene and minutes away from beautiful beaches (less than 5 mins drive to the nearest beach). <br />
                    It is a strategic place which is very near (short walking distance) to convenient stores (eg. Mr. DIY, Eco-shop), supermarkets, fast food shop eg <br /> ( <SiMcdonalds  className="inline-flex"/> McDonald&apos;s ) and restaurants. 
            
                    <br/>
                    <MdFreeBreakfast className="inline-flex mr-1"/>Relax with the whole family at this peaceful place to stay.😊</p>
              </div>
              <div className="box2-about bg-white mt-6 md:mt-10 p-4 md:p-6 mx-1 md:mx-10 lg:max-w-[1200px] lg:mx-auto rounded-3xl">
                  <h3 className="text-xl lg:text-2xl font-semibold underline decoration-2">The space</h3>
                  <p className="mt-2 lg:text-lg text-gray-600 ">
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
              <div className="box3-about bg-white mt-6 md:mt-10 p-4 md:p-6 mx-1 lg:max-w-[1200px] lg:mx-auto md:mx-10 rounded-3xl">
                  <h3 className="text-xl lg:text-2xl font-semibold underline decoration-2">Guest access</h3>
                  <p className="mt-2 lg:text-lg text-gray-600 ">
                    - Swimming pools <MdPool className="inline-flex"/><br />
                    - Kids playground <GiKidSlide className="inline-flex"/> <br />
                    - Tennis court  <MdSportsTennis className="inline-flex"/> <br />
                    - BBQ pits <GiBarbecue className="inline-flex"/>(available for rental upon request) 
                  </p>
              </div>
        </div>
    )
}
