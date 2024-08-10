import { Review } from "../../data/ReviewData";
import { FaArrowRightLong } from "react-icons/fa6";

const ReviewCard = ({ certified, name, image, star, review, carName, logo }: Review) => {
    return (
        <div className="w-96 flex flex-col bg-blue-100">
            <div>
                <img src={image} alt={carName} />
            </div>
            <div className="p-5">
                <p>{certified}</p>
                <p>{name}</p>
                <div>{star}</div>
                <p>{review}</p>
            </div>
            <div className="flex">
                <div>
                    <img src={logo} alt="car logo" />
                </div>
                <div>
                    <p>{carName}</p>
                    <p className="flex items-center">Show similiar cars <FaArrowRightLong/></p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;