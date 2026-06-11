import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 font-sans text-brand-navy">
      <h1 className="font-serif text-3xl sm:text-4xl font-light mb-4">Terms and Conditions</h1>
      <p className="text-[10px] text-brand-gold tracking-widest uppercase font-semibold mb-8">
        Last Updated: June 2026
      </p>
      
      <div className="h-px w-20 bg-brand-gold mb-8"></div>
      
      <div className="space-y-6 text-xs sm:text-sm text-brand-slate leading-relaxed">
        <p>
          Welcome to the digital platform of Verlak Corporation Private Limited (&ldquo;Verlak,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing our website, using our investment calculators, or entering our Client Portal, you agree to comply with and be bound by the following Terms and Conditions.
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">1. No Investment Product Distribution</h2>
        <p>
          Verlak Corporation acts strictly in a fee-only advisory capacity. We do not distribute mutual funds, insurance, or other financial products for commission. All investment decisions are guided by a fiduciary framework, and calculations provided on this site are for estimation and strategic planning purposes only.
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">2. Registration Status Disclaimer</h2>
        <p>
          Verlak Corporation&apos;s registrations with the Securities and Exchange Board of India (SEBI) as a Registered Investment Adviser (RIA) and Portfolio Manager (PMS), and its AMFI ARN licenses, are currently in a pending approval status. No formal client onboarding is executed, nor are advisory contracts signed, until all regulatory approvals are officially granted.
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">3. Use of Investment Calculators & Portal</h2>
        <p>
          Our web-based calculators (SIP, Retirement, Risk Profiler, and Tax Analyzer) are tools to help clients visualize asset projections. They use hypothetical inputs and assumptions (e.g., constant return rates and inflation models) that may vary significantly from actual market conditions. Past performance numbers are historical and do not guarantee future returns.
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">4. Limitations of Liability</h2>
        <p>
          Verlak Corporation, its directors, and employees accept no liability for any loss or damage arising directly or indirectly from the use of, or reliance upon, information and calculators provided on this digital platform.
        </p>
      </div>
    </div>
  );
}
