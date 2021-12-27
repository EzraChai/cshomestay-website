import Head from 'next/head'
import {CarouselGallery} from "../components/CarouselGallery"
import {PhoneGallery} from "../components/PhoneGallery"

export default function Pictures() {

  return (
    <div>
        <Head>
            <title>Pictures</title>
        </Head>
        <div className="container w-full h-full bg-yellow-50 mx-auto pt-6 pb-[7rem]">

          <div className="hidden md:block">
              <CarouselGallery/>
          </div>
          <div className="md:hidden">
            <PhoneGallery/>
          </div>
        </div>
    </div>
  )
}
