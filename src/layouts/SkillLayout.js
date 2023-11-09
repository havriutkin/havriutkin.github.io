import Skill from "../components/Skill";


function SkillLayout(){
    const skillNames = ['JS', 'React', 'Redux', 'NodeJS', 'ExpressJS', 'TailwindCSS', 
                    'FramerMotion', 'PostgreSQL', 'Python'];

    return(
        <div className="h-screen w-3/4
                        flex flex-col justify-center items-center">    
            <h2 className="text-white font-orbitron font-bold text-lg m-2 md:text-xl md:m-4">MY SKILLS</h2>
            <div className="w-full 
                            flex flex-col justify-around items-center
                            bg-gradient-to-br from-blush-pink-400 to-blush-pink-800
                            border border-solid border-white 
                            drop-shadow-glow">
                {skillNames.map(skill => (
                    <Skill name={skill} icon={`./logos/${skill}Logo.svg`}/>
                ))}
            </div>
        </div>
    );
}

export default SkillLayout;