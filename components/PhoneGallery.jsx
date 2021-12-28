import Image from "next/image"
import { photos } from "./photos"
import {useEffect} from "react"
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export const PhoneGallery = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        gsap.from(".text",{
            y:"-200px",
            duration:"1",
            delay: .5
        })

        gsap.to(".container-gallery",{
            duration: 0,
            css:{
                display:"block"
            }
        })
        for(let i = 0; i < photos.length; i++) {
            gsap.from(`.photo${i}`, {
            scrollTrigger:{
                trigger: `.photo${i}`,
                start: "top 50%",
                toggleActions: "play pause resume pause"
            },
            duration: 1.3,
            x: "-600px",
            ease: "power3.inOut"
        })
        }
        
    },[])


    return (
        <div className="px-6 container-gallery hidden">
            <div className="pt-8 ml-2 ">
                <div className="w-full h-[100px] overflow-hidden">
                    <div className="text text-5xl font-bold">Gallery.</div>
                </div>
            </div>
            {photos.map((picture, i) => (
                <div key={i} className={`photo${i} bg-slate-100 rounded-sm mb-8 overflow-hidden pb-6 p-3 shadow-lg`}>
                    <Image src={picture.src} alt={picture.title}/>
                    <div className="title mt-1 cursive font-semibold ml-2 tracking-wider text-xl">
                        {picture.title}
                    </div>
                </div>
            ))}
        </div>
    )
}
