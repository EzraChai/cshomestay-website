import Link from "next/link";
import Image from "next/image";
import {Hamburger} from "./Hamburger";
import {useState,useEffect} from "react"
import { useRouter } from 'next/router'

import hamburger from "../public/hamburger-menu.svg"
import close from "../public/close-menu.svg"

export const Header = () => {

    const [state, setState] = useState({
        intial: false,
        clicked: null,
        menuName: "Menu",
    });

    const router = useRouter()


    useEffect(() => {
        const handleStop = () => {
            setState({
                clicked: false,
                menuName: "Menu",
            })
        }

        router.events.on('routeChangeComplete', handleStop)
    })

    const [disabled,setDisabled] = useState(false) 

    const handleMenu = () => {
        disabledMenu()

        if(state.intial === false) {
            setState({
                intial: null,
                clicked: true, 
                menuName: "Close"
            });
        }else if(state.clicked === true){
            setState({
                clicked: !state.clicked, 
                menuName: "Menu"
            })

        }else if(state.clicked === false){
            setState({
                clicked: !state.clicked, 
                menuName: "Close"
            })
            
    }
}

    //  Determine our menu button should be disabled
    const disabledMenu = () => {
        setDisabled(!disabled)
        setTimeout(() => {
        setDisabled(false)
        },1200)
}

    const showMenu = () => {
        if(state.menuName === "Menu"){
            return <Image src={hamburger} alt={state.menuName}/>
        }else if(state.menuName === "Close"){
            return <Image src={close} alt={state.menuName}/>
        }
    }

    return (
        <header className="h-[50px]">
            <div className="container mx-auto">
                <div className="wrapper px-4 py-2 md:py-6 md:px-8">
                    <div className="inner-header relative z-[10] h-[50px] flex justify-between items-center">
                        <div className="logo font-[700] md:text-2xl">
                            <Link href="/">Cozy & Sweet.</Link>
                        </div>
                        <div className="menu flex justify-end">
                            <button className="pointer w-[50%] md:w-[60%]" disabled={disabled} onClick={()=>handleMenu()}>
                                {showMenu()}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Hamburger state={state}/>
        </header>
    )
}
