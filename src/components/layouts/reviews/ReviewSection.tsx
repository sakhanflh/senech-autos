import { ReviewData } from "../../data/ReviewData";
import ReviewCard from "../../elements/Card/ReviewCard";
import { useState, useEffect } from "react";
import { Review } from "../../data/ReviewData";

const ReviewSection = () => {
    const [data, setData] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = ReviewData;
                setData(response);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="p-[5%] flex flex-wrap">
            <div>
                {isLoading ?
                    <div>Loading</div>
                    :
                    data.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
            </div>
        </section>
    );
};

export default ReviewSection;
