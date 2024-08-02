import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiBookmark, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LiaCarAltSolid } from "react-icons/lia";
import { GoHistory } from "react-icons/go";
import { useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";

interface loginProps {
    styleParent: string;
}

const Login = ({ styleParent }: loginProps) => {
    const [isHover, setIsHover] = useState(false)
    const handleHover = () => {
        setIsHover(!isHover)
    }
    return (
        <div className={`xl:flex items-center ${styleParent}`}>
            <div className="flex items-center text-dark gap-2 border-r h-16 w-32 justify-center border-gray-200" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <PiUserCircleLight className="text-dark text-3xl" />
                <p className="xl:text-base font-semibold text-dark">Login</p>
                <MdKeyboardArrowDown className="text-2xl" />
                <div className={`absolute flex py-5 w-[19rem] h-[28rem] border rounded-md bg-white xl:translate-y-64 xl:-translate-x-12 lg:translate-y-64 lg:-translate-x-12 justify-around flex-col ${isHover ? 'flex' : 'hidden'}`}>
                    <div className="xl:w-full xl:h-[65%] px-5 border-b ">
                        <div className="flex flex-col gap-4 h-full text-dark">
                            <p className="flex items-center h-[20%] text-lg gap-3 hover:font-medium hover:bg-slate-50 rounded-sm"><CiBookmark className="text-2xl" /> Saved searches</p>
                            <p className="flex items-center h-[20%] text-lg gap-4 hover:font-medium hover:bg-slate-50 rounded-sm"><GoHistory className="text-xl" /> Last searches</p>
                            <p className="flex items-center h-[20%] text-lg gap-3 hover:font-medium hover:bg-slate-50 rounded-sm"><CiHeart className="text-2xl" /> Favorite cars</p>
                            <p className="flex items-center h-[20%] text-lg gap-3 hover:font-medium hover:bg-slate-50 rounded-sm"><IoCartOutline className="text-2xl" /> Orders in progress</p>
                            <p className="flex items-center h-[20%] text-lg gap-3 hover:font-medium hover:bg-slate-50 rounded-sm"><LiaCarAltSolid className="text-2xl" /> Cars for sale</p>
                        </div>
                    </div>

                    <div className="xl:w-full xl:h-[25%] flex gap-5 flex-col px-5">
                        <button className="flex bg-secondary rounded-lg xl:w-full xl:h-12 items-center justify-center text-lg text-white gap-3"><FaRegUserCircle className="text-xl" />Login</button>
                        <div>
                            <p>Don't have an account? <span className="text-secondary">Register</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center xl:w-20 justify-center ">
                <div className="xl:w-6 xl:h-6 lg:w-6 lg:h-6 rounded-full overflow-hidden">
                    <img src="/img/amerika.jpg" alt="" className="object-cover xl:w-full xl:h-full lg:w-full lg:h-full" />
                </div>
                <MdKeyboardArrowDown className="text-2xl text-dark" />
            </div>
        </div>
    )
}

export default Login;