"use client";

import { MapPin, Phone, Clock, Send } from "lucide-react";
import { business } from "../data/site-content";
import { useState } from "react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission for static site
    setTimeout(() => setFormStatus("success"), 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-text mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our center, call us, or send a message. We are here to help you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Details & Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-neutral-bg p-6 rounded-2xl border border-gray-50 flex items-start gap-4">
                <div className="text-primary mt-1"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-neutral-text mb-1">Our Location</h4>
                  <p className="text-sm text-gray-600 mb-2">{business.address}</p>
                  <p className="text-xs text-primary font-semibold mb-3">Landmark: {business.landmark}</p>
                  <a 
                    href="https://maps.google.com/?q=Villivakkam+Bus+Terminus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold text-white bg-primary hover:bg-primary-dark px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-neutral-bg p-6 rounded-2xl border border-gray-50 flex items-start gap-4">
                  <div className="text-accent mt-1"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-neutral-text mb-1">Call Us</h4>
                    <a href={`tel:+91${business.phonePrimary}`} className="block text-sm font-semibold text-gray-700 hover:text-primary transition-colors mb-1">+91 {business.phonePrimary}</a>
                    {business.phoneSecondary && (
                      <a href={`tel:+91${business.phoneSecondary}`} className="block text-sm font-semibold text-gray-700 hover:text-primary transition-colors">+91 {business.phoneSecondary}</a>
                    )}
                  </div>
                </div>

                <div className="bg-neutral-bg p-6 rounded-2xl border border-gray-50 flex items-start gap-4">
                  <div className="text-support mt-1"><Clock size={24} /></div>
                  <div>
                    <h4 className="font-bold text-neutral-text mb-1">Working Hours</h4>
                    <p className="text-sm text-gray-600 font-medium">{business.hours.display}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold mb-6 text-neutral-text">Send us a message</h3>
              {formStatus === "success" ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-xl border border-green-100 text-center font-medium">
                  Thanks for reaching out! We will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <input 
                    type="text" 
                    placeholder="Service Needed" 
                    className="w-full px-4 py-3 rounded-xl bg-neutral-bg border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <button 
                    type="submit" 
                    disabled={formStatus === "submitting"}
                    className="w-full mt-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {formStatus === "submitting" ? "Sending..." : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-2">
                    * This form connects via Web3Forms (Placeholder)
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Map Embed */}
          <div className="w-full lg:w-1/2 min-h-[400px] rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-neutral-bg relative">
            <iframe
              src={business.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harshith E Sevai Maiyam Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
