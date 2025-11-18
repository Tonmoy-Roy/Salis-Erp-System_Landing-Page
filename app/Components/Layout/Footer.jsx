import Image from 'next/image';
import React from 'react';
import phone from '../../../images/Container.png';
import botomicon from '../../../images/bottom icon.png';
import location from '../../../images/Container1.png';
import estimate from '../../../images/Container3.png';
import services from '@/app/Constants/services';
import company from '@/app/Constants/company';
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import TermsModal from '../Sections/TermsModal';
import PrivacyModal from '../Sections/PrivacyModal';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-orange-200 to-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-bold text-slate-800 mb-4">
                            Grow Your Online Business and Improve Customer Retention
                        </h3>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                    <Image
                                        src={phone}
                                        alt=''
                                        className=''
                                    />
                                </div>
                                <span className="text-slate-700 font-semibold">+880 1537-570379</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Image
                                        src={location}
                                        alt=''
                                        className=''
                                    />
                                </div>
                                <span className="text-slate-700">
                                    House D/36, Block E, Lalmatia,<br />Dhaka-1207
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                    <Image
                                        src={estimate}
                                        alt=''
                                        className=''
                                    />
                                </div>
                                <span className="text-orange-500 font-semibold">Get Estimate</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <a href="#" className="text-slate-800 hover:text-orange-500 transition-colors">
                                <FaFacebook className='w-5 h-5' />
                            </a>
                            <a href="#" className="text-slate-800 hover:text-orange-500 transition-colors">
                                <RiTwitterXLine className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-800 hover:text-orange-500 transition-colors">
                                <FaYoutube className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-800 hover:text-orange-500 transition-colors">
                                <FaLinkedinIn className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-800 hover:text-orange-500 transition-colors">
                                <FaDribbble className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-800 hover:text-orange-500 transition-colors">
                                <FaPinterestP className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-4">Services</h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href="#" className="text-slate-700 hover:text-orange-500 transition-colors flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-4">Company</h3>
                        <ul className="space-y-2">
                            {company.map((item, index) => (
                                <li key={index}>

                                    {item === "Terms & Conditions" && <TermsModal>{item}</TermsModal>}
                                    {item === "Privacy Policy" && <PrivacyModal>{item}</PrivacyModal>}
                                    {item !== "Terms & Conditions" && item !== "Privacy Policy" && (
                                        <a
                                            href="#"
                                            className="text-slate-700 hover:text-orange-500 transition-colors flex items-center gap-1"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            {item}
                                        </a>
                                    )}

                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-4">Contact Us</h3>
                        <p className="text-slate-700 text-sm mb-4 md:w-[25vw]">
                            If you have questions or concerns about this Privacy Policy, please contact us:
                        </p>
                        <div className="space-y-2 text-sm">
                            <p className="text-slate-700">
                                <span className="font-semibold">Email:</span> info@deshit-bd.com
                            </p>
                            <p className="text-slate-700">
                                <span className="font-semibold">Phone:</span> +880 1537-570379
                            </p>
                            <p className="text-slate-700">
                                <span className="font-semibold">Website:</span> www.deshit-bd.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower footer text */}
            <div className="pt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-700">
                <div className="flex gap-6 flex-wrap justify-center items-center">
                    <p>© 2025 DeshITBD.ltd</p>

                    <div>
                        <a href="#" className="hover:text-orange-500 transition-colors mr-1">Sitemap</a>
                        <span className='mr-1'>|</span>
                        <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                    </div>

                    <a href="#" className="hover:text-orange-500 transition-colors">Download Brochure: English</a>
                    <a href="#" className="hover:text-orange-500 transition-colors">info@deshit-bd.com</a>
                </div>
            </div>

            <Image
                src={botomicon} 
                alt=""
                className="absolute bottom-0 right-0 w-30 md:w-42 lg:w-40 pointer-events-none select-none"
            />
        </footer>

    );
};

export default Footer;