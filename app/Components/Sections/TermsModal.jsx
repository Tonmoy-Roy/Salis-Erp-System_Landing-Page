"use client";
import { useState } from "react";

export default function TermsModal({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Trigger */}
            <button
                onClick={() => setOpen(true)}
                className="text-slate-700 hover:text-orange-500 transition-colors flex items-center gap-1"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {children}
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl max-h-[90vh] overflow-auto relative">

                        {/* Close button */}
                        <button
                            className="absolute top-2 right-2 text-black text-xl"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>

                        {/* Your Terms Image */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Terms & Conditions : ERP Software
                            </h1>
                            <h2 className="text-3xl font-semibold text-orange-600">Plans (SALiS)</h2>
                        </div>

                        {/* Main Content */}
                        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 space-y-10">
                            {/* Section 1 */}
                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Installation & Setup</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                    <li>A one-time installation fee applies and is flexible, depending on company requirements and complexity.</li>
                                    <li>The first month includes training by SALiS to ensure your team is familiar with the ERP system.</li>
                                </ul>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">2. On-Site Support / Extra Charges</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                    <li>If SALiS personnel need to visit your office/shop for setup, troubleshooting, or customization, extra charges may apply based on the scope of work, travel distance, and time required.</li>
                                    <li>Additional training sessions conducted on-site beyond the first-month training may incur extra charges.</li>
                                    <li>Any custom feature requests or third-party integrations requiring on-site implementation will be billed separately.</li>
                                    <li>Travel, accommodation, and other logistics costs for on-site visits outside Dhaka may be charged to the client.</li>
                                    <li>Urgent or emergency visits may attract priority service charges.</li>
                                </ul>
                            </section>

                            {/* Section 3 - Pricing */}
                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Subscription & Billing</h3>
                                <ul className="space-y-3 text-gray-700 text-lg">
                                    <li>Plans are billed <strong>monthly</strong> according to the selected plan:</li>
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-4 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">Starter:</span>
                                            <span className="text-xl font-bold text-orange-600">BDT 8,500 /month</span>
                                        </div>
                                        <p className="text-sm text-gray-600 ml-4">Up to 10 users</p>

                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">Professional:</span>
                                            <span className="text-xl font-bold text-orange-600">BDT 10,500 /month</span>
                                        </div>
                                        <p className="text-sm text-gray-600 ml-4">Up to 25 users</p>

                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">Enterprise:</span>
                                            <span className="text-xl font-bold text-orange-600">BDT 15,500 /month</span>
                                        </div>
                                        <p className="text-sm text-gray-600 ml-4">Unlimited users</p>
                                    </div>
                                    <li className="mt-4">Upgrading or downgrading plans during a billing cycle will be billed pro-rate for the remaining period.</li>
                                </ul>
                            </section>

                            {/* Section 4 */}
                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">4. User Access & Limits</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                    <li>User limits are defined by the chosen plan.</li>
                                    <li>Any additional users beyond the plan limit may incur extra charges.</li>
                                </ul>
                            </section>

                            {/* Section 5 - Support */}
                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">5. Support</h3>
                                <ul className="space-y-3 text-gray-700 text-lg">
                                    <li>Support type depends on the plan:</li>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                                            <p className="font-semibold text-blue-800">Starter</p>
                                            <p className="text-sm">Email Support</p>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                                            <p className="font-semibold text-green-800">Professional</p>
                                            <p className="text-sm">Priority Support</p>
                                        </div>
                                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                                            <p className="font-semibold text-purple-800">Enterprise</p>
                                            <p className="text-sm">24/7 Support</p>
                                        </div>
                                    </div>
                                    <li>Support requests are handled during business hours unless otherwise specified for Enterprise clients.</li>
                                </ul>
                            </section>

                            {/* Sections 6 to 11 */}
                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">6. Data & Security</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                    <li>SALiS ensures that all client data is stored securely.</li>
                                    <li>Clients are responsible for maintaining the confidentiality of login credentials.</li>
                                    <li>SALiS is not responsible for data loss due to client negligence or misuse.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">7. Training</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                    <li>The first month includes comprehensive training for your team.</li>
                                    <li>Additional training sessions requested after the first month will incur extra charges depending on duration and location.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">8. Additional Features / Customization</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                    <li>Any features or modules not included in the selected plan may require extra charges.</li>
                                    <li>Third-party integrations or custom development will be quoted and billed separately.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">9. Termination & Refunds</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                    <li>Clients may terminate their subscription with <strong>30 days’ notice</strong>.</li>
                                    <li>No refund is available for the monthly subscription already billed.</li>
                                    <li>Any installation or customization fees already paid are non-refundable.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">10. Limitation of Liability</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                    <li>SALiS is not liable for any indirect, incidental, or consequential losses arising from the use of the ERP software.</li>
                                    <li>Clients are responsible for backup and data management on their side.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">11. Modifications</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                    <li>SALiS reserves the right to update plans, features, or terms.</li>
                                    <li>Clients will be notified in advance of any major changes.</li>
                                </ul>
                            </section>

                            {/* Contact Information */}
                            <div className="mt-16 pt-10 border-t-2 border-gray-300">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                                    <div>
                                        <p><strong>Email:</strong> <a href="mailto:info@deshit-bd.com" className="text-blue-600 hover:underline">info@deshit-bd.com</a></p>
                                        <p><strong>Phone:</strong> +880 1537-570379</p>
                                    </div>
                                    <div>
                                        <p><strong>Office Address:</strong> House D/36, Block E, Lalmatia, Dhaka-1207</p>
                                        <p><strong>Website:</strong> <a href="https://www.deshit-bd.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.deshit-bd.com</a></p>
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
