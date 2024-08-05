import { useState, useEffect, useRef } from 'react';
import { CarCategoryData } from '../../data/CarCategoryData';
import CarCategory from '../../elements/Card/CarCategory';
import Slider from '../../util/Slider';
import { SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface CarCategoryProps {
    type: string;
    image: string;
    link: string;
}

const CategorySlider: React.FC = () => {
    const [data, setData] = useState<CarCategoryProps[]>([]);
    const swiperRef = useRef<SwiperClass | null>(null);

    useEffect(() => {
        setData(CarCategoryData);
    }, []);

    const slides = [
        ...data.map((cat, i) => (
            <SwiperSlide key={i}>
                <div className="xl:mx-2 -ml-4 xl:mr-0">
                    <CarCategory
                        type={cat.type}
                        image={cat.image}
                        link={cat.link}
                    />
                </div>
            </SwiperSlide>
        ))
    ];

    const settings = {
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
        loop: true,
        navigation: {
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
        },
        autoplay: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 1,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 1,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        }
    };

    return (
        <div className="relative">
            <Slider slides={slides} settings={settings} ref={swiperRef} />
        </div>
    );
};

export default CategorySlider;
