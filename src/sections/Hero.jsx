import { Section, Button, Paragraph } from '../components'

const Hero = () => {
    return (
        <Section>
            <p className="font-mono text-sky-400 mb-[1rem]">Hi, my name is</p>
            <h1 className="font-sans font-bold leading-none text-[40px] md:text-[60px] xl:text-[80px] my-[1.5rem]">
                Steven Parra.
                <div className="h-3.5" />
                <span className="text-slate-300">I build things for the web.</span>
            </h1>
            <Paragraph css={'md:w-10/12 text-slate-400'}>
                I'm a frontend engineer who enjoys building elegant and engaging user experiences. 
                Currently, I'm freelancing while actively looking for a permanent position in a modern company.
            </Paragraph>
            
            <div className="h-8" />
            <Button url={'/#about'} scrollTo={'about'}>Learn more</Button>
        </Section>
    )
}

export default Hero