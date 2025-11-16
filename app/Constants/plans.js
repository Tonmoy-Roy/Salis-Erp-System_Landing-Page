const plans = [
    {
        name: "Starter",
        subtitle: "For small business getting started",
        price: "BDT 8500",
        billing: "Billed monthly",
        isPopular: false,
        features: [
            { text: "Up to 10 users", included: true },
            { text: "Project Management", included: true },
            { text: "Basic HR", included: true },
            { text: "Accounting", included: true },
            { text: "Procurement", included: false },
            { text: "Inventory", included: false },
            { text: "Email Support", included: true }
        ],
        buttonStyle: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
    },
    {
        name: "Professional",
        subtitle: "For growing business",
        price: "BDT 10500",
        billing: "Billed monthly",
        isPopular: true,
        features: [
            { text: "Up to 25 users", included: true },
            { text: "Project Management", included: true },
            { text: "Advanced HR", included: true },
            { text: "Accounting", included: true },
            { text: "Procurement", included: true },
            { text: "Basic Inventory", included: true },
            { text: "Priority Support", included: true }
        ],
        buttonStyle: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
    },
    {
        name: "Enterprise",
        subtitle: "For large organizations",
        price: "BDT 15500",
        billing: "Billed monthly",
        isPopular: false,
        features: [
            { text: "Unlimited users", included: true },
            { text: "Project Management", included: true },
            { text: "Advanced HR", included: true },
            { text: "Advanced Accounting", included: true },
            { text: "Procurement", included: true },
            { text: "Advanced Inventory", included: true },
            { text: "24/7 Support", included: true }
        ],
        buttonStyle: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500  hover:text-white"
    }
];
export default plans;