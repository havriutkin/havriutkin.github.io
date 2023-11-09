import Skill from "../components/Skill";

function SkillLayout(){
    const skillNames = ['JS', 'React', 'Redux', 'NodeJS', 'ExpressJS', 'TailwindCSS', 
                    'FramerMotion', 'PostgreSQL', 'Python'];

    return(
        <div className="h-screen w-3/4
                        flex flex-col justify-around items-center
                        border border-solid border-white p-3">    
            <h2 className="font-orbitron text-white font-bold text-lg">MY SKILLS</h2>
            {skillNames.map(skill => (
                <Skill name={skill} icon={`./logos/${skill}Logo.svg`}/>
            ))}
        </div>
    );
}

export default SkillLayout;