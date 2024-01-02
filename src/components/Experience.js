function Experience({title, duration, description}){
    return(
        <div className="m-3 p-3 h-full
                        flex flex-col justify-between items-center gap-5
                        font-orbitron text-center">
            <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold">{title}</h3>
                <h4 className="text-sm">{duration}</h4>
            </div>
            <p className="text-xs text-center">{description}</p>
        </div>
    )
}

export default Experience;