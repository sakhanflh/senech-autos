import { GiMoneyStack } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";

const UtilityQa = () => {
    const [isHovered, setIsHovered] = useState<number | null >(null)

    return (
        <nav className="flex flex-wrap rounded-xl bg-slate-200 text-dark">
            <div className="flex relative gap-2 w-1/3 px-5 py-7 border-r border-slate-500 border-opacity-50" onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(null)}>
                <div className="">
                    <GiMoneyStack className="text-2xl"/>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-lg font-medium">Money back guarantee</h1>
                    <p className="text-sm">If you don't fall in love with the vehicle, simply return it to us.</p>
                </div>
                <div className={`flex cursor-pointer absolute gap-1 bottom-1 items-center right-3 text-secondary ${isHovered === 1 ? 'block' : 'hidden'}`}>
                    <p className="text-sm font-semibold">More</p>
                    <FaPlusCircle/>
                </div>
            </div>
            <div className="flex relative gap-2 w-1/3 px-5 py-7" onMouseEnter={() => setIsHovered(2)} onMouseLeave={() => setIsHovered(null)}>
                <div className="">
                    <GiMoneyStack className="text-2xl"/>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-lg font-medium">Money back guarantee</h1>
                    <p className="text-sm">If you don't fall in love with the vehicle, simply return it to us.</p>
                </div>
                <div className={`flex cursor-pointer absolute gap-1 bottom-1 items-center right-3 text-secondary ${isHovered === 2 ? 'block' : 'hidden'}`}>
                    <p className="text-sm font-semibold">More</p>
                    <FaPlusCircle/>
                </div>
            </div>
            <div className="flex relative gap-2 w-1/3 px-5 py-7 border-l border-slate-500 border-opacity-50" onMouseEnter={() => setIsHovered(3)} onMouseLeave={() => setIsHovered(null)}>
                <div className="">
                    <GiMoneyStack className="text-2xl"/>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-lg font-medium">Money back guarantee</h1>
                    <p className="text-sm">If you don't fall in love with the vehicle, simply return it to us.</p>
                </div>
                <div className={`flex cursor-pointer absolute gap-1 bottom-1 items-center right-3 text-secondary ${isHovered === 3 ? 'block' : 'hidden'}`}>
                    <p className="text-sm font-semibold">More</p>
                    <FaPlusCircle/>
                </div>
            </div>
        </nav>
    )
}
export default UtilityQa;