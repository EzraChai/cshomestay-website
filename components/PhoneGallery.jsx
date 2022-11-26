import Image from "next/image";
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

            let proxy = { skew: 0 },
                skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
                clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

            ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300);
                // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
                }
            }
            });

            // make the right edge "stick" to the scroll bar. force3D: true improves performance
            gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

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
                <div key={i} className={`photo${i} skewElem bg-slate-100 rounded-sm mb-8 overflow-hidden pb-6 p-3 shadow-lg`}>
                    <Image
                        src={picture.src}
                        alt={picture.title}
                        priority
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                    <div className="title mt-1 cursive font-semibold ml-2 tracking-wider text-xl">
                        {picture.title}
                    </div>
                </div>
            ))}
            </div>
            
        </div>
    );
}
