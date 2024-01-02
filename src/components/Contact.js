import { motion } from "framer-motion";

function Contact({preText, service, link}){
    return (
        <motion.p
            initial={{ scale: 0}}
            whileInView={{ scale: 1}}
            viewport={{once: true}}
            transition={{duration: 1}}>
            {preText ? preText + " " : ""}
            <a  href={link} className="underline 
                                    text-blue-800
                                    visited:text-gray-800
                                    hover:no-underline">
                {service ? service : ""}
            </a>
        </motion.p>
    );
}

export default Contact;