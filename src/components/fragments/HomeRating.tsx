import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const HomeRating = () => {
    return (
        <div className="flex items-center gap-2">
            <p className="text-3xl font-bold">4.8</p>
            <span className="flex text-xl text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
            </span>
            <div className="flex items-center hover:underline text-sm">
                <p>1528 Reviews</p>
                <IoIosArrowForward />
            </div>
        </div>
    )
}

export default HomeRating;