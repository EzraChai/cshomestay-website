import Review from "./Review"
import { gsap } from 'gsap'
import { useEffect } from "react"

const Reviews = ({reviews}) => {

  useEffect(() => {
    gsap.to(".reviews-location", {
            css: {display: "grid"},
            duration: 0,
            delay: 0.5,
        })

      gsap.from(".card", {
            y: '200px',
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
            stagger: .2,
            scrollTrigger:{
                start: "center bottom",
                trigger: ".reviews-location",
                toggleActions: "play pause play pause",
            }
        })  
        
    gsap.from(".title", {
            y: '200px',
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
            scrollTrigger:{
                start: "center bottom",
                trigger: ".title",
                toggleActions: "play pause play pause",
            }
        })    
  })

  return (
    <div className="bg-zinc-50 w-screen ">
      <div className="title text-center mt-16 lg:mt-24">
        <p className="text-4xl lg:text-6xl lg:tracking-tight font-extrabold text-zinc-700">
        Honest reviews <br />
        from our guest.
        </p>
      </div>
      <div className="reviews-location mx-auto container hidden lg:mt-20 mt-8 lg:grid lg:grid-cols-3 p-8 lg:p-0 lg:gap-10 pb-28 lg:pb-32">
          {reviews.map((review,index) => (
          <Review key={index} review={review}/>
          ))} 
      </div>
    </div>
    
  )
}



export default Reviews