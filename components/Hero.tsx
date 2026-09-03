import { Phone } from "lucide-react";
import { business } from "../data/site-content";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=Hi, I want to know more about your services.`;

  return (
    <section className="relative bg-white pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-48 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold text-sm">
            {business.tagline}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-text leading-tight mb-6 tracking-tight">
            Your One-Stop Government & Digital Service Center in Villivakkam
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get your government certificates, Aadhaar/PAN services, bill payments, printing, and insurance done fast, reliably, and locally.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={`tel:+91${business.phonePrimary}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Phone size={20} />
              Call Now
            </a>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-support hover:bg-[#18754a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {/* WhatsApp Icon placeholder via Lucide (MessageCircle or custom SVG, using simple text here) */}
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-6 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm py-4 px-6 rounded-2xl border border-gray-100 shadow-sm inline-flex flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="text-green-600">✅</span> 
              <span>Govt Authorized CSC</span>
            </div>
            <div className="hidden sm:block text-gray-300">•</div>
            <div className="flex items-center gap-1.5">
              <span className="text-blue-500">🕒</span> 
              <span>{business.hours.display}</span>
            </div>
            <div className="hidden sm:block text-gray-300">•</div>
            <div className="flex items-center gap-1.5">
              <span className="text-red-500">📍</span> 
              <span>{business.landmark}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
