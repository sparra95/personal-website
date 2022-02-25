import { Section, SectionTitle, Paragraph, Button } from '../components/'

const Contact = ({num}) => {
    return (
        <Section id="contact" css="items-center">
            <div className="w-full md:w-fit">
                <SectionTitle number={num}>Get In Touch</SectionTitle>
                <Paragraph>I am currently on the market for new opportunities. Feel free to reach out with any questions or just to say hi, I'll get back to you as soon as I can!</Paragraph>
                <Button url="mailto:sparra95@gmail.com" externalLink={false}>Say Hello</Button>
            </div>
        </Section>
    )
}

export default Contact