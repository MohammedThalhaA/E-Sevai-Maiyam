"use client";

import { business } from "../data/site-content";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[24px]">account_balance</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">{business.name}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-primary-container/20 text-primary">CSC</span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Villivakkam • Open Now
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/70 px-3 py-1.5 rounded-full">
          <a className="transition-colors bg-primary-container text-on-primary-container font-bold rounded-full px-4 py-2 text-label-md" href="#services">Services</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-full transition-colors" href="#why-us">Why Us</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-full transition-colors" href="#how-it-works">How It Works</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-full transition-colors" href="#contact">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a 
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-on-surface font-label-md text-label-md font-bold shadow-[0_4px_12px_rgba(245,166,35,0.25)] hover:shadow-[0_6px_18px_rgba(245,166,35,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0" 
            href={`tel:+91${business.phonePrimary}`}
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>{business.phonePrimary}</span>
          </a>
          
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center lg:hidden">
            <span className="material-symbols-outlined text-on-primary text-[18px]">menu</span>
          </div>
        </div>
      </div>
    </header>
  );
}
