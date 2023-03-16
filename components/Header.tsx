import Link from "next/link";
import { Hamburger } from "./Hamburger";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [state, setState] = useState({
    intial: false,
    clicked: null,
    menuName: "Menu",
  });

  const router = useRouter();

  useEffect(() => {
    const handleStop = () => {
      setState((prev) => ({
        ...prev,
        clicked: false,
        menuName: "Menu",
      }));
    };

    router.events.on("routeChangeComplete", handleStop);
  });

  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disabledMenu();

    if (state.intial === false) {
      setState({
        intial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState((prev) => ({
        ...prev,
        clicked: !state.clicked,
        menuName: "Menu",
      }));
    } else if (state.clicked === false) {
      setState((prev) => ({
        ...prev,
        clicked: !state.clicked,
        menuName: "Close",
      }));
    }
  };

  //  Determine our menu button should be disabled
  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const showMenu = () => {
    if (state.menuName === "Menu") {
      return <AiOutlineMenu className="mr-[24px] text-2xl md:text-3xl" />;
    } else if (state.menuName === "Close") {
      return <AiOutlineClose className="mr-[24px] text-2xl md:text-3xl" />;
    }
  };

  return (
    <header className="bg-white fixed w-full z-10 h-[60px] md:h-[80px] shadow-md">
      <div className="container max-w-7xl mx-auto">
        <div className="wrapper px-4 pt-1 pb-2 md:pt-3 md:py-6">
          <div className="inner-header relative z-[60] h-[50px] flex justify-between items-center">
            <div className="logo font-black md:text-2xl">
              <Link href="/">Cozy & Sweet.</Link>
            </div>
            <div className="menu flex justify-end">
              <button
                aria-label="menu"
                className="pointer w-[50%] md:w-[60%]"
                disabled={disabled}
                onClick={() => handleMenu()}
              >
                {showMenu()}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};
