"use client";

import { services, business } from "../data/site-content";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

const categoryMeta = {
  certificates: {
    title: "1. Government Certificates",
    subtitle: "Tamil Nadu Revenue & Social Welfare Department documentation",
    icon: "assignment",
    heroImage: "/resources/images/Government Certificate.png",
  },
  identity: {
    title: "2. Identity & Documents",
    subtitle: "Central and state statutory ID enrollment, correction & physical PVC cards",
    icon: "contact_mail",
    heroImage: "/resources/images/Aadhar card.png",
  },
  bills: {
    title: "3. Bills & Utility Payments",
    subtitle: "Instant payment receipts with zero gateway failures",
    icon: "receipt",
    heroImage: "/resources/images/Electricity-water-property tax.png",
  },
  welfare: {
    title: "4. Employment & Welfare",
    subtitle: "Government scheme registrations and job portals",
    icon: "badge",
    heroImage: "/resources/images/Employement Registration.png",
  },
  insurance: {
    title: "5. Insurance & Travel",
    subtitle: "Quick policy issuance and confirmed ticket bookings",
    icon: "verified_user",
    heroImage: "/resources/images/Bike and Car Insurance.png",
  },
  printing: {
    title: "6. Printing & Xerox",
    subtitle: "High quality thermal, color, and PVC card printing",
    icon: "print",
    heroImage: "/resources/images/Printing and Xerox.png",
  }
};

type CategoryProps = {
  items: Array<{ id: string; name: string; nameTa: string; desc?: string; image?: string }>;
  metaKey: keyof typeof categoryMeta;
  title: string;
  subtitle: string;
  heroAlign: "left" | "right";
  customHeroImage?: string;
  className?: string;
};

function EditorialCategory({ items, metaKey, title, subtitle, heroAlign, customHeroImage, className = "mb-20 scroll-mt-24" }: CategoryProps) {
  const meta = categoryMeta[metaKey];
  const { language } = useLanguage();
  
  const whatsappMsg = `Hi, I want to know more about services in: ${title}`;
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;
  const imageSrc = customHeroImage || meta.heroImage;

  return (
    <div className={className} id={`cat-${metaKey}`}>
      {/* Category Header */}
      <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-12 ${heroAlign === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
         <div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center shrink-0 border border-surface-container-high shadow-sm">
            <span className="material-symbols-outlined text-primary text-[28px]">{meta.icon}</span>
         </div>
         <div className="flex-1">
           <h3 className="font-display-hero text-[22px] sm:text-[30px] lg:text-[36px] font-bold text-on-surface leading-tight tracking-tight mb-1">
             {title}
           </h3>
           <p className="font-body-lg text-[15px] sm:text-[16px] text-tertiary">
             {subtitle}
           </p>
         </div>
         <div className="shrink-0 mt-2 sm:mt-0">
           <a 
             href={whatsappUrl} 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary shadow-[0_8px_24px_rgba(34,197,94,0.3)] hover:shadow-[0_12px_32px_rgba(34,197,94,0.4)] hover:-translate-y-1 font-label-md text-[14px] font-bold transition-all duration-300"
           >
             <span className="material-symbols-outlined text-[18px]">chat</span>
             Inquire Category
           </a>
         </div>
      </div>

      <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${heroAlign === 'right' ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* FLOATING CUTOUT IMAGE */}
        <div className="relative w-full lg:w-[45%] flex items-center justify-center pointer-events-none">
          {/* Subtle Abstract Glow behind cutout */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/5 rounded-full blur-[60px] -z-10"></div>
          
          <Image 
            src={imageSrc} 
            alt={title}
            width={800}
            height={800}
            className="w-full lg:w-[90%] max-w-[460px] h-auto object-contain drop-shadow-[0_24px_48px_rgba(20,27,36,0.15)] hover:scale-105 transition-transform duration-700 pointer-events-auto"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>

        {/* MINIMALIST TYPOGRAPHY LIST */}
        <div className="w-full lg:w-1/2 flex flex-col border-t border-surface-variant/30">
          {items.map((service) => {
            const serviceMsg = `Hi, I want to know more about: ${service.name}`;
            const serviceUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(serviceMsg)}`;
            
            return (
              <a 
                key={service.id} 
                href={serviceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-b border-surface-variant/30 hover:bg-surface-container-lowest transition-colors px-2 lg:px-4 cursor-pointer"
              >
                <div className="flex flex-col pr-4">
                  <h4 className="font-headline-sm text-[18px] sm:text-[20px] font-bold text-on-surface group-hover:text-primary transition-colors leading-tight mb-1">
                    {language === "ta" ? service.nameTa : service.name}
                  </h4>
                  <p className="font-body-sm text-[14px] text-tertiary">
                    {language === "ta" ? service.name : service.nameTa}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-surface-variant flex items-center justify-center shrink-0 text-tertiary group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all duration-300 transform group-hover:translate-x-1">
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full pt-16 md:pt-24 pb-12 bg-surface" id="services">
      <div className="max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1536px] min-[1920px]:max-w-[1920px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        
        {/* Main Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/30 text-primary font-label-md text-[12px] sm:text-label-md uppercase font-bold tracking-widest mb-6">
            {t.services.tagline}
          </div>
          <h2 className="font-display-hero text-[28px] sm:text-[42px] lg:text-[56px] font-extrabold text-on-surface tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
            {t.services.title}
          </h2>
          <p className="font-body-lg text-[16px] sm:text-[20px] text-tertiary max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Editorial Layout Flow */}
        <div className="flex flex-col gap-12 lg:gap-0">
          {/* Certificates: Dual-Cluster Layout */}
          <div className="flex flex-col mb-16 lg:mb-24 scroll-mt-24" id="cat-certificates">
            <EditorialCategory 
              items={services.certificates.slice(0, 4)} 
              metaKey="certificates" 
              title={t.services.cat1} 
              subtitle="Community, Income, Nativity, and Legal Heir" 
              heroAlign="left" 
              customHeroImage="/resources/images/Section A.png"
              className="mb-12 lg:mb-24"
            />
            <EditorialCategory 
              items={services.certificates.slice(4)} 
              metaKey="certificates" 
              title={t.services.cat1} 
              subtitle="Widow, OBC, Birth/Death, and Life Certificates" 
              heroAlign="right" 
              customHeroImage="/resources/images/Section B.png"
              className="mb-0"
            />
          </div>

          {/* Identity: Dual-Cluster Layout */}
          <div className="flex flex-col mb-16 lg:mb-24 scroll-mt-24" id="cat-identity">
            <EditorialCategory 
              items={services.identity.slice(0, 3)} 
              metaKey="identity" 
              title={t.services.cat2} 
              subtitle="Aadhaar, PAN, and Voter ID Services" 
              heroAlign="left" 
              customHeroImage="/resources/images/Section B1.png"
              className="mb-12 lg:mb-24"
            />
            <EditorialCategory 
              items={services.identity.slice(3)} 
              metaKey="identity" 
              title={t.services.cat2} 
              subtitle="Ration Card, Passport, and MSME" 
              heroAlign="right" 
              customHeroImage="/resources/images/Section B2.png"
              className="mb-0"
            />
          </div>
          {/* Bills: Dual-Cluster Layout */}
          <div className="flex flex-col mb-16 lg:mb-24 scroll-mt-24" id="cat-bills">
            <EditorialCategory 
              items={services.bills.slice(0, 3)} 
              metaKey="bills" 
              title={t.services.cat3} 
              subtitle="Electricity, Property Tax, and Water Tax" 
              heroAlign="left" 
              customHeroImage="/resources/images/Section C1.png"
              className="mb-12 lg:mb-24"
            />
            <EditorialCategory 
              items={services.bills.slice(3)} 
              metaKey="bills" 
              title={t.services.cat3} 
              subtitle="Mobile/DTH, Traffic Fines, and Online Payments" 
              heroAlign="right" 
              customHeroImage="/resources/images/Section C2.png"
              className="mb-0"
            />
          </div>
          <EditorialCategory items={services.welfare} metaKey="welfare" title={t.services.cat6} subtitle={t.services.cat6Sub} heroAlign="left" customHeroImage="/resources/images/Section D.png" />
          <EditorialCategory items={services.insurance} metaKey="insurance" title={t.services.cat4} subtitle={t.services.cat4Sub} heroAlign="right" customHeroImage="/resources/images/Section E.png" />
          <EditorialCategory items={services.printing} metaKey="printing" title={t.services.cat5} subtitle={t.services.cat5Sub} heroAlign="left" customHeroImage="/resources/images/Section F.png" />
        </div>
        
      </div>
    </section>
  );
}
