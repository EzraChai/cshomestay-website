import { gsap } from 'gsap'
import { useEffect } from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const StrategicPlace = () => {

    gsap.registerPlugin(ScrollTrigger)


    useEffect(() => {

        gsap.to(".main-location", {
            css: {display: "block"},
            duration: 0,
            delay: 0.1,
        },)

        gsap.from(".content-right", {
            x: '100px',
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
            scrollTrigger:{
                start: "50% bottom",
                trigger: ".content-right",
                toggleActions: "play pause resume pause",
                markers:true
            }
        })
        gsap.from(".content-left", {
            x: '-100px',
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
            delay: .5,
            scrollTrigger:{
                start: "50% bottom",
                trigger: ".content-left",
                toggleActions: "play pause resume pause",
                markers:true
            }
        })

        gsap.from(".main-content-text",{
            y:'200px',
            ease: "power3.inOut",
            duration: 1,
            delay:1,
            scrollTrigger:{
                trigger: ".content-left",
                start: "50% bottom",
                toggleActions: "play pause resume pause",
                markers:true

            }
        })
    })

    return (
        <div className="main-location hidden mt-[10rem] w-full max-width-[1200px]">
              <div className="grid grid-cols-5 mt-80 mb-20">
                <div className="content-left relative pt-20 px-11 col-span-3 ">
                  <h2 className="text-4xl font-semibold text-gray-600 ">The 
                  <span className="text-gray-800 text-6xl mx-4">strategic</span>
                   homestay in <br className="mb-2" />
                   <div className="">
                       <div className="w-full h-50 overflow-hidden">
                           <div className="main-content-text text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700">Port Dickson</div>
                       </div>
                    </div>
                   .</h2>
                  <p className="text-gray-600 mt-2">
                    - 4 minutes to the beach<br />
                    - 3 minutes to the hospital <br />
                    - 2 minutes to the McDonald&apos;s <br />
                    </p>
                    <div className="absolute bottom-10 right-10 text-gray-400 text-xs float-right">based on Google map</div>
                </div>
                <div className=" col-span-2">
                  <div className="content-right flex justify-center py-10">
                    <iframe className="border-0 mt-6 aspect-video lg:overflow-hidden mx-6 lg:rounded-lg lg:w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1993.048515417508!2d101.85464963425447!3d2.474808281170744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf77fbf9bcc17%3A0x573234c80a0083d7!2sCozy%20%26%20Sweet%20Homestay!5e0!3m2!1sen!2smy!4v1640871664571!5m2!1sen!2smy" allowFullScreen loading="lazy"></iframe>
                  </div>
                </div>
              </div>
            </div>
    )
}
