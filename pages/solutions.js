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
            <title>Solution</title>
        </Head>
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <p>Feel free to reach us.</p>
            </div>
          </div>
        </div>
    </div>
  )
}