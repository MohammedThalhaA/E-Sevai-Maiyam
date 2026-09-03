"use client";

export default function HowItWorks() {
  return (
    <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-16 md:py-20" id="how-it-works">
      <div className="flex flex-col items-center text-center gap-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-[10px] sm:text-label-sm uppercase font-bold tracking-wider">
          Effortless 3-Step Flow
        </div>
        <h2 className="font-headline-lg text-[26px] sm:text-[32px] md:text-headline-lg font-bold text-on-surface tracking-tight">
          How It Works
        </h2>
        <p className="font-body-lg text-[14px] sm:text-body-md md:text-body-lg text-tertiary max-w-xl">
          Skip the government office queues in 3 easy steps.
        </p>
      </div>
      
      {/* 3-Step Streamlined Process Strip with Connecting Lines */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Background Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-surface-container-highest z-0"></div>
        
        {/* Step 1 */}
        <div className="relative flex flex-col items-center text-center gap-4 z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-container text-on-surface flex items-center justify-center font-display-hero text-[22px] md:text-[28px] font-extrabold shadow-[0_8px_20px_rgba(34,197,94,0.35)]">
            1
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm w-full flex flex-col items-center gap-2">
            <span className="font-headline-sm text-[18px] font-bold text-on-surface">Visit or Call/WhatsApp</span>
            <p className="font-body-sm text-body-sm text-tertiary">
              Tell us what document or service you need. We verify eligibility and list required proof immediately.
            </p>
            <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-primary pt-2">
              <span className="material-symbols-outlined text-[16px]">touch_app</span> Walk-in or Chat
            </span>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="relative flex flex-col items-center text-center gap-4 z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-container text-on-surface flex items-center justify-center font-display-hero text-[22px] md:text-[28px] font-extrabold shadow-[0_8px_20px_rgba(34,197,94,0.35)]">
            2
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm w-full flex flex-col items-center gap-2">
            <span className="font-headline-sm text-[18px] font-bold text-on-surface">Submit Documents</span>
            <p className="font-body-sm text-body-sm text-tertiary">
              Bring physical documents to our Villivakkam desk or simply share photos via WhatsApp securely.
            </p>
            <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-secondary pt-2">
              <span className="material-symbols-outlined text-[16px]">lock</span> 100% Data Confidentiality
            </span>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="relative flex flex-col items-center text-center gap-4 z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-container text-on-surface flex items-center justify-center font-display-hero text-[22px] md:text-[28px] font-extrabold shadow-[0_8px_20px_rgba(34,197,94,0.35)]">
            3
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm w-full flex flex-col items-center gap-2">
            <span className="font-headline-sm text-[18px] font-bold text-on-surface">Get It Done — Fast</span>
            <p className="font-body-sm text-body-sm text-tertiary">
              We file in the portal, track status, and hand over your authentic certificate, acknowledgement, or PVC card.
            </p>
            <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-primary pt-2">
              <span className="material-symbols-outlined text-[16px]">done_all</span> Often Same-Day
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
