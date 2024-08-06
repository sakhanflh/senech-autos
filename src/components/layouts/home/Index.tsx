import HomeRating from "../../fragments/HomeRating";
import SearchFilter from "../../fragments/SearchFilter";
import CategorySlider from "./CategorySlider";
import DiscCard from "../../elements/Card/DiscCard";
import CustomNavigation from "../../elements/Button/CustomNavigation";
import { useRef } from "react";
import { SwiperClass } from "swiper/react";
import UtilityQa from "../../elements/utility/UtilityQa";
import HowDoesCard from "./HowDoesCard";
import VideoCard from "./VideoCard";

const Index = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    return (
        <main className="flex flex-col">
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
            </div>
            <div className="flex mt-56 xl:mt-0 p-5">
                <UtilityQa />
            </div>

            <section className="xl:pl-[5%] xl:px-0 px-[5%]">
                <h1 className="xl:text-4xl text-xl font-bold">Popular at Senech Auto's</h1>
                <div className="xl:mt-10 mt-5 flex flex-col xl:flex-row justify-center items-center relative">
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
            </section>

            <section className="mt-32 clip-triangle">
                <div className="flex flex-col justify-center items-center mt-32 xl:mt-32">
                    <h1 className="xl:text-4xl text-2xl font-bold z-50">How does it work?</h1>
                    <div className="w-full my-10 xl:mt-0 overflow-x-hidden">
                        <HowDoesCard />
                    </div>
                    <button className="font-semibold bg-gradient-to-l from-dark to-secondary hover:to-secondary hover:from-secondary py-3 px-8 rounded-lg text-white">
                        Want to know more?
                    </button>
                    <div className="mt-20 px-[5%]">
                        <VideoCard src={'/img/Carvago _ You choose your car online. We inspect it and deliver it..mp4'}/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Index;