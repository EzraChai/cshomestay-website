import Head from 'next/head'
import { useEffect } from 'react'
import gsap from "gsap"

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
                <div className="text-6xl font-bold tracking-wide">
                  About.
                </div>
              </h1>
              <div className="bg-white mt-4 px-4 py-2 rounded-3xl">
                 <p>
                <h3 className="mt-2 text-xl font-semibold underline decoration-2">About this space</h3>
                <p className="mt-2 text-gray-600">
Spacious (1100 ft&sup2;), corner-lot apartment with 3 bedrooms (fully furnished with air conditioners) and 2 bathrooms. <br className="mb-2"/>
It has a nice Bayview scene and it&apos;s only just minutes away from beautiful beaches (less than 5 mins drive to the nearest beach). It is a strategic place which is very near (short walking distance) to convenient stores (eg. Mr. DIY, Eco-shop), supermarkets, fast food shop eg McD and restaurants. 
<div className="flex justify-center">
  <iframe className="border-0 mt-4 aspect-square" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1097.2301202688734!2d101.85528845136899!3d2.474516545902193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf73adfc38a09%3A0x3aec72ca66cbc884!2sBayView%20Villas%20Condominium!5e0!3m2!1sen!2smy!4v1640853449969!5m2!1sen!2smy" allowFullScreen loading="lazy"></iframe>
</div>
<br/>
Relax with the whole family at this peaceful place to stay :D</p>
              </p>
              </div>
             
            </div>
          </div>
        </div>
    </div>
  )
}