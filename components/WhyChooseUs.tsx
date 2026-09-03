"use client";

import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-surface-container-low py-16" id="why-us">
      <div className="max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1536px] min-[1920px]:max-w-[1920px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop transition-all duration-300">
        
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label-sm text-[10px] sm:text-label-sm uppercase font-bold tracking-wide">
            {t.whyUs.tagline}
          </div>
          <h2 className="font-headline-lg text-[26px] sm:text-[32px] md:text-headline-lg font-bold text-on-surface tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="font-body-lg text-[14px] sm:text-body-md md:text-body-lg text-tertiary max-w-xl">
            {t.whyUs.subtitle}
          </p>
        </div>
        
        {/* 4 Clean Mini-Cards in a Horizontal Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Govt-Authorized Center */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-[26px]">verified_user</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">{t.whyUs.authTitle}</h3>
              <p className="font-body-sm text-body-sm text-tertiary leading-relaxed">
                {t.whyUs.authSub}
              </p>
            </div>
          </div>
          
          {/* 2. Fast Turnaround */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-[26px]">speed</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">{t.whyUs.fastTitle}</h3>
              <p className="font-body-sm text-body-sm text-tertiary leading-relaxed">
                {t.whyUs.fastSub}
              </p>
            </div>
          </div>
          
          {/* 3. Transparent Pricing */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-[26px]">price_check</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">{t.whyUs.priceTitle}</h3>
              <p className="font-body-sm text-body-sm text-tertiary leading-relaxed">
                {t.whyUs.priceSub}
              </p>
            </div>
          </div>
          
          {/* 4. Friendly Local Staff */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-[26px]">support_agent</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">{t.whyUs.staffTitle}</h3>
              <p className="font-body-sm text-body-sm text-tertiary leading-relaxed">
                {t.whyUs.staffSub}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
