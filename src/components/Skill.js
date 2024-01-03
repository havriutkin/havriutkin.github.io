import { motion } from "framer-motion";

function Skill({name, icon}){
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0}}
            whileInView={{ opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{ duration: 1.5 }}
            className="w-full
                    mt-0 p-3
                    border-b border-solid border-white md:border-r
                    text-black
                    flex justify-between items-center
                    hover:transition-colors hover:duration-500
                    hover:bg-blush-pink-400"
        >
            <h3 className="font-orbitron text-left w-1/2">{name}</h3>
            <img src={icon} alt={name + "icon"} className="w-10 h-10"></img>
        </motion.div>
    );
}

export default Skill;