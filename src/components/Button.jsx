const Button = ({children, url, externalLink, scrollTo, css}) => {
    const linkCheck = (e) => {
        // If not scrolling, return
        if (!scrollTo) return

        // else, scroll to element
        e.preventDefault()
        document.getElementById(scrollTo).scrollIntoView({behavior: 'smooth'})
    }

    return (
        <button className={`text-sky-400 text-sm flex border-sky-400 border px-4 py-2 rounded md:hover:bg-slate-700/50 md:transition-all md:ease-out md:duration-400 ${css}`}>
            <a 
                href={url} 
                target={externalLink? '_blank' : '_self'}
                onClick={(e) => linkCheck(e)}
            >
                {children}
            </a>
        </button>
    )
}

Button.defaultProps = {
    css: '',
    url: '',
    externalLink: false,
    scrollTo: ''
}

export default Button