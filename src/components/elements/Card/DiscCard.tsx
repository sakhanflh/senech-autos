import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const DiscCard = () => {
    const [isHovered, setIsHovered] = useState<number | null>(null)
    return (
        <aside className="w-[22rem] xl:h-44 h-36 p-4 rounded-lg relative overflow-hidden box-border flex bg-gradient-to-t to-primary from-tertiary text-white" onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(null)}>
            <div className={`absolute bg-gradient-to-t from-transparent to-tertiary rotate-[230deg] -right-24 transition-all duration-200 ${isHovered === 1 ? 'xl:w-60 xl:h-60 w-56 h-56' : 'xl:w-52 xl:h-52 w-48 h-48'}`}></div>
            <div className="w-2/4 gap-3 flex flex-col">
                <p className="xl:p-1 bg-extra rounded-md font-medium text-xs xl:text-sm py-1 max-w-24 xl:max-w-28 justify-center flex">361 213 Cars</p>
                <h1 className="xl:text-2xl font-semibold">Discounted cars</h1>
                <button className="flex items-center mt-5 xl:mt-8 underline gap-1 xl:text-base font-semibold hover:no-underline text-sm">More <FaArrowRight /></button>
            </div>

            <div className="w-2/4 overflow-hidden ">
                <img src="/image/cardCar.png" alt="" className="absolute xl:top-0 xl:left-28 top-0 left-32" />
            </div>
        </aside>
    )
}

export default DiscCard;