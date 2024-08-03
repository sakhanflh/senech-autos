import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const CarCategory = () => {
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className={`xl:h-44 h-36 overflow-hidden border justify-center items-center p-5 flex flex-col rounded-lg ml-5 transition-all duration-300 ${isHovered ? 'border-tertiary shadow-xl' : 'border-slate-300 shadow-sm'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center font-bold xl:h-10 text-lg cursor-pointer">
                <h4>SUV</h4>
                <FaArrowRight className={`hidden xl:block transition-all duration-300 ease-in-out ${isHovered ? 'w-6' : 'w-0'}`} />
            </div>

            <div>
                <img src="/image/SuvCar.png" alt="" className="w-40" />
            </div>
        </div>
    )
}

export default CarCategory;