import Image from "next/image"
import { photos } from "./photos"
import {useEffect,useRef} from "react"
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export const PhoneGallery = () => {

    gsap.registerPlugin(ScrollTrigger);

    const gallery = useRef(null)

    useEffect(() => {

        if(gallery){

            gsap.to(".container-gallery",{
                duration: 0,
                css:{
                    display:"block"
                }
            })

            gsap.from(".text",{
                y:"-200px",
                duration:"1",
                delay: .5
            })

            for (let index = 0; index < gallery.children.length; index++) {
                 gsap.from(gallery.children[index], {
                scrollTrigger:{
                    trigger: gallery.children[index],
                    start: "top 65%",
                    // toggleActions: "play pause resume pause"
                },
                duration: 1.3,
                x: "-600px",
                ease: "power3.inOut"
            })
            }
        
            //     gsap.from(`.photo${2}`, {
            //     scrollTrigger:{
            //         trigger: `.photo${1}`,
            //         start: "top 65%",
            //         // toggleActions: "play pause resume pause"
            //     },
            //     duration: 1.3,
            //     x: "-600px",
            //     ease: "power3.inOut"
            // })

            // for(let i = 0; i < photos.length; i++) {
            //     gsap.from(`.photo${i}`, {
            //     scrollTrigger:{
            //         trigger: `.photo${i}`,
            //         start: "top 65%",
            //         // toggleActions: "play pause resume pause"
            //     },
            //     duration: 1.3,
            //     x: "-600px",
            //     ease: "power3.inOut"
            // })
            // }
        }
    }
    ,[])

    return (
        <div className="px-6 container-gallery hidden">
            <div className="pt-8 ml-2 ">
                <div className="w-full h-[100px] overflow-hidden">
                    <div className="text text-5xl font-bold">Gallery.</div>
                </div>
            </div>
            <div ref={(el) => gallery = el} className="">
                {photos.map((picture, i) => (
                <div key={i} className={`photo${i} bg-slate-100 rounded-sm mb-8 overflow-hidden pb-6 p-3 shadow-lg`}>
                    <Image src={picture.src} alt={picture.title} priority/>
                    <div className="title mt-1 cursive font-semibold ml-2 tracking-wider text-xl">
                        {picture.title}
                    </div>
                </div>
            ))}
            </div>
            
        </div>
    )
}
