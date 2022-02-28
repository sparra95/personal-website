import { useState } from 'react'
import { Button } from '../components/'
import myResume from "../resume.pdf"

import { GiArtificialIntelligence } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import { FiLinkedin } from 'react-icons/fi'
import { BsHexagon } from 'react-icons/bs'

const navbarItems = [
    {
        title: "About",
        link: "about"
    }, 
    {
        title: "Experience",
        link: "work"
    }, 
    {
        title: "Projects",
        link: "projects"
    }, 
    {
        title: "Contact",
        link: "contact"
    }
]

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [prevScrollPosition, setPrevScrollPosition] = useState(window.pageYOffset)

    const mobileMenuSelection = (elementId) => {
        document.getElementById(elementId).scrollIntoView({behavior: 'smooth'})
        setToggleMenu(false)
    }

    window.onscroll = function() {
        if (window.innerWidth <= 425) return

        let currentScrollPosition = window.pageYOffset
        // Scrolling up
        if (prevScrollPosition > currentScrollPosition) {
            document.getElementById("navbar").style.top = "0"
        } 
        // Scrolling down
        else { 
            document.getElementById("navbar").style.top = "-90px"
        }
        setPrevScrollPosition(currentScrollPosition)
    }

    return (
        <nav id="navbar" className="font-mono text-sm text-slate-300 fixed left-0 top-0 w-full z-50 px-5 md:px-8 py-2 flex justify-between items-center bg-slate-900 drop-shadow-xl transition-all duration-300 ease-out">
            
            {/** Logo */}
            <div className="relative flex justify-center items-center w-[42px] h-[42px]">
                <BsHexagon id="logo-frame" className="text-[42px] m-auto text-sky-400 absolute transition-all duration-700 ease-out hover:rotate-90" />
                <p className="font-sans text-[24px] text-sky-400 font-bold flex justify-center items-center">S</p>
            </div>


            {/** Menu */}
            <ul className="hidden md:flex list-none flex-row justify-between items-center flex-intial ml-auto">
                {navbarItems.map((item, index) => (
                    <li key={item.title + index} className={`md:cursor-pointer whitespace-nowrap mx-4 my-2 md:my-4 hover:text-sky-400 md:transition md:ease-out md:duration-400`}>
                        <a href={`#${item.link}`} onClick={(e) => { e.preventDefault(); document.getElementById(item.link).scrollIntoView({behavior: 'smooth'}); }}>
                            <span className="text-sky-400">{`0${index+1}.`}</span> {item.title}
                        </a>
                    </li>
                ))}
            </ul>

            {/** Call To Action */}
            <Button url={myResume} externalLink={true} css={'hidden md:flex'}>Resume</Button>

            {/***** Mobile ****/}
            <div className="md:hidden flex w-fit justify-between text-lg overscroll-contain">
			
				{/** Open Menu  */}
				{toggleMenu || <HiMenuAlt4 fontSize={28} onClick={() => setToggleMenu(true)} />}

                {/** Backdrop */}
                <div className={`bg-slate-900/90 absolute w-screen h-screen top-0 left-0 -z-10 ${toggleMenu? 'animate-fade-in' : 'hidden'}`}></div>

				{/** Menu */}
                <ul className={`z-10 fixed top-0 right-0 p-4 w-[75vw] h-screen list-none flex flex-col justify-start items-end rounded-md bg-[#111e40] transition duration-300 ease-out ${toggleMenu? 'translate-x-0':'translate-x-[120%]'}`}>
                    
                    {/** Close Menu  */}
                    <li className="text-xl w-fit p-2">
                        <AiOutlineClose size={24} onClick={() => setToggleMenu(false)} />
                    </li>
                    
                    {/** Menu Items */}
                    {navbarItems.map((item, index) => (
                        <li 
                            key={item.title + index} 
                            onClick={() => mobileMenuSelection(item.link)} 
                            className={`mx-4 md:cursor-pointer whitespace-nowrap my-2 md:my-4 hover:text-sky-400 md:transition md:ease-out md:duration-400`}
                        >
                            <span className="text-sky-400">{`0${index+1}.`}</span> {item.title}
                        </li>
                    ))}

                    {/** Call To Action */}
                    <li>
                        <Button url={myResume} externalLink={true} css="text-sky-400 text-md flex border-sky-400 border-2 px-5 py-2 mx-4 my-3 rounded">Resume</Button>
                    </li>
                </ul>
			</div>            
        </nav>
    )
}

export default Navbar