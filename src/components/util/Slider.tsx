import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

interface SliderProps {
    slides: React.ReactNode[];
    settings: SwiperProps;
}

const Slider = forwardRef<SwiperClass, SliderProps>(({ slides, settings }, ref) => {
    return (
        <Swiper {...settings} ref={ref as any}>
            {slides.map((slideContent, i) => (
                <SwiperSlide key={i}>
                    {slideContent}
                </SwiperSlide>
            ))}
        </Swiper>
    );
});

export default Slider;
