"use client";

import { business } from "../data/site-content";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-section-gap-sm pb-24 lg:pb-16 mt-section-gap-md">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-desktop mb-12">
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-fixed-dim text-[24px]">verified</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-surface-container-lowest tracking-tight">{business.name}</h3>
                <p className="font-label-sm text-label-sm text-primary-fixed-dim">{business.nameTa}</p>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-tertiary-container max-w-sm">
              {t.footer.desc}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary-fixed text-label-sm font-label-sm self-start">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>{t.footer.authPill}</span>
            </div>
          </div>
          
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-surface-container-lowest font-bold">{t.footer.servicesTitle}</h4>
            <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-tertiary-container">
              <li><a className="hover:text-primary-fixed-dim transition-colors" href="#services">Aadhaar Enrolment & Update</a></li>
              <li><a className="hover:text-primary-fixed-dim transition-colors" href="#services">Patta & Chitta / EC Online</a></li>
              <li><a className="hover:text-primary-fixed-dim transition-colors" href="#services">Income & Community Certificates</a></li>
              <li><a className="hover:text-primary-fixed-dim transition-colors" href="#services">Voter ID & Passport Seva</a></li>
              <li><a className="hover:text-primary-fixed-dim transition-colors" href="#services">TNEB & Property Tax Payments</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-surface-container-lowest font-bold">{t.footer.timingsTitle}</h4>
            <div className="flex flex-col gap-2 font-body-sm text-body-sm text-tertiary-container">
              <p><span className="font-label-sm text-surface-container-lowest block">Mon – Sat</span>09:00 AM – 09:00 PM</p>
              <p><span className="font-label-sm text-surface-container-lowest block">Sunday</span>10:00 AM – 03:00 PM</p>

            </div>
          </div>
          
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-surface-container-lowest font-bold">{t.footer.addressTitle}</h4>
            <div className="flex flex-col gap-3 font-body-sm text-body-sm text-tertiary-container">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary-fixed text-[20px] shrink-0 mt-0.5">location_on</span>
                <p>{business.address}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">call</span>
                <a className="hover:text-surface-container-lowest transition-colors" href={`tel:+91${business.phonePrimary}`}>+91 {business.phonePrimary}</a>
              </div>
              {business.email && (
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">mail</span>
                  <span className="hover:text-surface-container-lowest">{business.email}</span>
                </div>
              )}
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-tertiary-container">
          <p>© {currentYear} {business.name} • CSC Villivakkam. All rights reserved.</p>
          <div className="flex items-center gap-6 font-label-sm text-label-sm">
            <a className="hover:text-surface-container-lowest transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-surface-container-lowest transition-colors" href="#">CSC Terms of Service</a>
            <a className="hover:text-surface-container-lowest transition-colors" href="#">Tamil Nadu e-Sevai Directory</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
