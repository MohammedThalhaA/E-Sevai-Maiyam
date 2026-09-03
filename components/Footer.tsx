import { Phone, MapPin } from "lucide-react";
import { business } from "../data/site-content";
import FadeIn from "./FadeIn";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-text text-white pt-20 pb-12 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-support" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <FadeIn className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold mb-1">{business.name}</h2>
            <p className="text-gray-400 mb-6 font-bold font-sans uppercase tracking-widest text-xs">{business.nameTa}</p>
            <p className="text-gray-300 max-w-sm mb-8 leading-relaxed font-medium">
              Your trusted local destination for government certificates, identity documents, bill payments, and printing services in Villivakkam.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold text-white border border-white/10">
              <span className="text-green-400">✓</span> {business.udyamCsc}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4 text-gray-300 font-bold">
              <li><a href="#services" className="hover:text-primary-light transition-colors">All Services</a></li>
              <li><a href="#why-us" className="hover:text-primary-light transition-colors">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-primary-light transition-colors">How It Works</a></li>
              <li><a href="#contact" className="hover:text-primary-light transition-colors">Contact & Location</a></li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-6 text-gray-300 font-medium">
              <li className="flex gap-4 items-start">
                <div className="bg-white/10 p-2 rounded-lg text-primary-light"><Phone size={18} /></div>
                <div>
                  <a href={`tel:+91${business.phonePrimary}`} className="block hover:text-white transition-colors font-bold text-lg">{business.phonePrimary}</a>
                  {business.phoneSecondary && (
                    <a href={`tel:+91${business.phoneSecondary}`} className="block hover:text-white transition-colors mt-1">{business.phoneSecondary}</a>
                  )}
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-white/10 p-2 rounded-lg text-accent"><MapPin size={18} /></div>
                <span className="leading-relaxed">{business.address}</span>
              </li>
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="pt-8 border-t border-gray-800/50 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4 font-medium">
          <p>&copy; {currentYear} {business.name}. All rights reserved.</p>
          <p>Designed for Villivakkam community.</p>
        </FadeIn>
      </div>
    </footer>
  );
}
