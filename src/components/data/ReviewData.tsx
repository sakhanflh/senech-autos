import { FaStar } from "react-icons/fa6";

export interface Review {
    id: number;
    certified: any;
    name: string;
    image: string;
    star: JSX.Element;
    review: string;
    carName: string;
    logo: string;
}

export const ReviewData: Review[] = [
    {
        id: 1,
        certified: 'VERIFIED REVIEW',
        name: 'John Doe',
        image: 'https://imgx.gridoto.com/crop/0x0:0x0/750x500/photo/gridoto/2018/04/20/3564423146.jpeg',
        star: <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>,
        review: "Buying a car on Senech Auto's was simply a pleasure. Everything went smoothly, I always knew what stage the car was in and what would happen next. Excellent communication with everyone at Senech Auto's, they are just great. The car was delivered in great condition, exactly as described by the mechanic in the car audit. The car is beautiful and thanks a lot to all of you at Senech Auto's My dream came true and it was the best...birthday present!!!! Regards, your fan 😊",
        carName: 'BMW E36 • 1999',
        logo: 'https://img.icons8.com/color/48/bmw.png'
    },
    {
        id: 2,
        certified: 'VERIFIED REVIEW',
        name: 'Jane Smith',
        image: 'https://i.pinimg.com/originals/7c/cc/29/7ccc29e64078593d6ec5b1b81b4b8a13.jpg',
        star: <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>,
        review: "Senech Auto's made the process of buying my new car smooth and easy. The staff was knowledgeable, friendly, and answered all my questions. The car was delivered in perfect condition, and I couldn't be happier with my purchase.",
        carName: 'Audi A4 • 2020',
        logo: 'https://img.icons8.com/color/48/audi.png'
    },
    {
        id: 3,
        certified: null,
        name: 'Michael Johnson',
        image: 'https://i.pinimg.com/originals/6d/d1/78/6dd1780d6164c2843b5b36bcf3a04cc2.jpg',
        star: <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>,
        review: "The car buying experience was decent, but I encountered some delays in communication. The car itself was in good condition, and I'm satisfied overall.",
        carName: 'Toyota Corolla • 2018',
        logo: 'https://img.icons8.com/color/48/toyota.png'
    },
    {
        id: 4,
        certified: 'VERIFIED REVIEW',
        name: 'Emily Davis',
        image: 'https://st4.depositphotos.com/13425130/24284/i/450/depositphotos_242841970-stock-photo-outdoor-portrait-young-beautiful-woman.jpg',
        star: <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>,
        review: "Exceptional service from start to finish. The team at Senech Auto's went above and beyond to ensure I was satisfied with my purchase. I highly recommend them!",
        carName: 'Mercedes-Benz C-Class • 2021',
        logo: 'https://img.icons8.com/color/48/mercedes-benz.png'
    },
    {
        id: 5,
        certified: null,
        name: 'Chris Brown',
        image: 'https://image.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg',
        star: <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>,
        review: "The buying process was okay, but there were some issues with the paperwork. The car is good, but the experience could have been better.",
        carName: 'Ford Mustang • 2017',
        logo: 'https://img.icons8.com/color/48/ford.png'
    },
    {
        id: 6,
        certified: 'VERIFIED REVIEW',
        name: 'Jessica Lee',
        image: 'https://media.istockphoto.com/id/1152653981/photo/portrait-of-a-cheerful-young-woman-standing-outdoors.jpg?s=612x612&w=0&k=20&c=ViTu6mX4OsoQJ2X_0C2U0OgnJ8xygjizP4Rk4u-LLxU=',
        star: <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>,
        review: "Senech Auto's provided a fantastic car buying experience. The customer service was excellent, and the car was delivered on time. I would definitely buy from them again.",
        carName: 'Honda Civic • 2019',
        logo: 'https://img.icons8.com/color/48/honda.png'
    },
    {
        id: 7,
        certified: null,
        name: 'Daniel Wilson',
        image: 'https://cdn.pixabay.com/photo/2016/03/27/21/05/man-1284504_960_720.jpg',
        star: <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>,
        review: "Good experience overall, but I had some issues with the delivery timing. The car is as expected and I am happy with it.",
        carName: 'Nissan Altima • 2021',
        logo: 'https://img.icons8.com/color/48/nissan.png'
    },
    {
        id: 8,
        certified: 'VERIFIED REVIEW',
        name: 'Laura Martinez',
        image: 'https://static8.depositphotos.com/1054149/808/i/450/depositphotos_8085893-stock-photo-happy-woman.jpg',
        star: <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>,
        review: "I'm very pleased with my purchase from Senech Auto's. The car was in excellent condition and the service was top-notch. Highly recommended!",
        carName: 'Chevrolet Camaro • 2019',
        logo: 'https://img.icons8.com/color/48/chevrolet.png'
    },
    {
        id: 9,
        certified: null,
        name: 'Robert King',
        image: 'https://image.shutterstock.com/image-photo/portrait-smiling-young-man-city-260nw-1191405091.jpg',
        star: <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>,
        review: "Decent service, but I had some concerns with the car's condition upon delivery. The team addressed my issues promptly, but it could have been handled better.",
        carName: 'Jeep Wrangler • 2018',
        logo: 'https://img.icons8.com/color/48/jeep.png'
    },
    {
        id: 10,
        certified: 'VERIFIED REVIEW',
        name: 'Sophie Lewis',
        image: 'https://www.shutterstock.com/image-photo/portrait-smiling-young-woman-white-260nw-1780833349.jpg',
        star: <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>,
        review: "Buying my car from Senech Auto's was the best decision I made. The service was exceptional, and the car is perfect. Thank you!",
        carName: 'Tesla Model 3 • 2022',
        logo: 'https://img.icons8.com/color/48/tesla.png'
    }
];
