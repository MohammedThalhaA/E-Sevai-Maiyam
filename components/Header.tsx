"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { business } from "../data/site-content";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="container mx-auto px-4">
        <div className={`glass-header rounded-3xl px-6 h-16 md:h-20 flex items-center justify-between transition-all duration-300 ${scrolled ? "shadow-md bg-white/90" : "bg-white/70"}`}>
          
          {/* Logo / Title */}
          <div className="flex flex-col">
            <a href="#" className="font-extrabold text-xl md:text-2xl text-primary tracking-tight">
              {business.name}
            </a>
            <span className="text-[10px] md:text-xs text-neutral-muted font-bold uppercase tracking-wider">
              {business.nameTa}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-neutral-muted">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href={`tel:+91${business.phonePrimary}`}
              className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Call Now
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-neutral-text bg-neutral-bg rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-[85px] left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl border border-gray-100 flex flex-col py-6 px-8 gap-6 font-bold text-neutral-text text-lg z-40"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Services</a>
            <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Why Choose Us</a>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">How it Works</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary">Contact</a>
            <a 
              href={`tel:+91${business.phonePrimary}`}
              className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-4 rounded-2xl font-bold transition-all shadow-md mt-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
