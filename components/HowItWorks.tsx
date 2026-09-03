export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Visit or Contact Us",
      description: "Walk into our Villivakkam center or send us a message on WhatsApp detailing what service you need.",
    },
    {
      num: "2",
      title: "Submit Documents",
      description: "Provide the required proof documents. Our team will verify and submit your application online instantly.",
    },
    {
      num: "3",
      title: "Get it Done",
      description: "Receive your government certificate, ID, or receipt quickly — often on the same day.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-neutral-bg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get your work done.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-accent text-primary flex items-center justify-center text-3xl font-extrabold mb-6 shadow-md">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-text">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
