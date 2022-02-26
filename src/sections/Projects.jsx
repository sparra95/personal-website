import { Section, SectionTitle, Paragraph, Link } from '../components/'

import { MdFolder, MdOutlineFolder } from 'react-icons/md'
import { FiExternalLink } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'

import projectsData from '../constants/projectsData.js'

const Projects = ({num}) => {
    return (
        <Section id="projects" css="mt-24 md:mt-0">
            <SectionTitle number={num}>My Projects</SectionTitle>

            {/** Project grid */}
            <ul className="w-full flex flex-col md:flex-row flex-wrap justify-center lg:justify-start">
                {projectsData.map((project, i) => (
                        /** Card */
                        
                        <li key={'project-'+i} className="project-card min-w-[250px] max-w-[300px] min-h-[300px] mb-4 md:mr-4 p-4 flex flex-1 flex-col rounded bg-[#111e40] drop-shadow-lg backdrop-blur-sm backdrop-opacity-5 hover:-translate-y-2 transition duration-200 ease-out">
                            <a href={project.demoUrl} target="_blank" onClick={(e) => (!project.demoUrl || window.innerWidth <= 425) && e.preventDefault()} className="flex flex-col h-full justify-between">
                                {/** Icons */}
                                <div className="relative w-full flex justify-between items-center mb-4">
                                    <MdOutlineFolder id="folder-icon" className="text-5xl text-sky-400 opacity-100 transition-all ease-out" />
                                    <MdFolder id="hover-folder-icon" className="absolute left-0 opacity-0 text-5xl text-sky-400 transition-all ease-out" />
                                    
                                    <div className="flex flex-row justify-between">
                                        <a href={project.githubUrl} target="_blank" className={`${project.githubUrl || 'hidden'}`}><SiGithub className="text-2xl hover:text-sky-400 transition" /></a>
                                        <a href={project.demoUrl} target="_blank"  className={`${project.demoUrl || 'hidden'}`}><FiExternalLink className="text-2xl ml-4 hover:text-sky-400 transition" /></a>
                                    </div>
                                </div>

                                {/** Title */}
                                <h4 className="text-lg font-bold mb-2 transition-all ease-out hover:text-sky-400">
                                    
                                        {project.title}
                                    
                                </h4>
                                
                                {/** Details */}
                                <Paragraph css="text-sm leading-5 max-h-36 overflow-hidden text-slate-300">{project.description}</Paragraph>
                                
                                {/** Tech stack */}
                                <div className="font-mono text-sm mt-auto text-slate-400 mt-auto">
                                    {project.tech.map((tech, j) => (<span key={'project-'+i+'-tech-'+j}>{tech}&nbsp; </span>) )}
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </Section>
    )
}

export default Projects