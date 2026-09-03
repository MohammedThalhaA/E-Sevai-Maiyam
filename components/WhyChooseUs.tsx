import { FcApproval, FcFlashOn, FcCurrencyExchange, FcCustomerSupport } from "react-icons/fc";

const reasons = [
  {
    icon: FcApproval,
    title: "Govt-Authorized Center",
    description: "We are an official CSC (Common Service Center) recognized by the Digital India initiative.",
  },
  {
    icon: FcFlashOn,
    title: "Fast Turnaround",
    description: "Get your certificates and documents processed quickly without unnecessary delays.",
  },
  {
    icon: FcCurrencyExchange,
    title: "Transparent Pricing",
    description: "No hidden charges. We follow standard government pricing guidelines for all services.",
  },
  {
    icon: FcCustomerSupport,
    title: "Friendly Local Staff",
    description: "Our Villivakkam team is always ready to guide you step-by-step in Tamil or English.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience hassle-free government services right in your neighborhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center p-6 rounded-2xl bg-neutral-bg border border-gray-50 hover:border-primary/20 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-text">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
