'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import faqs from '@/app/Constants/faqs';

const SeventhSection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };
    return (
        <div className="max-w-6xl mx-auto px-4 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12 fade-in">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-black overflow-hidden transition-all duration-300"
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-lg font-semibold text-slate-800 pr-4">
                                {faq.question}
                            </span>
                            <div className="flex-shrink-0 transition-transform duration-300 transform"
                                style={{
                                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)"
                                }}
                            >
                                {openIndex === index ? (
                                    <Minus className="w-6 h-6 text-slate-700" />
                                ) : (
                                    <Plus className="w-6 h-6 text-slate-700" />
                                )}
                            </div>

                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out ${openIndex === index
                                ? 'max-h-96 opacity-100'
                                : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="p-3">
                                <p className="text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeventhSection;