"use client"

import React from 'react';
import { Check, X } from 'lucide-react';
import plans from '@/app/Constants/plans';
import { motion } from "framer-motion";


const FifthSection = () => {
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: {
            x: -120,
            opacity: 0,
            scale: 0.92
        },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    return (
        <div className="max-w-6xl mx-auto px-4 mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 fade-in">
                    Simple,Transparent Pricing
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                    Choose the plan that fits your business needs
                </p>
                <p className="text-orange-500 font-semibold text-lg">
                    One-time installation fee: Flexible (depends on company requirements)
                </p>
            </div>

            <motion.div
                className="grid md:grid-cols-3 gap-6 items-start"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className={`bg-white rounded-2xl shadow-lg p-8 relative ${plan.isPopular ? "border-4 border-orange-500" : "border border-gray-200"
                            }`}
                    >
                        {plan.isPopular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-orange-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">
                            {plan.name}
                        </h3>
                        <p className="text-slate-600 text-center mb-6">{plan.subtitle}</p>

                        <div className="text-center mb-2">
                            <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                            <span className="text-slate-600"> /month</span>
                        </div>
                        <p className="text-slate-500 text-center text-sm mb-8">{plan.billing}</p>

                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    {feature.included ? (
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    ) : (
                                        <X className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                    )}
                                    <span className={feature.included ? "text-slate-700" : "text-slate-400"}>
                                        {feature.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}
                        >
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    );
};

export default FifthSection;