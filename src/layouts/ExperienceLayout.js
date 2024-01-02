import Carousel from "../components/Carousel";
import Experience from "../components/Experience";

function ExperienceLayout(){
    const experiences = [
        {'title': 'Research Assistant in Georgia Tech', 'duration': '1 year', 'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {'title': 'Research Assistant in Czech Techonology University', 'duration': '6 months', 'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    ];

    const experiencesComponents = experiences.map(exp => (<Experience title={exp.title} duration={exp.duration} description={exp.description}/>));

    return(
        <div className="h-screen w-3/4 md:w-1/2
                        flex flex-col justify-center items-center">    
            <h2 className="text-white font-orbitron font-bold text-xl m-2 md:text-xl md:m-4">MY EXPERIENCE</h2>
            <div className="w-full
                            flex flex-col justify-around items-center
                            bg-gradient-to-br from-blush-pink-400 to-blush-pink-800
                            border border-solid border-white
                            transition-shadow duration-500 
                            hover:shadow-neon">
                <Carousel childrens={experiencesComponents}/>
            </div>
        </div>
    );
}

export default ExperienceLayout;