import { Section, SectionTitle, Paragraph, Link } from '../components/'
import myProfileImg from "../profile.jpg"

const skills = ["HTML", "CSS (Sass, Tailwind)", "JavaScript (ES6+)", "React", "Python", "Angular"]

const About = ({num}) => {

    return (
        <Section id="about">
            <SectionTitle number={num}>About Me</SectionTitle>
            
            <div className="w-full flex flex-col md:flex-row text-slate-300">
                
                {/** Column 1 */}
                <div className="w-full mb-12">
                    <Paragraph>
                        Hello! My name is Steven and I enjoy creating things on the internet. 
                        My interest in coding began in 2012 when I read a book on developing games in Python 
                        — turns out to be a fun way to learn! I later took my interest into the web with 
                        HTML, CSS, &amp; JavaScript, and decided to pursue a career in software development.
                    </Paragraph>
                    <Paragraph>
                        Fast-forward to today, I've had the privilege of working as part of an <Link url="https://www.designzillas.com/">advertising agency</Link>, 
                        a start-up, a freelance team, and independently with small businesses. 
                        I've been able to fortify my core competences in programming and develop my communication skills
                        to better collaborate with teams, negotiate with clients, build interfaces based on feedback, and much more.
                    </Paragraph>
                    <Paragraph>
                        Most currently, I'm developing my skills in Web 3.0 technologies 
                        while looking for a permanent position with a forward-thinking company  
                        with an impactful product to help them build elegant &amp; engaging user experiences.
                    </Paragraph>

                    {/** Skill list */}
                    <ul className="grid grid-cols-[repeat(2,_minmax(125px,_200px))] gap-x-4 overflow-hidden list-none">
                        {skills.map((item, index) => (
                            <li key={item+index} className="text-sm relative before:content-['▹'] before:absolute before:left-0 before:text-sky-400 pl-4 mb-2 md:hover:pl-6 md:hover:text-sky-400 md:transition-all md:ease-out">{item}</li>
                        ))}
                    </ul>
                </div>

                {/** Column 2 */}
                <div className="w-full relative flex basis-3/4 justify-center">
                    
                    {/** Profile Image */}
                    <div id="profile-img-container" className="w-11/12 h-fit max-w-[300px] relative z-0">
                        <div id="profile-img-before" className="absolute w-full h-full z-0 bg-sky-400 opacity-40 transition duration-200 ease-out" />
                        <img className="object-cover rounded border border-sky-400" src={myProfileImg}/>
                        <div id="profile-img-after" className="absolute w-full h-full z-[-1] top-4 left-4 rounded border border-sky-400 transition duration-200 ease-out" />
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default About