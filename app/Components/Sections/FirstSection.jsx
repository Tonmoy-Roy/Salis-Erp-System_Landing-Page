"use client";
import Image from 'next/image';
import React from 'react';
import image1 from '../../../public/Dashboard Mockup 1.2 1.png';
import { motion, useMotionValue, useSpring } from "framer-motion";

const FirstSection = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const offsetX = (e.clientX - (rect.left + rect.width / 2)) / 10;
        const offsetY = (e.clientY - (rect.top + rect.height / 2)) / 10;

        x.set(offsetX);
        y.set(offsetY);
    };

    const resetPosition = () => {
        x.set(0);
        y.set(0);
    };
    return (
        <div className="min-h-screen mb-20">
            <div className="max-w-7xl mx-auto px-6 py-16 text-center md:w-[60vw]">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 ml-10 md:w-[47vw] fade-in">
                    Make Your Business Systematic And Easy To Manage
                </h1>
                <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                    We provide our clients with a wide range of services, including enterprise-wide organizational structure,
                    personnel management, task management, finance and warehouse management, and many other facilities
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:py-16 py-10 text-center md:text-left">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight md:w-[30vw]"
                            initial={{ x: 300, opacity: 0 }}   // start from LEFT
                            animate={{ x: 0, opacity: 1 }}      // move to CENTER
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        >
                            Streamline Your Business With SALIS ERP
                        </motion.h2>


                        <p className="md:w-[28.7vw] text-slate-600 text-lg leading-relaxed">
                            We The all-in-one ERP solution manages projects, HR, accounts, procurement and inventory seamlessly.
                            SALIS ERP breaks down departmental silos by integrating Finance, Inventory, HR, and Sales data in real-time.
                            Gain complete visibility, automate complex workflows, and make faster, more confident decisions from any
                            device, anywhere.
                        </p>
                    </div>
                    <div>
                        <motion.div
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight md:w-[30vw]"
                                style={{ x: smoothX, y: smoothY }}
                                onMouseMove={handleMove}
                                onMouseLeave={resetPosition}
                            >
                                <Image src={image1} alt="" className="rounded-xl " />
                            </motion.h2>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;