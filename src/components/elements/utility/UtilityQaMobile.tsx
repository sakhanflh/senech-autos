import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { BsAward } from "react-icons/bs";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

const qaData = [
    {
        id: 1,
        icon: <GiReceiveMoney className="text-2xl" />,
        title: "Money back guarantee",
        question: "Can I really return the car?",
        answer: (
            <div className="text-sm flex flex-col gap-2">
                <p><span className="font-semibold">Of course, you can.</span> We trust our service and know that <span className="font-semibold">we only sell inspected vehicles in excellent technical condition.</span> Together with our customers we are fighting for better vehicles on roads.</p>
                <p><span className="font-semibold">Senech Auto's, therefore, always assumes all risks connected with the vehicle.</span> And if you simply don't like the car, <span className="font-semibold">you can return it to us up to 14 days after receiving it.</span></p>
            </div>
        ),
    },
    {
        id: 2,
        icon: <AiOutlineSafety className="text-2xl" />,
        title: "Safe Purchase",
        question: "You don`t risk anything buying",
        answer: (
            <div className="text-sm flex flex-col gap-2">
                <p><span className="font-semibold">Senech Auto`s is the safest way of buying a used car.</span> Before each purchase we first of all carefully examine the chosen car and <span className="font-semibold">you then decide on the basis of its current condition </span> and our recommendation.</p>
                <p>You always sign the contract with Carvago, so <span className="font-semibold">all guarantees are provided by us - you only need to buy the car, in your native language.</span> </p>
                <p>Wherever the car is from, you always make the payment to a local account in your local curency.</p>
            </div>
        ),
    },
    {
        id: 3,
        icon: <BsAward className="text-2xl" />,
        title: "6-month warranty",
        question: "You receive an extended warranty on the car",
        answer: (
            <div className="text-sm flex flex-col gap-2">
                <p>For even greater peace of mind, aside from the warranty for hidden defects, you also have from us an <span className="font-semibold"> extended 6-month warranty on the essentials</span> - the engine, gearbox and differential.</p>
                <p>If you want even more, you can choose a longer period of coverage for other parts of the vehicle in the order.</p>
            </div>
        ),
    },
];

const UtilityQaMobile = () => {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const handleOpen = (id: number) => {
        setOpenSection(openSection === id ? null : id);
    };

    return (
        <div className="rounded-lg text-dark bg-slate-300 flex flex-col w-full">
            {qaData.map(({ id, icon, title, question, answer }) => (
                <div key={id} className="flex flex-col">
                    <div
                        className="items-center justify-between flex p-3 border-b border-slate-400 border-opacity-70 cursor-pointer"
                        onClick={() => handleOpen(id)}
                    >
                        <div className="flex items-center gap-3">
                            {icon}
                            <h1 className="font-semibold">{title}</h1>
                        </div>
                        <div className="text-secondary flex">
                            {openSection === id ? <FaMinusCircle /> : <FaPlusCircle />}
                        </div>
                    </div>
                    <div className={`bg-slate-100 flex flex-col gap-2 transition-all duration-200 ${openSection === id ? 'p-3 border-b border-slate-400 border-opacity-80' : 'h-0 overflow-hidden opacity-0'}`}>
                        <h6 className="font-semibold">{question}</h6>
                        {answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UtilityQaMobile;
