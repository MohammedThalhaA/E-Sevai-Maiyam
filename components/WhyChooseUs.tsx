"use client";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-surface-container-low py-16" id="why-us">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm uppercase font-bold tracking-wide">
            Villivakkam&apos;s Most Trusted Counter
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight">
            Why Choose Harshith E Sevai?
          </h2>
          <p className="font-body-lg text-body-md md:text-body-lg text-tertiary max-w-xl">
            We combine authenticated government agency with the welcoming speed of a neighborhood digital cafe.
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
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">Govt-Authorized Center</h3>
              <p className="font-body-sm text-body-sm text-tertiary leading-relaxed">
                Certified CSC operator with direct, authenticated portal credentials for Tamil Nadu and Central databases.
              </p>
            </div>
          </div>
          
          {/* 2. Fast Turnaround */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-[26px]">speed</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">Fast Turnaround</h3>
              <p className="font-body-sm text-body-sm text-tertiary leading-relaxed">
                Zero waiting on sluggish queues. Swift processing with several certificates and utility receipts delivered same-day.
              </p>
            </div>
          </div>
          
          {/* 3. Transparent Pricing */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-[26px]">price_check</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">Transparent Pricing</h3>
              <p className="font-body-sm text-body-sm text-tertiary leading-relaxed">
                Strict adherence to standardized government departmental rates with clear breakdown and digital receipts.
              </p>
            </div>
          </div>
          
          {/* 4. Friendly Local Staff */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface text-[26px]">support_agent</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">Friendly Local Staff</h3>
              <p className="font-body-sm text-body-sm text-tertiary leading-relaxed">
                Warm, bilingual guidance in Tamil (தமிழ்) and English. End-to-end help with documentation from start to finish.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
