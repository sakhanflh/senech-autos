import HomeRating from "../../fragments/HomeRating";
import SearchFilter from "../../fragments/SearchFilter";
import UtilityQa from "../../elements/utility/UtilityQa";
import CategorySlider from "./CategorySlider";
import DiscCard from "../../elements/Card/DiscCard";
import CustomNavigation from "../../elements/Button/CustomNavigation";
import { useRef } from "react";
import { SwiperClass } from "swiper/react";

const Index = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    return (
        <main>
            <div className="w-full flex flex-col gap-10 pt-28 p-[5%] h-96 text-white reviewImgMobile lg:w-full  lg:h-[40rem] xl:h-[40rem] reviewImg xl:w-full ">
                <div className="xl:w-[40rem] ">
                    <h1 className="xl:text-[41px] text-[23px] font-semibold">You choose your car online. We inspect it and deliver it.</h1>
                </div>
                <div className="">
                    <SearchFilter />
                </div>
                <div className="ml-10">
                    <HomeRating />
                </div>
                <div className="hidden xl:flex">
                    <UtilityQa />
                </div>
            </div>

            <div className="xl:pl-[5%] xl:px-0 px-[5%] xl:mt-32 mt-60">
                <h1 className="xl:text-4xl text-xl font-bold">Popular at Senech Auto's</h1>
                <div className="xl:mt-10 mt-5 flex flex-col xl:flex-row justify-center items-center">
                    <div className="">
                        <DiscCard />
                    </div>
                    <div className="w-full mt-5 xl:mt-0 overflow-x-hidden">
                        <CustomNavigation
                            onPrevClick={() => swiperRef.current?.slidePrev()}
                            onNextClick={() => swiperRef.current?.slideNext()}
                        />
                        <CategorySlider />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Index;