import { useState, useEffect } from 'react';
import { CarCategoryData } from '../../data/CarCategoryData';
import CarCategory from '../../elements/Card/CarCategory';
import Slider from '../../util/Slider';
import { SwiperSlide } from 'swiper/react';
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

    useEffect(() => {
        setData(CarCategoryData);
    }, []);

    const slides = data.map((cat: CarCategoryProps, i: number) => (
        <SwiperSlide key={i}>
            <CarCategory
                type={cat.type}
                image={cat.image}
                link={cat.link}
            />
        </SwiperSlide>
    ));

    const settings = {
        modules: [Navigation, Pagination, Scrollbar, A11y],
        spaceBetween: 50,
        slidesPerView: 5,
        loop: true,
        navigation: true,
    };

    return (
        <div>
            <Slider slides={slides} settings={settings} />
        </div>
    );
};

export default CategorySlider;
