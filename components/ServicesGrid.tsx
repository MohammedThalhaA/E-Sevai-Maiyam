import { ArrowRight } from "lucide-react";
import { FcDocument, FcVipPass, FcMoneyTransfer, FcBriefcase, FcAutomotive, FcPrint } from "react-icons/fc";
import { services, business } from "../data/site-content";

const iconMap = {
  certificates: FcDocument,
  identity: FcVipPass,
  bills: FcMoneyTransfer,
  welfare: FcBriefcase,
  insurance: FcAutomotive,
  printing: FcPrint,
};

type CategoryProps = {
  title: string;
  items: Array<{ id: string; name: string; nameTa: string }>;
  iconName: keyof typeof iconMap;
};

function CategorySection({ title, items, iconName }: CategoryProps) {
  const Icon = iconMap[iconName];

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-bold text-neutral-text">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((service) => {
          const message = `Hi, I want to know more about: ${service.name}`;
          const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
          
          return (
            <a 
              key={service.id}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col h-full"
            >
              <h4 className="font-semibold text-neutral-text mb-1 group-hover:text-primary transition-colors">
                {service.name}
              </h4>
              <p className="text-sm text-gray-500 mb-4 font-medium font-sans">
                {service.nameTa}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-sm font-semibold text-primary">
                <span>Ask about this</span>
                <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-neutral-bg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of government and digital services under one roof. Click on any service to WhatsApp us directly.
          </p>
        </div>

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
