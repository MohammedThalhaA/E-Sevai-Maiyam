"use client";

import FadeIn from "./FadeIn";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Visit or Contact Us",
      description: "Walk into our Villivakkam center or send us a WhatsApp message detailing what service you need.",
    },
    {
      num: "2",
      title: "Submit Documents",
      description: "Provide the required proof documents. Our team will verify and submit your application instantly.",
    },
    {
      num: "3",
      title: "Get it Done",
      description: "Receive your government certificate, ID, or receipt quickly — often on the same day.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-text mb-6">How It Works</h2>
            <p className="text-lg text-neutral-muted max-w-2xl mx-auto font-medium">
              Three simple steps to get your work done without the headache.
            </p>
          </div>
        </FadeIn>

        <div className="relative mt-12">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gray-100 rounded-full z-0">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/20 via-primary to-primary/20 w-full opacity-30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white rounded-[24px] border-4 border-gray-100 group-hover:border-primary text-neutral-text group-hover:text-primary flex items-center justify-center text-4xl font-extrabold mb-8 premium-shadow transition-all duration-300 group-hover:-translate-y-2">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-text">{step.title}</h3>
                  <p className="text-neutral-muted leading-relaxed max-w-sm font-medium">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
