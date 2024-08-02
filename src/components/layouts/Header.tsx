import { CiHeart } from "react-icons/ci";
import SenechIcon from "../../assets/SenechIcon";
import Navbar from "../fragments/Navbar";
import Login from "../fragments/Login";
import { RiMenu4Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


const Header = () => {
    return (
        <header className="bg-white flex justify-between px-5 max-w-[90rem] z-50 fixed flex-row border-b w-full lg:px-5 xl:px-5 lg:gap-5 xl:gap-5 h-[70px] lg:h-16 xl:h-16 lg:flex items-center font-montserat xl:flex xl:justify-between shadow-md">
            <div className="xl:hidden">
                <RiMenu4Fill className="text-2xl"/>
            </div>
            <div className="flex items-center gap-5">
                <SenechIcon
                    style={'xl:w-10 xl:h-10 hidden xl:block'}
                />
                <Navbar
                    styleParent={'hidden xl:flex gap-5'}
                    styleChild={'text-primary font-medium'}
                />
                <p className="xl:hidden text-lg font-bold text-tertiary ml-3">Senech Autos.</p>
            </div>

            <div className="flex items-center gap-2">
                <CiHeart className="text-2xl xl:text-3xl"/>
                <Login
                styleParent={'hidden'}
                />
                <CgProfile className="xl:hidden text-2xl"/>
            </div>
        </header>
    )
}
export default Header;