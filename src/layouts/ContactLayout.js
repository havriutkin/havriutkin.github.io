function ContactLayout(){
    

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
                    <p>Email Me: <span className="underline">havriutkin@gmail.com</span></p>
                    <p>Check Out <a className="underline text-blue-800
                                            visited:text-gray-800
                                            hover:no-underline" href="https://github.com/havriutkin">My GitHub</a></p>
                    <p>Find Me <a className="underline text-blue-800
                                            visited:text-gray-800
                                            hover:no-underline" href="https://www.linkedin.com">On LinkedIn</a></p>
                </div>
            </div>
        </div>
    )
}

export default ContactLayout;