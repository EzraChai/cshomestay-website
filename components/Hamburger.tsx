import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export const Hamburger = ({ state }) => {
  useEffect(() => {
    if (state.clicked === false) {
      //close Menu
      gsap.to([".menu-layer", " .menu-secondary-background-color"], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });

      gsap.to([".line1", ".line2", ".line3"], {
        duration: 0.4,
        stagger: 0.04,
        css: { opacity: 0 },
      });
      gsap.to(".info", { duration: 0.4, css: { opacity: 0 } });

      gsap.to(".hamburger-menu", {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open Menu
      gsap.to(
        [".line1", ".line2", ".line3"],
        { duration: 0, css: { opacity: 0 } },
        0
      );
      gsap.to(".info", { duration: 0, css: { opacity: 1 } });

      gsap.to(".hamburger-menu", {
        duration: 0,
        css: { display: "block" },
      });

      gsap.to([" .menu-secondary-background-color", ".menu-layer"], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });

      gsap.from([".menu-secondary-background-color", ".menu-layer"], {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      fadeInUp(".info");
      staggerText(".line1", ".line2", ".line3");
    }
  }, [state]);

  const fadeInUp = (class1) => {
    gsap.from(class1, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };
  const staggerText = (class1, class2, class3) => {
    gsap.to([class1, class2, class3], {
      duration: 1,
      delay: 0.2,
      opacity: 1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const handleEnter = (e) => {
    gsap.to(e.target, {
      duration: 0.2,
      skewX: 5,
      ease: "power3.inOut",
    });
  };

  const handleLeave = (e) => {
    gsap.to(e.target, {
      duration: 0.2,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div className="hamburger-menu hidden z-[59] top-0 bottom-0 left-0 right-0 h-screen w-full fixed">
      <div className="menu-secondary-background-color bg-gray-800 z-[-1] top-0 bottom-0 left-0 right-0 h-screen w-full fixed"></div>
      <div className="menu-layer relative bg-cyan-500 h-screen">
        <div className="container mx-auto p-4 md:px-7">
          <div className="wrapper relative">
            <div className="menu-links md:flex justify-between items-center relative top-36 md:top-[12rem]">
              <nav className="block p-0 m-0">
                <ul className="  font-bold text-4xl md:text-6xl lg:text-8xl">
                  <li className="line1 cursor-pointer h-[70px] md:h-[100px] lg:h-[140px] w-full md:w-[480px] lg:w-[580px] overflow-hidden relative text-white">
                    <Link href={"/about"} passHref>
                      <div
                        onMouseEnter={(e) => handleEnter(e)}
                        onMouseLeave={(e) => handleLeave(e)}
                        className=" hover:text-gray-700"
                      >
                        About
                      </div>
                    </Link>
                  </li>
                  <li className="line2 cursor-pointer h-[70px] md:h-[100px] lg:h-[140px] w-full md:w-[480px] lg:w-[580px] overflow-hidden relative text-white hover:text-gray-700">
                    <Link href={"/pictures"} passHref>
                      <div
                        onMouseEnter={(e) => handleEnter(e)}
                        onMouseLeave={(e) => handleLeave(e)}
                        className=" hover:text-gray-700"
                      >
                        Pictures
                      </div>
                    </Link>
                  </li>
                  <li className="line3 cursor-pointer h-[70px] md:h-[100px] lg:h-[140px] w-full md:w-[480px] lg:w-[580px] overflow-hidden relative text-white hover:text-gray-700">
                    <Link href={"/contact-us"} passHref>
                      <div
                        onMouseEnter={(e) => handleEnter(e)}
                        onMouseLeave={(e) => handleLeave(e)}
                        className=" hover:text-gray-700"
                      >
                        Contact us
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="info mt-4 md:mt-0 text-white w-1/2 lg:w-full lg:flex lg:justify-center lg:flex-col lg:items-center">
                <h3 className="text-lg md:text-2xl lg:text-4xl font-bold">
                  Our Promise
                </h3>
                <p className="text-sm md:text-lg lg:text-xl">
                  Provide you a comfy place to stay in Port Dickson
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
