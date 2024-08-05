import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { BsAward } from "react-icons/bs";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

const UtilityQaDesktop = () => {
    const [isHover, setIsHover] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setIsHover(index);
    };

    const handleMouseLeave = () => {
        setIsHover(null);
    };

    return (
        <div className="w-full flex rounded-lg overflow-hidden">
            <div
                className={`p-5 flex text-dark border-r gap-3 relative border-slate-300 ${isHover === 1 ? ' bg-slate-100' : 'bg-slate-200'}`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
            >
                <GiReceiveMoney className="text-3xl" />
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">Money back guarantee</h1>
                    <p>If you don't fall in love with the vehicle, simply return it to us.</p>
                </div>
                <div className={`absolute bottom-2 right-3 flex items-center gap-2 font-semibold text-secondary ${isHover === 1 ? '' : 'hidden'}`}>
                    <p>More</p>
                    <div>
                        <FaPlusCircle />
                    </div>
                </div>
            </div>
            <div
                className={`p-5 flex text-dark  gap-3 relative ${isHover === 2 ? ' bg-slate-100' : 'bg-slate-200'}`}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
            >
                <AiOutlineSafety className="text-3xl" />
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">Safe purchase</h1>
                    <p>We guarantee the technical condition of every vehicle sold.</p>
                </div>
                <div className={`absolute bottom-2 right-3 flex items-center gap-2 font-semibold text-secondary ${isHover === 2 ? '' : 'hidden'}`}>
                    <p>More</p>
                    <div>
                        <FaPlusCircle />
                    </div>
                </div>
            </div>
            <div
                className={`p-5 flex text-dark border-l gap-3 relative border-slate-300 ${isHover === 3 ? ' bg-slate-100' : 'bg-slate-200'}`}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
            >
                <BsAward className="text-3xl" />
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold">6-month warranty</h1>
                    <p>In addition, with every car you receive an extended warranty.</p>
                </div>
                <div className={`absolute bottom-2 right-3 flex items-center gap-2 font-semibold text-secondary ${isHover === 3 ? '' : 'hidden'}`}>
                    <p>More</p>
                    <div>
                        <FaPlusCircle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UtilityQaDesktop;
