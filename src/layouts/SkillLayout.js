import Skill from "../components/Skill";
import Card from "../components/Card";

function SkillLayout(){
    const skillNames = ['JS', 'React', 'Redux', 'NodeJS', 'ExpressJS', 'TailwindCSS', 
                    'FramerMotion', 'PostgreSQL', 'Python'];

    return(
        <div className="h-screen w-3/4 md:w-1/2
                        flex flex-col justify-center items-center">
            <h2 className="text-white font-orbitron font-bold text-xl m-2 md:text-xl md:m-4">MY SKILLS</h2>
            <Card>
                {skillNames.map(skill => (
                    <Skill name={skill} icon={`./logos/${skill}Logo.svg`}/>
                ))}
            </Card>
        </div>
    );
}

export default SkillLayout;