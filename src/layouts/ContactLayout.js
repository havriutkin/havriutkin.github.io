import Contact from "../components/Contact";

function ContactLayout(){
    const contacts = [
        {preText: 'Email Me', service: 'havriutkin@gamil.com', link: 'mailto:havriutkin@gmail.com'},
        {preText: 'Check Out My', service: 'GitHub', link: 'https://github.com/havriutkin'},
        {preText: 'Find Me On', service: 'LinkedIn', link: 'https://www.linkedin.com'},
    ];

    return (
        <div className="h-screen w-3/4 md:w-1/2
                        flex flex-col justify-center items-center">    
            <h2 className="text-white font-orbitron font-bold text-xl m-2 md:text-xl md:m-4">CONTACT ME</h2>
            <div className="w-full 
                            flex flex-col justify-around items-center
                            bg-gradient-to-br from-blush-pink-400 to-blush-pink-800
                            border border-solid border-white
                            transition-shadow duration-500 
                            hover:shadow-neon">
                <div className="p-3
                                flex flex-col justify-between items-center gap-5
                                font-orbitron text-base">
                    {contacts.map(contact => (
                        <Contact preText={contact.preText} service={contact.service} link={contact.link}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactLayout;