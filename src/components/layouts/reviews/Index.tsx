import BannerReviews from "./BannerReviews";
import ReviewSection from "./ReviewSection";

const Index = () => {
    return (
        <main className="flex overflow-x-hidden flex-col">
            <div>
                <BannerReviews />
            </div>
            <div>
                <ReviewSection/>
            </div>
        </main>
    )
}

export default Index;