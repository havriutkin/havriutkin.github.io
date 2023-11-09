import { motion } from "framer-motion";

function Card({children}){
    return(
        <motion.div 
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5}}
            className="w-3/4 h-1/2 md:w-1/2 md:h-3/4
                    p-3
                    bg-gradient-to-br from-blush-pink-400 to-blush-pink-800
                    border-solid border border-white rounded-md border-opacity-100
                    text-black
                    drop-shadow-glow
                    flex flex-col justify-around items-center"
        >
            {children}
        </motion.div>
    )
}

export default Card;