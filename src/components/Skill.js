import { motion } from "framer-motion";

function Skill({name, icon}){
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full
                    p-3 
                    bg-gradient-to-br from-blush-pink-400 to-blush-pink-600
                    border border-solid border-white
                    text-black
                    flex justify-between items-center"
        >
            <h3 className="font-orbitron text-left w-1/2">{name}</h3>
            <img src={icon} alt={name + "icon"} className=" w-5 h-5"></img>
        </motion.div>
    );
}

export default Skill;