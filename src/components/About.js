import { motion } from "framer-motion";
import personIcon from "../assets/person.png";

function About(){
    return(
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-3/4 h-1/2 
                    p-3
                    bg-gradient-to-br from-blush-pink-400 to-blush-pink-800
                    border-solid border border-white rounded-md border-opacity-100
                    text-black
                    drop-shadow-glow
                    flex flex-col justify-around items-center"
        >
            <img src={personIcon} alt="Person icon" className="w-1/3 h-1/3"></img>
            <div className="font-orbitron text-center">
                <h2 className="font-bold">ABOUT ME</h2>
                <h3 className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
            </div>
        </motion.div>
    );
}

export default About