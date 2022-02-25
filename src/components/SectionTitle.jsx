const SectionTitle = ({ children, number, id}) => {
    return (
        <div id={id} className="w-full flex justify-start items-center mb-5 md:mb-10">
            
            <h2 className="">
                <span className="font-mono text-lg md:text-xl text-sky-400 mr-3">{`0${number}.`}</span>
                <span className="whitespace-nowrap text-white font-bold text-2xl md:text-3xl max-w-vw">{children}</span>
            </h2>
            <div className="h-[1px] w-full lg:w-1/5 bg-white ml-5"></div>
        </div>
    )
}

SectionTitle.defaultProps = {
    number: 0
}

export default SectionTitle