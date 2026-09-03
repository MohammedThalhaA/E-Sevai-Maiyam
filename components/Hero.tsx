"use client";

import { business } from "../data/site-content";

export default function Hero() {
  const whatsappMsg = "Vanakkam Harshith E Sevai, I need help with government services.";
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="flex flex-col w-full relative">
      {/* Top Ambient Glow Aura */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-primary-container/20 via-surface-container-low to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        {/* SECTION 2: HERO */}
        <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-8 md:pt-12 pb-16">
          <div className="relative bg-gradient-to-b from-surface-container-low via-surface-container-lowest to-surface-container-lowest rounded-[28px] p-6 sm:p-8 md:p-12 lg:p-14 shadow-[0_4px_24px_rgba(20,27,36,0.06)] overflow-hidden">
            {/* Subtle Pattern Decor */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Hero Left Column (~45%) */}
              <div className="lg:col-span-6 flex flex-col items-start gap-6">
                {/* Eyebrow Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary-fixed/60 text-on-primary-fixed font-label-sm sm:font-label-md text-[10px] sm:text-label-md font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                  <span>● {business.tagline.toUpperCase()}</span>
                </div>
                
                {/* Massive Bold Headline */}
                <h1 className="font-display-hero text-[38px] sm:text-[48px] md:text-display-hero font-extrabold text-on-surface tracking-tight leading-[1.08]">
                  Your Services. <br/>
                  <span className="text-primary-container drop-shadow-sm">Handled Fast.</span>
                </h1>
                
                {/* Slate Gray Subtext */}
                <p className="font-body-lg text-[15px] sm:text-body-md md:text-body-lg text-tertiary max-w-xl">
                  Certificates, Aadhaar/PAN updates, utility bill payments, high-speed printing, and insurance — all handled quickly, accurately, and reliably in Villivakkam.
                </p>
                
                {/* CTA Pill Buttons Side by Side */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a 
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-primary-container text-on-surface font-label-sm sm:font-label-md text-[13px] sm:text-[14px] font-bold shadow-[0_4px_16px_rgba(34,197,94,0.3)] hover:shadow-[0_8px_24px_rgba(34,197,94,0.45)] hover:-translate-y-0.5 transition-all" 
                    href={`tel:+91${business.phonePrimary}`}
                  >
                    <span className="material-symbols-outlined text-[16px] sm:text-[20px]">call</span>
                    <span>Call Now</span>
                  </a>
                  <a 
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-surface-container-lowest text-secondary font-label-sm sm:font-label-md text-[13px] sm:text-[14px] font-bold shadow-sm hover:bg-secondary/10 transition-all" 
                    href={whatsappUrl} 
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[16px] sm:text-[20px]">chat</span>
                    <span>WhatsApp Us</span>
                  </a>
                </div>
                
                {/* Trust Strip */}
                <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-on-surface-variant font-label-sm text-label-sm">
                  <div className="flex items-center gap-1.5 font-semibold text-secondary">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Govt Authorized CSC</span>
                  </div>
                  <span className="hidden sm:inline text-tertiary-container">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">schedule</span>
                    <span>{business.hours.display}</span>
                  </div>
                  <span className="hidden sm:inline text-tertiary-container">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                    <span>{business.landmark}</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Right Column (~55% SaaS-style Cluster) */}
              <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
                {/* Orbiting Decorative Rings (Subtle) */}
                <div className="absolute w-[360px] h-[360px] rounded-full bg-surface-container/60 -z-10"></div>
                <div className="absolute w-[460px] h-[460px] rounded-full bg-surface-container-high/30 -z-10"></div>
                
                {/* Central Card: Official Resident ID / E-Sevai Portal Graphic */}
                <div className="w-full max-w-[340px] bg-surface-container-lowest rounded-2xl p-6 shadow-[0_16px_36px_-6px_rgba(20,27,36,0.12)] z-10">
                  <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-[18px]">badge</span>
                      </div>
                      <div>
                        <span className="block font-label-sm text-label-sm font-bold text-on-surface">E-GOVERNANCE PORTAL</span>
                        <span className="block text-[10px] text-tertiary">CSC TN e-District Live Hub</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-secondary/10 text-secondary text-[11px] font-bold">VERIFIED</span>
                  </div>
                  
                  {/* Sleek Card Mock Body */}
                  <div className="bg-surface-container-low rounded-xl p-4 flex flex-col gap-3 my-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center font-bold text-tertiary text-headline-sm">
                        TN
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <div className="h-3 bg-surface-container-highest rounded-full w-4/5"></div>
                        <div className="h-2.5 bg-surface-container-high rounded-full w-2/3"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                      <div className="bg-surface-container-lowest p-2 rounded-lg">
                        <span className="text-tertiary block font-mono">APP #</span>
                        <span className="font-bold text-on-surface">TN-CSC-2025</span>
                      </div>
                      <div className="bg-surface-container-lowest p-2 rounded-lg">
                        <span className="text-tertiary block font-mono">STATUS</span>
                        <span className="font-bold text-secondary flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Instant
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-[11px] text-tertiary pt-2">
                    <span className="font-semibold text-on-surface-variant">Villivakkam Citizen Counter #01</span>
                    <span className="font-mono text-primary font-bold">● FAST TRACK</span>
                  </div>
                </div>
                
                {/* Orbiting Floating Badges (5 total) */}
                
                {/* 1. WhatsApp Chat Bubble Badge (Top-Right) */}
                <div className="hidden md:flex absolute -top-3 right-4 sm:right-8 bg-surface-container-lowest rounded-2xl px-4 py-2.5 shadow-[0_8px_20px_rgba(0,109,65,0.12)] items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-secondary/15 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">Instant WhatsApp Support</span>
                    <span className="text-[11px] text-secondary font-medium">Send Documents Now</span>
                  </div>
                </div>
                
                {/* 2. Rupee / UPI Payment Badge (Bottom-Right) */}
                <div className="hidden md:flex absolute bottom-2 right-2 sm:right-6 bg-surface-container-lowest rounded-2xl px-4 py-2.5 shadow-[0_8px_20px_rgba(34,197,94,0.18)] items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[20px]">currency_rupee</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">Zero-Delay Payments</span>
                    <span className="text-[11px] text-tertiary">EB, Taxes, UPI Accepted</span>
                  </div>
                </div>
                
                {/* 3. High-precision Laser Printer Badge (Top-Left) */}
                <div className="hidden md:flex absolute top-6 left-0 sm:left-4 bg-surface-container-lowest rounded-2xl px-3.5 py-2 shadow-[0_8px_20px_rgba(20,27,36,0.08)] items-center gap-2 z-20">
                  <div className="w-8 h-8 rounded-xl bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[20px]">print</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">Color & PVC Print</span>
                    <span className="text-[11px] text-tertiary">300 DPI Thermal Quality</span>
                  </div>
                </div>
                
                {/* 4. Flight / Travel Ticket Booking Badge (Bottom-Left) */}
                <div className="hidden md:flex absolute -bottom-4 left-4 sm:left-10 bg-surface-container-lowest rounded-2xl px-3.5 py-2 shadow-[0_8px_20px_rgba(20,27,36,0.08)] items-center gap-2 z-20">
                  <div className="w-8 h-8 rounded-xl bg-tertiary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-tertiary-fixed text-[20px]">airplane_ticket</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">IRCTC & Flights</span>
                    <span className="text-[11px] text-tertiary">Confirmed PNR Booking</span>
                  </div>
                </div>
                
                {/* 5. Shield / Insurance Badge (Center-Right Floating) */}
                <div className="hidden sm:flex absolute top-1/2 -right-4 -translate-y-1/2 bg-surface-container-lowest rounded-2xl px-3 py-2 shadow-[0_8px_20px_rgba(0,109,65,0.1)] items-center gap-2 z-20">
                  <div className="w-8 h-8 rounded-xl bg-secondary-container/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">Motor Insurance</span>
                    <span className="text-[10px] text-secondary font-semibold">Instant Policy Print</span>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Micro-detail bottom strip inside Hero Card */}
            <div className="mt-8 pt-6 flex items-center justify-between text-tertiary font-label-sm text-label-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span>Serving Villivakkam, Kolathur, Anna Nagar & Agaram</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest"></span>
                <span className="font-mono text-[11px] ml-1 text-on-surface-variant">CSC ID #63402</span>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
}
