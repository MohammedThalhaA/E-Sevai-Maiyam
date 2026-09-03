"use client";

import { services, business } from "../data/site-content";

const categoryMeta = {
  certificates: {
    title: "1. Government Certificates",
    subtitle: "Tamil Nadu Revenue & Social Welfare Department documentation",
    icon: "assignment",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    cardIconColor: "text-primary",
    cardIconBg: "bg-surface-container-low",
    cardIcons: ["diversity_3", "payments", "family_restroom", "home_pin", "workspace_premium", "fingerprint"]
  },
  identity: {
    title: "2. Identity & Documents",
    subtitle: "Central and state statutory ID enrollment, correction & physical PVC cards",
    icon: "contact_mail",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    cardIconColor: "text-secondary",
    cardIconBg: "bg-surface-container-low",
    cardIcons: ["credit_card", "account_box", "how_to_vote", "receipt_long", "travel_explore", "store"]
  },
  bills: {
    title: "3. Bills & Utility Payments",
    subtitle: "Instant payment receipts with zero gateway failures",
    icon: "receipt",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    cardIconColor: "text-primary",
    cardIconBg: "bg-surface-container-low",
    cardIcons: ["bolt", "water_drop", "receipt", "receipt", "receipt", "receipt"]
  },
  welfare: {
    title: "4. Employment & Welfare",
    subtitle: "Government scheme registrations and job portals",
    icon: "badge",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    cardIconColor: "text-secondary",
    cardIconBg: "bg-surface-container-low",
    cardIcons: ["badge", "badge", "badge", "badge", "badge", "badge"]
  },
  insurance: {
    title: "5. Insurance & Travel",
    subtitle: "Quick policy issuance and confirmed ticket bookings",
    icon: "verified_user",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    cardIconColor: "text-primary",
    cardIconBg: "bg-surface-container-low",
    cardIcons: ["two_wheeler", "flight", "directions_bus", "train", "train", "train"]
  },
  printing: {
    title: "6. Printing & Xerox",
    subtitle: "High quality thermal, color, and PVC card printing",
    icon: "print",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    cardIconColor: "text-secondary",
    cardIconBg: "bg-surface-container-low",
    cardIcons: ["print", "print", "print", "print", "print", "print"]
  }
};

type CategoryProps = {
  items: Array<{ id: string; name: string; nameTa: string; desc?: string }>;
  metaKey: keyof typeof categoryMeta;
};

function CategorySection({ items, metaKey }: CategoryProps) {
  const meta = categoryMeta[metaKey];

  return (
    <div className="mb-14 scroll-mt-24" id={`cat-${metaKey}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl ${meta.iconBg} flex items-center justify-center`}>
          <span className={`material-symbols-outlined ${meta.iconColor} text-[22px]`}>{meta.icon}</span>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">{meta.title}</h3>
          <p className="font-body-sm text-body-sm text-tertiary">{meta.subtitle}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((service, idx) => {
          const message = `Hi, I want to know more about: ${service.name}`;
          const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
          const cardIcon = meta.cardIcons[idx % meta.cardIcons.length];
          const iconColorClass = idx % 2 === 0 ? "text-primary" : "text-secondary";
          
          return (
            <div key={service.id} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div className={`w-11 h-11 rounded-xl ${meta.cardIconBg} flex items-center justify-center mb-4`}>
                  <span className={`material-symbols-outlined ${iconColorClass} text-[24px]`}>{cardIcon}</span>
                </div>
                <h4 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">{service.name}</h4>
                <p className="font-body-sm text-body-sm text-tertiary">{service.nameTa}</p>
              </div>
              <a 
                className="pt-4 font-label-md text-label-md font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all" 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ask about this <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-12 md:py-16" id="services">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-container/15 text-on-primary-container font-label-sm text-label-sm uppercase font-bold tracking-wider">
          Central & Tamil Nadu Citizen Desk
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight">
          What We Offer
        </h2>
        <p className="font-body-lg text-body-md md:text-body-lg text-tertiary max-w-2xl">
          Comprehensive government citizen services and digital solutions under one roof with fast turnaround and verified compliance.
        </p>
        
        {/* Category Filter Quick Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          <a className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-primary-container hover:text-on-surface transition-colors shadow-sm" href="#cat-certificates">Government Certificates</a>
          <a className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-primary-container hover:text-on-surface transition-colors shadow-sm" href="#cat-identity">Identity & Documents</a>
          <a className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-primary-container hover:text-on-surface transition-colors shadow-sm" href="#cat-bills">Bills & Payments</a>
          <a className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-primary-container hover:text-on-surface transition-colors shadow-sm" href="#cat-welfare">Employment & Welfare</a>
          <a className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-primary-container hover:text-on-surface transition-colors shadow-sm" href="#cat-insurance">Insurance & Travel</a>
          <a className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-primary-container hover:text-on-surface transition-colors shadow-sm" href="#cat-printing">Printing & Xerox</a>
        </div>
      </div>

      <CategorySection items={services.certificates} metaKey="certificates" />
      <CategorySection items={services.identity} metaKey="identity" />
      <CategorySection items={services.bills} metaKey="bills" />
      <CategorySection items={services.welfare} metaKey="welfare" />
      <CategorySection items={services.insurance} metaKey="insurance" />
      <CategorySection items={services.printing} metaKey="printing" />
    </section>
  );
}
