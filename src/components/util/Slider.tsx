import React from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

interface SliderProps {
    slides: React.ReactNode[];
    settings: SwiperProps;
}

const Slider: React.FC<SliderProps> = ({ slides, settings }) => {
    return (
        <Swiper {...settings}>
            {slides.map((slideContent, i) => (
                <SwiperSlide key={i}>
                    {slideContent}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
