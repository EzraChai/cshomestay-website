import '../styles/globals.css'
import {Layout} from "../components/Layout"
import {useRef} from "react"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const containerRef = useRef(null)
  const { route } = useRouter()

  return (
    <LocomotiveScrollProvider
    options={{smooth: true,}}
    watch={[route]}
    containerRef={containerRef}

    >
      <Layout>
        <main data-scroll-container>
          <Component  {...pageProps} />
        </main>
      </Layout>
    </LocomotiveScrollProvider>
  )
}

export default MyApp
