import About from "../components/About";
import { motion } from "framer-motion";

function AboutLayout(){
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <motion.text 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2}}>
                <h2 className="text-white font-orbitron font-bold text-xl m-2 md:text-xl md:m-4">ABOUT ME</h2>
            </motion.text>
            <About text={text}/>
        </div>
    );
}

export default AboutLayout