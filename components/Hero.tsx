"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import { business } from "../data/site-content";
import FadeIn from "./FadeIn";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=Hi, I want to know more about your services.`;

  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-neutral-bg">
      {/* Premium Background Elements */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent z-0" />
      <div className="absolute top-20 right-0 md:right-[10%] w-[30rem] h-[30rem] bg-blue-400/20 rounded-full blur-3xl z-0" />
      <div className="absolute top-40 left-0 md:left-[10%] w-[25rem] h-[25rem] bg-accent/15 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-primary/10 shadow-sm text-primary font-bold text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              {business.tagline}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-text leading-tight mb-6 tracking-tight">
              Your One-Stop <span className="text-gradient">Government</span> & Digital Service Center
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-neutral-muted mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Get your certificates, Aadhaar/PAN services, bill payments, and insurance done fast, reliably, and locally in Villivakkam.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a 
                href={`tel:+91${business.phonePrimary}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] hover:-translate-y-1"
              >
                <Phone size={20} />
                Call Now
              </a>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-support hover:bg-[#0e9b6a] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:-translate-y-1"
              >
                <FaWhatsapp size={22} />
                WhatsApp Us
              </a>
            </div>
          </FadeIn>

          {/* Trust Strip */}
          <FadeIn delay={0.5}>
            <div className="glass-card py-5 px-8 rounded-full inline-flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-sm font-semibold text-neutral-muted">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1.5 rounded-full"><ShieldCheck size={16} className="text-green-600" /></div>
                <span className="text-neutral-text">Govt Authorized</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-1.5 rounded-full"><Clock size={16} className="text-primary" /></div>
                <span className="text-neutral-text">{business.hours.display}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="bg-accent/20 p-1.5 rounded-full"><MapPin size={16} className="text-accent-hover" /></div>
                <span className="text-neutral-text">{business.landmark}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
