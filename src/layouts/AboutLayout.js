import About from "../components/About";
import { motion } from "framer-motion";

function AboutLayout(){
    return (
        <div className=" h-screen flex flex-col justify-center items-center">
            <motion.text 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2}}>
                <h2 className="text-white font-orbitron font-bold text-xl m-2 md:text-xl md:m-4">ABOUT ME</h2>
            </motion.text>
            <About/>
        </div>
    );
}

export default AboutLayout