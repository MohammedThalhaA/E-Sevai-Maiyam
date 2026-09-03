"use client";

import { ShieldCheck, Clock, IndianRupee, Smile } from "lucide-react";
import FadeIn from "./FadeIn";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Govt-Authorized",
    description: "Official CSC recognized by the Digital India initiative.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Get your certificates and documents processed quickly.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges. We follow standard government pricing.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Smile,
    title: "Friendly Staff",
    description: "Our Villivakkam team guides you step-by-step in Tamil or English.",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-neutral-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-text mb-6">Why Choose Us?</h2>
            <p className="text-lg text-neutral-muted max-w-2xl mx-auto font-medium">
              Experience hassle-free government services right in your neighborhood.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="text-center p-8 rounded-[32px] bg-white premium-shadow hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className={`w-20 h-20 mx-auto mb-8 rounded-[24px] flex items-center justify-center rotate-3 hover:rotate-0 transition-transform ${reason.color}`}>
                    <Icon size={36} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-text">{reason.title}</h3>
                  <p className="text-neutral-muted leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
