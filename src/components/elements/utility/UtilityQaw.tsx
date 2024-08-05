import { GiMoneyStack } from "react-icons/gi";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

const UtilityQa = () => {
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const [onClick, setOnClick] = useState(false);

    const handleOnClick = () => {
        setOnClick(!onClick);
    }

    return (
        <nav className="flex flex-wrap rounded-xl bg-slate-100 text-dark">
            <div>
                <div className="flex items-center  sm:flex-row relative gap-2 w-full sm:w-1/3 px-5 py-7 border-b sm:border-b-0 sm:border-r border-slate-500 border-opacity-50" onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(null)}  onClick={handleOnClick}>
                    <div>
                        <GiMoneyStack className="text-2xl" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-medium">Money back guarantee</h1>
                        <p className="text-sm hidden xl:block">If you don't fall in love with the vehicle, simply return it to us.</p>
                    </div>
                    <div className="flex ml-10 xl:hidden">
                        <FaPlusCircle className={`text-secondary cursor-pointer ${onClick ? 'hidden' : ''}`} />
                        <FaMinusCircle className={`text-secondary cursor-pointer ${onClick ? '' : 'hidden'}`}/>
                    </div>
                    <div className={`xl:flex cursor-pointer hidden absolute gap-1 bottom-1 items-center right-3 text-secondary ${isHovered === 1 ? 'block' : 'hidden'}`}>
                        <p className="text-sm font-semibold">More</p>
                        <FaPlusCircle />
                    </div>
                </div>
                <div className={`xl:hidden p-5 ${onClick ? 'border-b-2 border-slate-400 border-opacity-50' : 'hidden'}`}>
                    <h1 className="text-lg font-bold">Can I really return the car?</h1>
                    <p>Of course, you can. We trust our service and know that we only sell inspected vehicles in excellent technical condition. Together with our customers we are fighting for better vehicles on roads.</p>
                    <p className="mt-3">Carvago, therefore, always assumes all risks connected with the vehicle. And if you simply don't like the car, you can return it to us up to 14 days after receiving it.</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row relative gap-2 w-full sm:w-1/3 px-5 py-7 border-b sm:border-b-0" onMouseEnter={() => setIsHovered(2)} onMouseLeave={() => setIsHovered(null)}>
                <div>
                    <GiMoneyStack className="text-2xl" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-lg font-medium">Money back guarantee</h1>
                    <p className="text-sm">If you don't fall in love with the vehicle, simply return it to us.</p>
                </div>
                <div className={`flex cursor-pointer absolute gap-1 bottom-1 items-center right-3 text-secondary ${isHovered === 2 ? 'block' : 'hidden'}`}>
                    <p className="text-sm font-semibold">More</p>
                    <FaPlusCircle />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row relative gap-2 w-full sm:w-1/3 px-5 py-7 border-t sm:border-t-0 sm:border-l border-slate-500 border-opacity-50" onMouseEnter={() => setIsHovered(3)} onMouseLeave={() => setIsHovered(null)}>
                <div>
                    <GiMoneyStack className="text-2xl" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-lg font-medium">Money back guarantee</h1>
                    <p className="text-sm">If you don't fall in love with the vehicle, simply return it to us.</p>
                </div>
                <div className={`flex cursor-pointer absolute gap-1 bottom-1 items-center right-3 text-secondary ${isHovered === 3 ? 'block' : 'hidden'}`}>
                    <p className="text-sm font-semibold">More</p>
                    <FaPlusCircle />
                </div>
            </div>
        </nav>
    );
}

export default UtilityQa;
