import { useMediaQuery } from 'react-responsive';
import Slider from '../../util/Slider';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HowDoesCard = () => {
    const data = [
        {
            id: 1,
            number: '01.',
            heading: 'Choose anywhere in Europe',
            desc: 'No more compromises! With us, you have an unrivaled selection of cars in one place.',
            img: 'public/img/how-it-works-mobile-1-2x.webp',
        },
        {
            id: 2,
            number: '02.',
            heading: 'We`ll inspect the car closely',
            desc: 'A certified mechanic will thoroughly inspect your car. You will decide according to the result after.',
            img: 'public/img/how-it-works-mobile-2-2x.webp'
        },
        {
            id: 3,
            number: '03.',
            heading: 'We`ll deliver it to your home',
            desc: 'We arrange all the paperwork, registration and delivery. All you need to do is enjoy your new car.',
            img: 'public/img/how-it-works-mobile-3-2x.webp'
        }
    ];

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const slides = data.map(({ id, number, heading, desc, img }) => (
        <div className="flex flex-col gap-5" key={id}>
            <div className="h-56">
                <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 text-dark px-4">
                <h6 className="font-bold text-tertiary">{number}</h6>
                <h1 className="font-bold text-xl">{heading}</h1>
                <p className="text-sm">{desc}</p>
            </div>
        </div>
    ));

    const sliderSettings = {
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: {
            clickable: true,
        },
        autoplay: true,
    };

    return (
        <div className="p-[5%]">
            {isMobile ? (
                <Slider slides={slides.map((slide, index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))} settings={sliderSettings} />
            ) : (
                <div className="flex gap-4">
                    {slides}
                </div>
            )}
        </div>
    );
}

export default HowDoesCard;
