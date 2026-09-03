"use client";

import { business } from "../data/site-content";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [activeSection, setActiveSection] = useState("services");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  // Scroll spy to highlight the active section dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "why-us", "how-it-works", "contact"];
      // Add a small offset so it triggers slightly before the section hits the top
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "services", label: t.nav.services },
    { id: "why-us", label: t.nav.whyUs },
    { id: "how-it-works", label: t.nav.howItWorks },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 shrink-0 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-[24px]">account_balance</span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-[16px] sm:text-[20px] text-on-surface tracking-tight font-bold truncate">{business.name}</span>
              <span className="inline-flex shrink-0 items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-primary-container/20 text-primary">CSC</span>
            </div>
            <span className="font-label-sm text-[10px] sm:text-[12px] text-secondary font-semibold flex items-center gap-1.5 truncate">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0"></span>
              {t.hero.openNow}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/70 px-3 py-1.5 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveSection(link.id)}
              className={`font-label-md text-label-md px-4 py-2 rounded-full transition-colors ${
                activeSection === link.id
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full border border-surface-container-high bg-surface text-on-surface font-label-md text-label-md font-bold shadow-sm hover:bg-surface-container-low transition-colors"
          >
            {language === "en" ? "தமிழ்" : "English"}
          </button>
          
          <a 
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-on-surface font-label-md text-label-md font-bold shadow-[0_4px_12px_rgba(34,197,94,0.25)] hover:shadow-[0_6px_18px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0" 
            href={`tel:+91${business.phonePrimary}`}
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>{t.nav.callNow}</span>
          </a>
          
          <button 
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center lg:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-surface-container-lowest border-t border-surface-container-low shadow-lg py-4 px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActiveSection(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`font-label-md text-[16px] py-2 border-b border-surface-container-lowest transition-colors ${
                activeSection === link.id
                  ? "text-primary font-bold"
                  : "text-on-surface-variant"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-container text-on-surface font-label-md font-bold shadow-sm" 
            href={`tel:+91${business.phonePrimary}`}
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>{t.nav.callNow}</span>
          </a>
          
          <button
            onClick={toggleLanguage}
            className="mt-2 flex items-center justify-center w-full px-5 py-3 rounded-xl border border-surface-container-high bg-surface text-on-surface font-label-md font-bold shadow-sm hover:bg-surface-container-low transition-colors"
          >
            {language === "en" ? "தமிழ்" : "English"}
          </button>
        </div>
      )}
    </header>
  );
}
