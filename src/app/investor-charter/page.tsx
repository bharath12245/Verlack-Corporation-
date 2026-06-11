import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEBI Investor Charter & Client Rights",
  description: "Official SEBI Investor Charter for Verlak Corporation detailing client rights, advisory duties, and regulatory grievance resolution mechanisms.",
};

export default function InvestorCharterPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 font-sans text-brand-navy">
      <h1 className="font-serif text-3xl sm:text-4xl font-light mb-4">Investor Charter</h1>
      <p className="text-[10px] text-brand-gold tracking-widest uppercase font-semibold mb-8">
        SEBI Mandatory Disclosure Framework for RIA &amp; PMS
      </p>
      
      <div className="h-px w-20 bg-brand-gold mb-8"></div>
      
      <div className="space-y-6 text-xs sm:text-sm text-brand-slate leading-relaxed">
        <p>
          This Investor Charter is published in accordance with SEBI guidelines to inform investors about their rights, duties, grievance redressal mechanisms, and our fiduciary obligations as their wealth advisor.
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">1. Vision &amp; Mission of Verlak Fiduciary Advisory</h2>
        <p>
          <strong>Vision:</strong> To establish Verlak as India&apos;s most trusted independent wealth management institution, preserving multi-generational family legacies through research-led conviction.
          <br />
          <strong>Mission:</strong> To provide conflict-free, fee-only investment advisory services with absolute transparency, adhering to the highest standards of regulatory compliance.
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">2. Rights of Investors</h2>
        <p>
          As an advisory client of Verlak Corporation, you have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Receive objective, research-backed investment advice aligned with your Risk Profile.</li>
          <li>Receive full transparency regarding advisory fees, with zero hidden commissions.</li>
          <li>Receive consolidated performance reports and custodianship statement updates.</li>
          <li>File grievances and access SEBI SCORES portal for prompt grievance resolution.</li>
        </ul>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">3. Fiduciary Responsibilities of Verlak</h2>
        <p>
          We pledge to:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Perform detailed suitability checks and risk profiling before recommending allocations.</li>
          <li>Disclose all material facts, holdings, and potential conflicts of interest immediately.</li>
          <li>Ensure all client data remains strictly private and protected under the DPDP Act 2023.</li>
        </ul>
      </div>
    </div>
  );
}
