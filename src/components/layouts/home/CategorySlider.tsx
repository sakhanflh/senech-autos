import { useState, useEffect, useRef } from 'react';
import { CarCategoryData } from '../../data/CarCategoryData';
import CarCategory from '../../elements/Card/CarCategory';
import Slider from '../../util/Slider';
import { SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

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
                <div className="xl:mx-2 mx-20">
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
        modules: [Navigation, Pagination, Scrollbar, A11y],
        spaceBetween: 10,
        loop: true,
        navigation: {
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
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
