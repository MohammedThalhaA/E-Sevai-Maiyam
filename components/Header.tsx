"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { business } from "../data/site-content";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex flex-col">
          <a href="#" className="font-bold text-xl md:text-2xl text-primary tracking-tight">
            {business.name}
          </a>
          <span className="text-xs md:text-sm text-gray-500 font-medium">
            {business.nameTa}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <a 
            href={`tel:+91${business.phonePrimary}`}
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors shadow-sm"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md border-t border-gray-100 flex flex-col py-4 px-6 gap-4 font-medium">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)}>Why Choose Us</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
