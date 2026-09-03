"use client";

import { FileText, IdCard, Receipt, Briefcase, Car, Printer, ArrowRight } from "lucide-react";
import { services, business } from "../data/site-content";
import FadeIn from "./FadeIn";

const iconMap = {
  certificates: FileText,
  identity: IdCard,
  bills: Receipt,
  welfare: Briefcase,
  insurance: Car,
  printing: Printer,
};

type CategoryProps = {
  title: string;
  items: Array<{ id: string; name: string; nameTa: string }>;
  iconName: keyof typeof iconMap;
};

function CategorySection({ title, items, iconName }: CategoryProps) {
  const Icon = iconMap[iconName];

  return (
    <div className="mb-20">
      <FadeIn delay={0.1}>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-primary rounded-2xl text-white shadow-lg shadow-primary/30">
            <Icon size={28} strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-text">{title}</h3>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((service, idx) => {
          const message = `Hi, I want to know more about: ${service.name}`;
          const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
          
          return (
            <FadeIn key={service.id} delay={0.1 + (idx % 3) * 0.1}>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-gray-100 p-6 rounded-[24px] premium-shadow-hover h-full flex flex-col"
              >
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-neutral-text mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-neutral-muted font-medium font-sans">
                    {service.nameTa}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-sm font-bold text-primary">
                  <span>Ask about this</span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </a>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-text mb-6">Our Services</h2>
            <p className="text-lg text-neutral-muted max-w-2xl mx-auto font-medium">
              We provide a wide range of government and digital services under one roof. Click on any service to WhatsApp us directly.
            </p>
          </div>
        </FadeIn>

        <CategorySection title="Government Certificates" items={services.certificates} iconName="certificates" />
        <CategorySection title="Identity & Documents" items={services.identity} iconName="identity" />
        <CategorySection title="Bills & Payments" items={services.bills} iconName="bills" />
        <CategorySection title="Employment & Welfare" items={services.welfare} iconName="welfare" />
        <CategorySection title="Insurance & Travel" items={services.insurance} iconName="insurance" />
        <CategorySection title="Printing & Xerox" items={services.printing} iconName="printing" />
      </div>
    </section>
  );
}
