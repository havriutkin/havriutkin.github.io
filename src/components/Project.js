function Project({name, link, techs}){
    return(
        <div className="w-full
                    mt-2 p-3
                    md:mt-0 
                    border-b border-r border-solid border-white
                    text-black
                    flex justify-between items-center">
            <h3 className="w-1/3 
                            font-orbitron text-center font-bold">
                <a href={link} className="underline text-blue-800
                                            visited:text-gray-800
                                            hover:no-underline hover:bg-pink-300">
                    {name}
                </a>
            </h3>
            <div className="w-2/3 text-right">
                <h4 className="font-orbitron text-sm">Technologies: </h4>
                <ul className>
                    {techs.map(tech => (
                        <li className="font-orbitron text-sm">{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Project;