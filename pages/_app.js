import '../styles/globals.css'
import {Layout} from "../components/Layout"
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 3,
  color: "#ffffff",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

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
