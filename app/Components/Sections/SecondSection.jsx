import React from 'react';
import problems from '../../Constants/problems'
const SecondSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-16">
                Problems That Complicate Business
                <br />
                Management
            </h2>

            <div className="space-y-8 ">
                {problems.map((problem, index) => (
                    <div
                        key={index}
                        className={`flex ${problem.align === 'right' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`border rounded-2xl shadow-lg p-8 max-w-2xl w-full ${problem.align === 'right' ? 'ml-auto' : 'mr-auto'
                            }`}>
                            <div className={`flex gap-6 ${problem.align === 'right' ? 'flex-row' : ''}`}>
                                <div className="flex-shrink-0">
                                    <span className="text-7xl font-bold text-slate-200">
                                        {problem.number}
                                    </span>
                                </div>

                                <div className="hidden md:block">
                                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                                        {problem.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 md:hidden block">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {problem.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondSection;