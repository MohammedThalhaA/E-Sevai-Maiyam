"use client";

import { MapPin, Phone, Clock, Send } from "lucide-react";
import { business } from "../data/site-content";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1000);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-bg relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent z-0" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-text mb-6">Get in Touch</h2>
            <p className="text-lg text-neutral-muted max-w-2xl mx-auto font-medium">
              Visit our center, call us, or send a message. We are here to help you.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-white p-8 rounded-[32px] premium-shadow hover:-translate-y-1 transition-transform h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                    <MapPin size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-text mb-3">Our Location</h4>
                  <p className="text-neutral-muted mb-4 font-medium flex-grow">{business.address}</p>
                  <a 
                    href="https://maps.google.com/?q=Villivakkam+Bus+Terminus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>

                <div className="flex flex-col gap-6 h-full">
                  <div className="bg-white p-8 rounded-[32px] premium-shadow hover:-translate-y-1 transition-transform flex-1">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-4">
                      <Phone size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-text mb-2">Call Us</h4>
                    <a href={`tel:+91${business.phonePrimary}`} className="block text-lg font-bold text-neutral-muted hover:text-primary transition-colors">{business.phonePrimary}</a>
                  </div>

                  <div className="bg-white p-8 rounded-[32px] premium-shadow hover:-translate-y-1 transition-transform flex-1">
                    <div className="w-12 h-12 bg-support/10 text-support rounded-2xl flex items-center justify-center mb-4">
                      <Clock size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-text mb-2">Hours</h4>
                    <p className="text-neutral-muted font-bold">{business.hours.display}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Quick Contact Form */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-[32px] premium-shadow p-8 lg:p-10 border border-gray-50">
                <h3 className="text-2xl font-bold mb-8 text-neutral-text">Send us a message</h3>
                {formStatus === "success" ? (
                  <div className="bg-green-50 text-green-700 p-8 rounded-[24px] border border-green-100 text-center font-bold text-lg">
                    Thanks for reaching out! We will get back to you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required 
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-bg border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all text-neutral-text font-medium placeholder:text-gray-400"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      required 
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-bg border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all text-neutral-text font-medium placeholder:text-gray-400"
                    />
                    <input 
                      type="text" 
                      placeholder="Service Needed" 
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-bg border border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all text-neutral-text font-medium placeholder:text-gray-400"
                    />
                    <button 
                      type="submit" 
                      disabled={formStatus === "submitting"}
                      className="w-full mt-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {formStatus === "submitting" ? "Sending..." : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Map Embed */}
          <FadeIn delay={0.3} className="w-full lg:w-1/2 h-full min-h-[500px]">
            <div className="w-full h-full min-h-[500px] rounded-[40px] overflow-hidden premium-shadow bg-neutral-bg relative border border-white/50">
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
