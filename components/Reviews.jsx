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
            scrollTrigger:{
                start: "center bottom",
                trigger: ".reviews-location",
                toggleActions: "play pause play pause",
            }
        })    
  })

  return (
    <div className="reviews-location hidden lg:mt-8 lg:grid lg:grid-cols-3 p-8 lg:p-0 lg:gap-10 pb-28">
    {reviews.map((review,index) => (
     <Review key={index} review={review}/>
    ))} 
    </div>
  )
}



export default Reviews