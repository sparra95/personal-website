const Link = ({children, url, externalLink, scrollTo, css}) => {
    const linkCheck = (e) => {
        // If no url, don't go anywhere
        if (!url) e.preventDefault()

        // If not scrolling, return
        if (!scrollTo) return

        // else, don't go anywhere && scroll to element
        e.preventDefault()
        document.getElementById(scrollTo).scrollIntoView({behavior: 'smooth'})
    }

    return (
        <a 
            href={url} 
            target={externalLink? '_blank' : '_self'} 
            onClick={(e) => linkCheck(e)} 
            className={`text-sky-400 relative ${css} after:absolute after:w-full after:h-[1px] after:scale-x-0 after:bottom-0 after:left-0 after:bg-sky-400 after:origin-bottom-right after:transition after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left`}
        >
            {children}
        </a>
    )
}

Link.defaultProps = {
    css: '',
    url: '',
    externalLink: true,
    scrollTo: false
}

export default Link