function Card({children}){
    return(
        <div className="w-full
                        bg-gradient-to-br from-blush-pink-400 to-blush-pink-800
                        border border-solid border-white
                        transition-shadow duration-500
                        hover:shadow-neon">
            {children}
        </div>
    )
}

export default Card;