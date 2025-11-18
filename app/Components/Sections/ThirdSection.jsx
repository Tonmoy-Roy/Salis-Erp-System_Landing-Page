import React from 'react';
import features from '../../Constants/features'
import Image from 'next/image';
const ThirdSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 fade-in">
                    Why Choose SALIS Erp
                </h2>
                <p className="text-lg text-slate-600">
                    Our platform offers everything you need to run your business efficiently
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300 group
                            ${index < 3 ? 'slide-in-left' : 'slide-in-right'}
                        `}
                    >
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br rounded-full flex items-center justify-center">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-10 h-10"
                                    width={32}
                                    height={32}
                                />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 mb-3">
                            {feature.title}
                        </h3>

                        <p className="text-slate-600 leading-relaxed md:w-[16vw]">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThirdSection;