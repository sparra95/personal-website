const Paragraph = ({children, css}) => {
    return (
        <p className={`font-sans w-full md:max-w-[680px] mb-5 ${css}`}>
            {children}
        </p>
    )
}

Paragraph.defaultProps = {
    css: ''
}

export default Paragraph