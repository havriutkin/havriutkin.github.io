import About from "../components/About";

function AboutLayout(){
    return (
        <div className=" h-screen flex flex-col justify-center items-center">
            <h2 className="text-white font-orbitron font-bold text-lg m-2 md:text-xl md:m-4">ABOUT ME</h2>
            <About/>
        </div>
    );
}

export default AboutLayout