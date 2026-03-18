const plans = [
  {
    name: "Starter",
    price: "$19/mo",
    features: ["5 Projects", "Basic Analytics", "Email Support"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$49/mo",
    features: ["25 Projects", "Advanced Analytics", "Priority Support"],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited Projects", "Full Analytics", "Dedicated Support"],
    cta: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Pricing Plans</h2>
        <p className="text-gray-400 mt-4">
          Choose a plan that fits your needs. Upgrade anytime as you grow.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-gray-900 p-8 rounded-2xl border border-gray-800 flex flex-col justify-between ${
                plan.featured ? "border-purple-500 scale-105 shadow-xl" : ""
              }`}
            >
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-3xl font-bold">{plan.price}</p>

                <ul className="mt-6 flex flex-col items-start space-y-3 text-gray-400">
                  {plan.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full py-3 rounded-lg font-semibold cursor-pointer ${
                  plan.cta === "Contact Us"
                    ? "bg-purple-600 hover:bg-purple-500"
                    : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
