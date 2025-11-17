"use client";
import { useState } from "react";

export default function PrivacyModal({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="text-slate-700 hover:text-orange-500 transition-colors flex items-center gap-1"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {children}
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl max-h-[90vh] overflow-auto relative">

                        <button
                            className="absolute top-2 right-2 text-black text-xl"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>

                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Privacy Policy : SALiS ERP Software
                            </h1>
                            <p className="text-lg text-gray-600">
                                Effective Date: <strong>1st November 2024</strong>
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 space-y-10">
                            <section className="text-lg text-gray-700 leading-relaxed">
                                <p>
                                    SALiS (“we”, “our”, or “us”) values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website{' '}
                                    <a href="https://www.deshit-bd.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                        www.deshit-bd.com
                                    </a>{' '}
                                    and use our ERP software services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-5">1. Information We Collect</h2>
                                <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
                                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                                    <li>
                                        <strong>Personal Information:</strong> Name, email address, phone number, company name, and billing information when you contact us, request a demo, or purchase our services.
                                    </li>
                                    <li>
                                        <strong>Usage Data:</strong> IP address, browser type, operating system, pages visited, and time spent on our website.
                                    </li>
                                    <li>
                                        <strong>Cookies & Tracking:</strong> Information collected through cookies, analytics, and other tracking technologies to improve user experience and website performance.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-5">2. How We Use Your Information</h2>
                                <p className="text-gray-700 mb-4">We use collected information for purposes including:</p>
                                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                                    <li>Providing, managing, and improving our ERP software services.</li>
                                    <li>Communicating with clients about updates, support, and promotions.</li>
                                    <li>Processing payments and managing subscriptions.</li>
                                    <li>Enhancing user experience and personalizing content.</li>
                                    <li>Ensuring website security and preventing fraudulent activity.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-5">3. Data Sharing & Disclosure</h2>
                                <p className="text-gray-700 mb-4">
                                    We <strong>do not sell or rent</strong> your personal information to third parties. Your data may be shared in the following cases:
                                </p>
                                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                                    <li>With trusted service providers who help us operate our business (e.g., payment processors, cloud hosting).</li>
                                    <li>When required by law or to protect our legal rights.</li>
                                    <li>In connection with business transfers, mergers, or acquisitions.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-5">4. Data Security</h2>
                                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                                    <li>We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.</li>
                                    <li>While we strive to secure your information, <strong>no method of transmission over the Internet is 100% secure</strong>.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-5">5. Data Retention</h2>
                                <p className="text-lg text-gray-700">
                                    We retain your personal information <strong>only as long as necessary</strong> to provide services, comply with legal obligations, resolve disputes, and enforce agreements.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-5">6. Your Rights</h2>
                                <p className="text-gray-700 mb-4">You have the right to:</p>
                                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                                    <li>Access, update, or request deletion of your personal information.</li>
                                    <li>Opt-out of marketing communications.</li>
                                    <li>Raise concerns regarding the use of your data.</li>
                                </ul>
                                <p className="mt-4 text-gray-700">
                                    To exercise your rights, contact us at{' '}
                                    <a href="mailto:info@deshit-bd.com" className="text-blue-600 hover:underline font-medium">
                                        info@deshit-bd.com
                                    </a>
                                    .
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-5">7. Cookies</h2>
                                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                                    <li>Our website uses cookies to enhance user experience, analyze website traffic, and deliver personalized content.</li>
                                    <li>You may disable cookies in your browser settings, but some features of the site may not function properly.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-5">8. Third-Party Links</h2>
                                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                                    <li>Our website may contain links to third-party websites.</li>
                                    <li>We are not responsible for the privacy practices or content of these external sites.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-5">9. Changes to Privacy Policy</h2>
                                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                                    <li>We may update this Privacy Policy from time to time.</li>
                                    <li>Any significant changes will be communicated on our website with the updated effective date.</li>
                                </ul>
                            </section>

                            <div className="mt-16 pt-10 border-t-2 border-gray-300">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
                                    <div>
                                        <p><strong>Email:</strong>{' '}
                                            <a href="mailto:info@deshit-bd.com" className="text-blue-600 hover:underline">
                                                info@deshit-bd.com
                                            </a>
                                        </p>
                                        <p><strong>Phone:</strong> +880 1537-570379</p>
                                    </div>
                                    <div>
                                        <p><strong>Office Address:</strong> House D/36, Block E, Lalmatia, Dhaka-1207</p>
                                        <p><strong>Website:</strong>{' '}
                                            <a href="https://www.deshit-bd.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                www.deshit-bd.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
