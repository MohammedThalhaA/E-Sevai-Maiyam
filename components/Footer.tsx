import { business } from "../data/site-content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-text text-white py-12 border-t-4 border-primary">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-1">{business.name}</h2>
            <p className="text-gray-400 mb-4 font-sans">{business.nameTa}</p>
            <p className="text-sm text-gray-300 max-w-sm mb-4 leading-relaxed">
              Your trusted local destination for government certificates, identity documents, bill payments, and printing services in Villivakkam.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-200">
              <span className="text-green-400">✓</span> {business.udyamCsc}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-medium">
              <li><a href="#services" className="hover:text-accent transition-colors">All Services</a></li>
              <li><a href="#why-us" className="hover:text-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-gray-500">📞</span>
                <div>
                  <a href={`tel:+91${business.phonePrimary}`} className="block hover:text-white transition-colors">{business.phonePrimary}</a>
                  {business.phoneSecondary && (
                    <a href={`tel:+91${business.phoneSecondary}`} className="block hover:text-white transition-colors mt-0.5">{business.phoneSecondary}</a>
                  )}
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-500">📍</span>
                <span className="leading-snug">{business.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} {business.name}. All rights reserved.</p>
          <p>Designed for Villivakkam community.</p>
        </div>
      </div>
    </footer>
  );
}
