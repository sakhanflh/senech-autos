import { FaStar, FaStarHalf } from "react-icons/fa";
const RatingCustCard = () => {
    return (
        <div className="p-5 xl:px-20 xl:py-8 right-16 shadow-xl -bottom-20 bg-white border rounded-lg absolute">
            <div className="flex items-center">
                <div className="flex flex-col items-center gap-1">
                    <span className="flex xl:text-4xl text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </span>
                    <p className="text-sm font-semibold text-dark">1767 Reviews</p>
                </div>
                <h1 className="text-5xl font-bold  text-tertiary">4.8</h1>
            </div>
            <p className="pt-3 font-semibold text-dark">“If you're not happy, neither are we!”</p>
        </div>
    )
}

export default RatingCustCard;