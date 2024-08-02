import Input from "./Input";
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const SearchFilter: React.FC = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [mileage, setMileage] = useState('');
    const [registration, setRegistration] = useState('');
    const [price, setPrice] = useState('');
    const [vatDeduction, setVatDeduction] = useState(false);
    return (
        <div className="p-5 xl:w-[35rem] bg-white shadow-md rounded-md">
            <div className="flex flex-wrap justify-between gap-5">
                <Input
                    type="select"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    options={[
                        { label: 'Make', value: '' },
                        { label: 'Toyota', value: 'toyota' },
                        { label: 'Honda', value: 'honda' },
                    ]}
                    styleParent="w-half xl:w-40 text-sm font-medium"
                />
                <Input
                    type="select"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    options={[
                        { label: 'Choose model', value: '' },
                        { label: 'Corolla', value: 'corolla' },
                        { label: 'Civic', value: 'civic' },
                    ]}
                    styleParent="w-half xl:w-40 text-sm font-medium"
                />
                <Input
                    type="select"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    options={[
                        { label: 'Mileage', value: '' },
                        { label: '10,000 km', value: '10000' },
                        { label: '20,000 km', value: '20000' },
                    ]}
                    styleParent="w-half xl:w-40 text-sm font-medium"
                />
                <Input
                    type="select"
                    value={registration}
                    onChange={(e) => setRegistration(e.target.value)}
                    options={[
                        { label: 'Registration', value: '' },
                        { label: '2015', value: '2015' },
                        { label: '2016', value: '2016' },
                    ]}
                    styleParent="w-half xl:w-40 text-sm font-medium"
                />
                <Input
                    type="select"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    options={[
                        { label: 'Price up to', value: '' },
                        { label: '2,000 €', value: '2000' },
                        { label: '3,000 €', value: '3000' },
                        { label: '4,000 €', value: '4000' },
                        { label: '5,000 €', value: '5000' },
                        { label: '6,000 €', value: '6000' },
                    ]}
                    styleParent="w-half xl:w-40 text-sm font-medium"
                />
                <div className="flex items-center w-half xl:w-40 gap-2">
                    <input
                        type="checkbox"
                        checked={vatDeduction}
                        onChange={(e) => setVatDeduction(e.target.checked)}
                        className=""
                    />
                    <label className="text-gray-700">VAT deduction</label>
                </div>
            </div>
            <div className="mt-5 flex flex-col-reverse xl:flex-row gap-5 xl:gap-0 justify-between items-center">
                <a href="#" className="text-tertiary font-semibold text-sm underline xl:no-underline hover:no-underline xl:hover:underline flex items-center gap-1">Advanced search <IoIosArrowForward/></a>
                <button className="bg-gradient-to-l w-full xl:w-auto shadow-tertiary drop-shadow-lg from-primary to-tertiary hover:bg-gradient-to-l hover:from-tertiary hover:to-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    1 062 374 Offers
                </button>
            </div>
        </div>
    )
}

export default SearchFilter;