const Section = ({children, css, id}) => {
    return (
        <section id={id} className={`text-sm pt-[80px] md:text-base bg-slate-900 w-full max-w-[1600px] mx-auto min-h-screen flex flex-col justify-center items-start ${css}`}>
            {children}
        </section>
    )
}

Section.defaultProps = {
    css: '',
    id: ''
}

export default Section