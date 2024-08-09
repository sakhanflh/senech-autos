import { useState, useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { IoShieldCheckmark } from "react-icons/io5";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { inspectionsData } from '../../data/InspectionsData';
import Slider from '../../util/Slider';

const RatingBar = ({ ratings }: { ratings: string[] }) => (
    <div className="w-20 h-2 flex justify-around">
        {ratings.map((color, i) => (
            <div key={i} className={`w-3 h-full rounded-md bg-${color}`}></div>
        ))}
    </div>
);

// Komponen Section
const Section = ({ icon, label, ratings }: { icon: string, label: string, ratings: string[] }) => (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <aside className="w-6">
                <img src={icon} alt={label.toLowerCase()} />
            </aside>
            <p className="text-sm">{label}</p>
        </div>
        <RatingBar ratings={ratings} />
    </div>
);

const InspectionsCard: React.FC = () => {
    const [data, setData] = useState(inspectionsData);
    const swiperRef = useRef<SwiperClass | null>(null);

    useEffect(() => {
        setData(inspectionsData);
    }, []);

    const slides = data.map((inspection, i) => (
        <SwiperSlide key={i}>
            <div className="flex flex-col items-center justify-center text-dark ">
                <div className="py-3 flex w-[26rem] bg-slate-100 items-center justify-around rounded-md shadow-2xl">
                    <article className="w-[65%] px-5">
                        <p className="line-clamp-3 text-xs font-medium"><i>{inspection.review}</i></p>
                    </article>
                    <aside className="w-[30%] flex flex-col border-l px-5">
                        <div className="w-6 h-6 rounded-full overflow-hidden mb-1">
                            <img src={inspection.reviewerImage} alt={inspection.reviewerName} className="w-full h-full object-cover" />
                        </div>
                        <h6 className="text-xs font-semibold">{inspection.reviewerName}</h6>
                        <p className="text-xs opacity-70">{inspection.reviewerTitle}</p>
                    </aside>
                </div>

                <div className="rounded-xl overflow-hidden w-[30rem] bg-white shadow-2xl ">
                    <div className="flex border-b items-center border-slate-500 border-opacity-40">
                        <aside className="w-1/3">
                            <img src={inspection.carImage} alt={inspection.carName} />
                        </aside>
                        <div className="w-2/3">
                            <h3 className="text-xl font-semibold pl-10 line-clamp-2">{inspection.carName}</h3>
                        </div>
                    </div>

                    <div className="flex flex-col p-5 gap-3">
                        {inspection.sections.map((section, index) => (
                            <Section key={index} icon={section.icon} label={section.label} ratings={section.ratings} />
                        ))}
                    </div>
                    <div className='flex items-center gap-2 justify-center border-t p-3'>
                        <IoShieldCheckmark className='text-2xl text-tertiary' />
                        <p className='text-sm'>Checked all <span className='font-semibold'> 270 points</span></p>
                    </div>
                </div>

            </div>
        </SwiperSlide>
    ));

    const settings = {
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
        loop: true,
        navigation: {
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
        },
        pagination: {
            clickable: true,
        },
        // autoplay: true,
        slidesPerView: 1,
        spaceBetween: 30,
    };

    return (
        <div className="relative">
            <Slider slides={slides} settings={settings} ref={swiperRef} />
            <div className="custom-pag-inpection mt-4"></div>
        </div>
    );
};

export default InspectionsCard;
