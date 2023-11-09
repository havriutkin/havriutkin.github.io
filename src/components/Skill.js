import { motion } from "framer-motion";

function Skill({name, icon}){
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0}}
            whileInView={{ opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{ duration: 1.5 }}
            className="w-full
                    mt-2 p-3 
                    border-b border-solid border-white
                    text-black
                    flex justify-between items-center"
        >
            <h3 className="font-orbitron text-left w-1/2">{name}</h3>
            <img src={icon} alt={name + "icon"} className=" w-5 h-5"></img>
        </motion.div>
    );
}

export default Skill;