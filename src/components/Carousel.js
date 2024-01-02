import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Carousel({childrens}){
    let [index, setIndex] = useState(0);

    const handleNextSlide = () => {
        if (index === childrens.length - 1) setIndex(0);
        else setIndex(index + 1);
    }

    const handlePrevSlide = () => {
        if (index === 0) setIndex(childrens.length - 1);
        else setIndex(index - 1);
    }

    return (
        <div className="w-2/3 h-full
                        flex justify-between items-center">
            <button onClick={handlePrevSlide}>
                <FaArrowLeft/>
            </button>

            {childrens[index]}

            <button onClick={handleNextSlide}>
                <FaArrowRight/>
            </button>
        </div>
    )
}

export default Carousel;