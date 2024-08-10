import RatingCustCard from "../../elements/Card/RatingCustCard";

const BannerReviews = () => {
    return (
        <div className=" w-full xl:h-[34rem] relative xl:mt-16" style={{ backgroundImage: `url('/img/review.jpg')`, backgroundSize: 'cover' }}>
            <div className="w-full h-full bg-gradient-to-r from-dark to-transparent p-[5%] ">
                <div className="flex flex-col mt-12 text-white gap-5 w-[30rem]">
                    <h6 className="font-medium">Carvago <span className="text-tertiary">Reviews</span></h6>
                    <h1 className="text-6xl font-semibold">What do our <span className="text-tertiary">customers</span> say about us?</h1>
                </div>
                <RatingCustCard />
            </div>
        </div>
    )
}

export default BannerReviews;