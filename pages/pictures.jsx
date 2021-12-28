import Head from 'next/head'
import {CarouselGallery} from "../components/CarouselGallery"
import {PhoneGallery} from "../components/PhoneGallery"
import {useState, useEffect} from "react"

export default function Pictures() {


  const [width, setWidth] = useState(0)

  useEffect(() =>{
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
  },[width])

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  return (
    <div>
        <Head>
            <title>Pictures</title>
        </Head>
        <div className="container w-full h-full bg-yellow-50 mx-auto pt-6 pb-[7rem]">

        {width !== 0 && width > 640?
              <CarouselGallery/>:
            <PhoneGallery/>

      }
        </div>
    </div>
  )
}
