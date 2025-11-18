import Image from 'next/image';
import React from 'react';
import modules from '@/app/Constants/modules';
import { FaArrowRightLong } from "react-icons/fa6";

const FourthSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 mb-20">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                    Comprehensive ERP Modules
                </h2>
                <p className="text-lg text-slate-600">
                    Integrated functionality to manage every facet of your organization
                </p>
            </div>

            {/* Modules Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col text-center"
                    >
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br rounded-full flex items-center justify-center">
                                <Image
                                    src={module.icon}
                                    alt=''
                                    className=''
                                />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                            {module.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed text-center mb-6 md:w-[17.5vw] mx-auto">
                            {module.description}
                        </p>

                        {/* Read More Button */}
                        <div className="text-center">
                            <button className="group inline-flex items-center gap-1 font-semibold hover:text-orange-600 transition-colors relative">
                                READ MORE

                                <svg
                                    className="w-4 h-4 transform transition-all duration-300 group-hover:translate-x-1 opacity-100 group-hover:opacity-0 absolute right-0"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>

                                <span className="w-5 h-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                                    <FaArrowRightLong />
                                </span>
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default FourthSection;