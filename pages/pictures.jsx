import Head from 'next/head'
import {CarouselGallery} from "../components/CarouselGallery"

export default function Pictures() {

  return (
    <div>
        <Head>
            <title>Pictures</title>
        </Head>
        <div>
            <CarouselGallery/>
        </div>
    </div>
  )
}
