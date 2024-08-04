import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CustomNavigationProps {
    onPrevClick: () => void;
    onNextClick: () => void;
}

const CustomNavigation: React.FC<CustomNavigationProps> = ({ onPrevClick, onNextClick }) => {
    return (
        <div className="absolute -bottom-20 left-20 flex space-x-5">
            <button
                onClick={onPrevClick}
                className="w-12 h-12 flex items-center justify-center border-2 border-blue-500 rounded-md text-blue-500 custom-prev hover:scale-90 transition-all duration-200"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={onNextClick}
                className="w-12 h-12 flex items-center justify-center border-2 border-blue-500 rounded-md text-blue-500 custom-next hover:scale-90 transition-all duration-200"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default CustomNavigation;
