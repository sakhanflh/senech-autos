export interface SectionData {
    label: string;
    icon: string;
    ratings: string[];  // Array untuk menyimpan warna-warna RatingBar
}

export interface InspectionData {
    id: number;
    review: string;
    reviewerName: string;
    reviewerTitle: string;
    reviewerImage: string;
    carImage: string;
    carName: string;
    sections: SectionData[];
}

export const inspectionsData: InspectionData[] = [
    {
        id: 1,
        review: '"Car in the striking Blue Mamba paint. Very good condition, technically in perfect order"',
        reviewerName: "Martin P.",
        reviewerTitle: "Mechanic",
        reviewerImage: "/img/profile-pic-2.jpg",
        carImage: "/img/civic-1.jpg",
        carName: "Honda Civic 2022",
        sections: [
            { label: "Exterior", icon: "/img/icons8-car-50.png", ratings: ["dark", "primary", "secondary", "secondary", "tertiary"] },
            { label: "Interior", icon: "/img/icons8-car-seat-50.png", ratings: ["dark", "primary", "secondary", "tertiary", "tertiary"] },
            { label: "Engine", icon: "/img/icons8-engine-50.png", ratings: ["dark", "secondary", "secondary", "primary", "tertiary"] },
            { label: "Testdrive", icon: "/img/icons8-road-50.png", ratings: ["primary", "primary", "secondary", "secondary", "dark"] },
            { label: "Chassis", icon: "/img/icons8-wheel-50.png", ratings: ["secondary", "dark", "primary", "tertiary", "secondary"] },
        ],
    },
    {
        id: 2,
        review: '"This Supra MK4 is in excellent condition with no known mechanical issues"',
        reviewerName: "Noval",
        reviewerTitle: "Engineer",
        reviewerImage: "/img/profile-pic-2.jpg",
        carImage: "/img/supramk4.jpg",
        carName: "Toyota Supra MK4",
        sections: [
            { label: "Exterior", icon: "/img/icons8-car-50.png", ratings: ["primary", "secondary", "tertiary", "primary", "dark"] },
            { label: "Interior", icon: "/img/icons8-car-seat-50.png", ratings: ["secondary", "dark", "primary", "secondary", "tertiary"] },
            { label: "Engine", icon: "/img/icons8-engine-50.png", ratings: ["primary", "tertiary", "secondary", "dark", "primary"] },
            { label: "Testdrive", icon: "/img/icons8-road-50.png", ratings: ["secondary", "primary", "tertiary", "dark", "primary"] },
            { label: "Chassis", icon: "/img/icons8-wheel-50.png", ratings: ["tertiary", "dark", "secondary", "primary", "secondary"] },
        ],
    },
    {
        id: 3,
        review: '"The BMW E36 is a versatile Sedan, perfect for both city driving"',
        reviewerName: "John Doe",
        reviewerTitle: "Specialist",
        reviewerImage: "/img/profile-pic-2.jpg",
        carImage: "/img/bmw-e36.jpeg",
        carName: "BMW E36",
        sections: [
            { label: "Exterior", icon: "/img/icons8-car-50.png", ratings: ["dark", "secondary", "tertiary", "primary", "primary"] },
            { label: "Interior", icon: "/img/icons8-car-seat-50.png", ratings: ["secondary", "primary", "dark", "tertiary", "primary"] },
            { label: "Engine", icon: "/img/icons8-engine-50.png", ratings: ["primary", "secondary", "dark", "tertiary", "primary"] },
            { label: "Testdrive", icon: "/img/icons8-road-50.png", ratings: ["primary", "tertiary", "secondary", "dark", "secondary"] },
            { label: "Chassis", icon: "/img/icons8-wheel-50.png", ratings: ["tertiary", "primary", "dark", "secondary", "secondary"] },
        ],
    },
];
