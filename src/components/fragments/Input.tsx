import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface InputProps {
    label?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'date' | 'checkbox' | 'radio' | 'select';
    placeholder?: string;
    value?: string | number | readonly string[] | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    name?: string;
    checked?: boolean;
    options?: { label: string; value: string | number }[];
    styleParent?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, value, onChange, name, checked, options, styleParent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        if (type === 'select') {
            setIsOpen(prev => !prev);
        }
    };

    return (
        <div className={`relative ${styleParent}`}>
            {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
            {type === 'select' ? (
                <div className="relative">
                    <select
                        value={value}
                        onChange={onChange}
                        name={name}
                        onClick={handleToggle}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline pr-10"
                    >
                        {options?.map((option) => (
                            <option key={option.value} className='text-sm overflow-scroll' value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                            }`}
                    >
                        <FaChevronDown className="text-gray-500" />
                    </div>
                </div>
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={type === 'checkbox' || type === 'radio' ? undefined : value}
                    onChange={onChange}
                    name={name}
                    checked={type === 'checkbox' || type === 'radio' ? checked : undefined}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            )}
        </div>
    );
};

export default Input;
