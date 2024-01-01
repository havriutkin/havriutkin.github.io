import Project from "../components/Project";

function ProjectLayout(){
    const projects = [
        {'name': 'Portfolio web-site', 'link': '#', 'techs': ['React', 'Tailwind', 'FramerMotion']},
        {'name': 'Pisnya API', 'link': '#', 'techs': ['NodeJS', 'ExpressJS', 'PostgreSQL']},
        {'name': 'Recipe Rescue App', 'link': '#', 'techs': ['React', 'Redux', 'Tailwind']},
        {'name': 'Rhythm Dev', 'link': '#', 'techs': ['React', 'Tailwind', 'FramerMotion']},
    ];
    return (
        <div className="h-screen w-3/4
                        flex flex-col justify-center items-center">
            <h2 className="text-white font-orbitron font-bold text-lg m-2 md:text-xl md:m-4">
                MY PROJECTS
            </h2>
            <div className="w-full
                            sm:flex sm:flex-col sm:around sm:items-center
                            md:grid md:grid-cols-2
                            bg-gradient-to-br from-blush-pink-400 to-blush-pink-800
                            border border-solid border-white
                            transition-shadow duration-500
                            hover:shadow-neon"> 
                {projects.map(project => (
                    <Project name={project.name} link={project.link} techs={project.techs}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectLayout;