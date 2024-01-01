import { motion } from "framer-motion";
import personIcon from "../assets/person.png";

//drop-shadow-glow
function About(){

    return(
        <motion.div 
            initial={{ 
                scale: 0.1, 
                rotate: -90, 
            }}
            whileInView={{ 
                scale: [0.1, 0.1, 1], 
                rotate: [-90, 0, 0],
            }}
            transition={{ 
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 1]
            }}
            viewport={{once: true}}
            className="w-3/4 h-1/2 md:w-1/2 md:h-3/4
                    p-3
                    bg-gradient-to-br from-blush-pink-400 to-blush-pink-800
                    border-solid border border-white rounded-md border-opacity-100
                    text-black
                    flex flex-col justify-around items-center
                    transition-shadow duration-500
                    hover:shadow-neon"
        >
            <img src={personIcon} alt="Person icon" className="h-1/2"></img>
            <div className="font-orbitron text-center">
                <h3 className="text-xs  ml-6 mr-6
                            md:text-base md:ml-12 md:mr-12
                            lg:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </h3>
            </div>
        </motion.div>
    );
}

export default About