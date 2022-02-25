import { useState } from 'react'
import { Section, SectionTitle, Paragraph, Link } from '../components/'
import workData from '../constants/workData.js'

const Work = ({num}) => {
    const [activeTab, setAciveTab] = useState(0)

    return (
        <Section id="work" css="items-center mt-24 md:mt-0">
            <div className="w-full md:w-fit text-sm text-slate-300 md:h-[50vh]">
                <SectionTitle number={num}>Work Experience</SectionTitle>

                {/** Panel */}
                <div className="w-full flex flex-col md:flex-row h-[300px]list-none">

                    {/** Tabs */}
                    <ul className="flex flex-wrap md:flex-col relative font-mono whitespace-nowrap mb-4">
                        {/** Slider */}
                        <div style={{"top": `${activeTab*36}px`}} className="absolute w-1 h-9 bg-sky-400 -left-px ease-out duration-300" />
                        
                        {workData.map((job, i) => (job.company &&
                            <li key={'job-'+i+'-tab'} onClick={(e) => setAciveTab(i)} className={`${activeTab === i && "text-sky-400"} h-fit w-full transition-all border-slate-400 border-l hover:bg-slate-800 hover:border-sky-400 hover:text-sky-400 cursor-pointer p-2`}>{job.company}</li>
                        ))}
                    </ul>

                    {/** Job Details */}
                    <div className="w-full pl-4">
                        {workData.map((job, i) => (
                            <div key={'job-'+i+'-panel'} className={`${ activeTab === i? 'animate-fade-in' : 'hidden'}`}>
                                
                                {/** Company & Position */}
                                <h2 className="text-lg text-white font-bold mb-1">
                                    {job.position}<span className="text-sky-400"> @ <Link url={job.url}>{job.company}</Link></span>
                                </h2>

                                {/** Duration */}
                                <h3 className="font-mono mb-2">{job.duration}</h3>
                                
                                {/** External Links */}
                                <ul className="flex flex-row flex-wrap whitespace-nowrap mb-4">
                                    {job.externalLinks.map((link, j) => (
                                        <h4 key={'job-'+i+'link'+j} className="pr-2">
                                            <Link url={link.url}>{link.title}</Link>
                                        </h4>
                                    ))}
                                </ul>

                                {/** Highlights */}
                                <ul>
                                    {job.details.map((detail, j) => (
                                        <li key={'job-'+i+'-detail-'+j} className="relative max-w-[680px] pl-6 mb-3 before:content-['▹'] before:absolute before:left-0 before:text-sky-400 before:text-base before:leading-[1.2]">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Work