import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 font-sans text-brand-navy">
      <h1 className="font-serif text-3xl sm:text-4xl font-light mb-4">Privacy Policy</h1>
      <p className="text-[10px] text-brand-gold tracking-widest uppercase font-semibold mb-8">
        Last Updated: June 2026 | DPDP Act 2023 Compliant
      </p>
      
      <div className="h-px w-20 bg-brand-gold mb-8"></div>
      
      <div className="space-y-6 text-xs sm:text-sm text-brand-slate leading-relaxed">
        <p>
          Verlak Corporation Private Limited (&ldquo;Verlak,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and confidentiality of your personal and financial data. This Privacy Policy details how we collect, process, store, and safeguard data in accordance with the Digital Personal Data Protection (DPDP) Act 2023 and SEBI regulatory guidelines.
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">1. Information We Collect</h2>
        <p>
          We collect personal and financial information to provide investment advisory and wealth management services. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li><strong>Identity Data:</strong> Legal name, Permanent Account Number (PAN), Aadhaar number, passport details, nationality, and KYC data.</li>
          <li><strong>Contact Data:</strong> Corporate and personal email address, phone number, and physical mailing address.</li>
          <li><strong>Financial Portfolio Data:</strong> Asset size details, existing mutual fund holding structures, bank account credentials, tax details, and transaction histories.</li>
          <li><strong>Usage and Interaction Data:</strong> IP address, device specs, pages viewed, and other analytical information when accessing our client portal.</li>
        </ul>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">2. Purpose of Processing</h2>
        <p>
          Your data is processed based on lawful grounds of consent and legitimate regulatory purposes:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Fulfilling our fiduciary and SEBI-regulated advisory duties.</li>
          <li>Completing KYC check verification and account opening procedures with custodians.</li>
          <li>Providing access to the Verlak Client Portal and investment calculators.</li>
          <li>Ensuring corporate safety, prevention of money laundering (PML Act compliance), and fraud detection.</li>
        </ul>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">3. Data Security & Retention</h2>
        <p>
          We implement rigorous security controls, including advanced database encryption, multi-factor authentication, and firewalls, to prevent unauthorized access. Personal data is retained only as long as necessary to fulfill advisory mandates, or as required by SEBI record-keeping regulations.
        </p>

        <h2 className="font-serif text-lg text-brand-navy font-semibold mt-8">4. Your Rights Under DPDP Act 2023</h2>
        <p>
          Under the DPDP Act 2023, you have the right to request access to, correction of, or erasure of your personal data. You may withdraw your consent at any time, subject to statutory constraints. For data queries, please contact our Data Protection Officer at <a href="mailto:info@verlakcorporation.com" className="text-brand-gold underline font-semibold">info@verlakcorporation.com</a>.
        </p>
      </div>
    </div>
  );
}
