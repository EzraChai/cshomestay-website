import '../styles/globals.css'
import {Layout} from "../components/Layout"

function MyApp({ Component, pageProps }) {

  return (
      <Layout>
        <main>
          <Component  {...pageProps} />
        </main>
      </Layout>
  )
}

export default MyApp
