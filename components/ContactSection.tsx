"use client";

import { business } from "../data/site-content";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-12 md:py-16" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Center Details & Quick Inquiry Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Address & Timings Card */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-6 border-b border-surface-container-high">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider block">{t.contact.walkIn}</span>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{business.name}</h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span>{business.hours.display}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 text-on-surface">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed/50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-primary text-[22px]">location_on</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-bold text-on-surface">{t.contact.addressLabel}</span>
                    <p className="font-body-sm text-body-sm text-tertiary">
                      {business.address}
                    </p>
                  </div>
                </div>
                
                {/* Tap to Call Buttons & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-container-low text-on-surface hover:bg-primary-container font-label-md text-label-md font-bold transition-all shadow-sm" href={`tel:+91${business.phonePrimary}`}>
                    <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                    <span>{business.phonePrimary}</span>
                  </a>
                  {business.phoneSecondary && (
                    <a className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface-container-low text-on-surface hover:bg-primary-container font-label-md text-label-md font-bold transition-all shadow-sm" href={`tel:+91${business.phoneSecondary}`}>
                      <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                      <span>{business.phoneSecondary}</span>
                    </a>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-3 pt-1">
                  <a className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-bold shadow-sm hover:opacity-90 transition-all" href={`https://wa.me/${business.whatsapp}?text=Hi%20Harshith%20E%20Sevai,%20I%20have%20an%20inquiry.`} rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>{t.contact.whatsapp}</span>
                  </a>
                  <a className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold hover:bg-surface-variant transition-all" href={`https://maps.google.com/?q=${encodeURIComponent(business.address)}`} rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-[20px]">directions</span>
                    <span>{t.contact.getDirections}</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Inquiry Form Card */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="mb-5">
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">{t.contact.title}</h4>
                <p className="font-body-sm text-body-sm text-tertiary">{t.contact.subtitle}</p>
              </div>
              
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm font-semibold text-on-surface-variant" htmlFor="name">{t.contact.nameLabel}</label>
                    <input className="h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-tertiary-container focus:outline-none focus:ring-2 focus:ring-primary-container" id="name" placeholder={t.contact.nameLabel} required type="text"/>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm font-semibold text-on-surface-variant" htmlFor="phone">{t.contact.phoneLabel}</label>
                    <input className="h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-tertiary-container focus:outline-none focus:ring-2 focus:ring-primary-container" id="phone" placeholder={t.contact.phoneLabel} required type="tel"/>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm font-semibold text-on-surface-variant" htmlFor="serviceSelect">{t.contact.serviceLabel}</label>
                  <select className="h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="serviceSelect">
                    <option value="certificates">TN Government Certificates (Caste/Income/Legal Heir)</option>
                    <option value="aadhaar-pan">Aadhaar / PAN Card Services & PVC Print</option>
                    <option value="voter-ration">Voter ID / Smart Ration Card Services</option>
                    <option value="passport">Passport Seva Application & Slot</option>
                    <option value="bills-tax">TNEB / Property Tax / Utility Bills</option>
                    <option value="epfo-employment">PF Withdrawal (EPFO) / Employment Reg.</option>
                    <option value="insurance-travel">Motor Insurance / Train & Flight Booking</option>
                    <option value="xerox-prints">Bulk Xerox / Color Scanning / Lamination</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm font-semibold text-on-surface-variant" htmlFor="msg">{t.contact.msgLabel}</label>
                  <textarea className="p-3.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-tertiary-container focus:outline-none focus:ring-2 focus:ring-primary-container" id="msg" placeholder={t.contact.msgPlaceholder} rows={3}></textarea>
                </div>
                
                <button className="w-full h-12 rounded-full bg-primary-container text-on-surface font-label-md text-label-md font-bold shadow-[0_4px_14px_rgba(34,197,94,0.3)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.45)] transition-all" type="submit">
                  {t.contact.submitBtn}
                </button>
                
                {formStatus === "success" && (
                  <div className="text-center p-3 bg-secondary-fixed/40 text-on-secondary-fixed-variant rounded-xl font-label-sm text-label-sm font-bold">
                    {t.contact.successMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Right Column: Stylized Interactive Map Card */}
          <div className="lg:col-span-5 flex flex-col gap-4 sticky top-28">
            <div className="bg-surface-container-lowest rounded-3xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">explore</span>
                  <span className="font-headline-sm text-[16px] font-bold text-on-surface">{t.contact.mapTitle}</span>
                </div>
                <a className="px-3 py-1 rounded-full bg-primary-fixed/60 text-on-primary-fixed text-label-sm font-label-sm font-bold hover:bg-primary-container transition-colors" href={`https://maps.google.com/?q=${encodeURIComponent(business.address)}`} rel="noopener noreferrer" target="_blank">
                  {t.contact.openMap}
                </a>
              </div>
              
              {/* Stylized Google Map Embed */}
              <div className="w-full h-72 sm:h-96 rounded-2xl relative overflow-hidden bg-cover bg-center shadow-inner flex flex-col justify-end p-0">
                <iframe
                  src={business.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map Location"
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              
              {/* Quick Directions Footer Note */}
              <div className="mt-4 p-3.5 rounded-2xl bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-secondary">local_parking</span>
                  {t.contact.parkingInfo}
                </span>
                <span className="font-bold text-primary">Pin: 600049</span>
              </div>
            </div>
            

          </div>
          
        </div>
      </section>

      {/* Mobile Sticky Bottom Bar for instant interaction */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2.5">
        <a className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-primary-container text-on-surface font-label-md text-label-md font-bold shadow-md" href={`tel:+91${business.phonePrimary}`}>
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span>{t.contact.callDesk}</span>
        </a>
        <a className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-bold shadow-md" href={`https://wa.me/${business.whatsapp}?text=Vanakkam%20Harshith%20E%20Sevai,%20I%20need%20assistance.`} rel="noopener noreferrer" target="_blank">
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span>{t.contact.whatsapp}</span>
        </a>
      </div>
    </>
  );
}
