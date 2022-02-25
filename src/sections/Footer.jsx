import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'

const socialIcons = [
    {
        component: <FiLinkedin  />,
        link: "https://www.linkedin.com/in/steven-parra/" 
    },
    {
        component: <FiGithub />,
        link: "https://github.com/sparra95"
    },
    {
        component: <FiInstagram />,
        link: "https://instagram.com/achievingsteve"
    }
]

const Footer = () => {
    return (
        <footer className="font-mono text-slate-400 w-full pb-6 flex flex-col justify-center">

            <div className="flex justify-center items-center md:flex-col md:fixed left-5 bottom-0">
                {socialIcons.map((icon, index) => (
                    <a href={icon.link} key={icon + index} className="text-lg md:text-xl p-3 transition duration-300 ease-out hover:text-sky-400 hover:-translate-y-1">
                        {icon.component}
                    </a>
                ))}
                <div className="hidden md:block w-[1px] h-20 mt-4 bg-slate-300"></div>
            </div>

            <p className="text-center text-sm tracking-wider">
                Built By Steven Parra
                <br />
                Frontend Engineer since 2018
            </p>

            <div className="hidden md:flex justify-center items-center fixed origin-bottom-right bottom-0 right-14 rotate-90 translate-y-[120vh]translate-x-[-5vh]">
                <a href="mailto:sparra95@gmail.com" className="text-xs tracking-widest text-slate-300 transition duration-300 ease-out hover:text-sky-400 hover:-translate-x-2">sparra95@gmail.com</a>
                <div className="h-[1px] w-20 bg-slate-300 ml-5"></div>
            </div>
        </footer>
    )
}

export default Footer