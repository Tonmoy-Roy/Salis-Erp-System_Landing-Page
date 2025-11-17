"use client"
import React, { useState, useEffect } from 'react';
import testimonials from '../../Constants/testimonials ';
import Image from 'next/image';
import quote from "../../../images/icon quote.png";

const SixthSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="max-w-6xl mx-auto px-6 mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                    What Our Customers Say
                </h2>
                <p className="text-lg text-slate-700">
                    See why leading companies trust our software to unify their operations and drive profitability.
                </p>
            </div>

            <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-8 right-8">
                        <Image
                            src={quote}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="flex-shrink-0">
                            <div className="h-60 w-60 rounded-2xl overflow-hidden shadow-lg bg-white">
                                <Image
                                    src={testimonials[currentSlide].logo}
                                    alt={testimonials[currentSlide].company}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                                {testimonials[currentSlide].company}
                            </h3>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                `{testimonials[currentSlide].testimonial}`
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                                        ? 'bg-slate-700 w-8'
                                        : 'bg-slate-400 hover:bg-slate-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixthSection;
