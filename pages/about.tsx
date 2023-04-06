import Head from "next/head";
import { useEffect } from "react";
import gsap from "gsap";
import { About } from "../components/About";

export default function Solution() {
  useEffect(() => {
    gsap.to(".container", { duration: 0, css: { display: "block" } });
  }, []);

  return (
    <>
      <Head>
        <title>About | Cozy & Sweet Homestay Port Dickson</title>
      </Head>
      <div className="container hidden bg-zinc-100 mx-auto py-6">
        <div className="wrapper px-2">
          <div className="home mt-24">
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
