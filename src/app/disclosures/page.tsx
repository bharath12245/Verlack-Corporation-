import React from "react";

export default function DisclosuresPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 font-sans text-brand-navy">
      <h1 className="font-serif text-3xl sm:text-4xl font-light mb-4">Regulatory Disclosures &amp; Fee Schedules</h1>
      <p className="text-[10px] text-brand-gold tracking-widest uppercase font-semibold mb-8">
        Status: SEBI &amp; AMFI Registration Pending
      </p>
      
      <div className="h-px w-20 bg-brand-gold mb-8"></div>
      
      <div className="space-y-6 text-xs sm:text-sm text-brand-slate leading-relaxed">
        <p>
          In accordance with SEBI Regulations, this page provides access to all material disclosures, fee schedules, conflict-of-interest registers, and partner qualifications for Verlak Corporation.
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">1. SEBI RIA Disclosure</h2>
        <p>
          Verlak Corporation Private Limited has filed applications for registration as a Registered Investment Adviser (RIA) with the Securities and Exchange Board of India (SEBI). <strong>Advisory services will only be offered to resident and non-resident clients after SEBI RIA registration is officially granted.</strong>
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">2. Fiduciary Fee Structure Guideline</h2>
        <p>
          Our advisory fees will be structured transparently, aligning directly with client parameters and regulatory limits. Our fee schedules will be based strictly on:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 font-medium text-brand-navy">
          <li><strong>Asset-Under-Advisory (AUA) Fees:</strong> Calculated as a transparent annual percentage of the assets under our advisory mandate (ranging from 0.50% to 1.25% p.a.), billed quarterly.</li>
          <li><strong>Fixed Retainer Fees:</strong> Custom flat annual retainers for comprehensive family office and succession advisory work (ranging from ₹5 Lakhs to ₹25 Lakhs p.a.), dependent on complexity.</li>
        </ul>
        <p>
          We accept zero commercial benefits, backend commissions, or soft-dollar rebates from any product sponsors or issuers.
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">3. Conflict of Interest register</h2>
        <p>
          Verlak maintains a strict Conflict of Interest policy. Since we do not distribute financial products and have no affiliations with banking institutions or brokerage firms, we have zero commercial incentives to recommend specific securities. Any personal or corporate holdings of our partners or directors in recommended companies will be fully disclosed to clients.
        </p>
      </div>
    </div>
  );
}
