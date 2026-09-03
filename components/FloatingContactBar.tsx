import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { business } from "../data/site-content";

export default function FloatingContactBar() {
  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=Hi, I want to know more about your services.`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          aria-label="WhatsApp Us"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href={`tel:+91${business.phonePrimary}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-white font-bold text-lg active:bg-accent-hover transition-colors"
        >
          <Phone size={20} />
          Call
        </a>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-support text-white font-bold text-lg active:bg-[#18754a] transition-colors"
        >
          <FaWhatsapp size={24} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
