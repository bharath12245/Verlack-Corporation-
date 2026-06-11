"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, BookOpen, Scale, ChevronRight } from "lucide-react";

export default function AboutPageClient() {
  const [activeTab, setActiveTab] = useState<string>("regulatory");

  const trustMatrix = {
    regulatory: {
      title: "Regulatory Trust",
      execution: "Strict adherence to SEBI RIA & PMS guidelines. Fiduciary accountability written into all engagements.",
      verification: "Statutory third-party annual audits, transparent fee schedules, and public SEBI client grievance reports."
    },
    intellectual: {
      title: "Intellectual Trust",
      execution: "All recommendations generated from empirical research published by the Verlak Research Centre.",
      verification: "Access to macroeconomic whitepapers, sector deep-dives, and public CIO commentary for auditing."
    },
    performance: {
      title: "Performance Trust",
      execution: "Concentrated high-conviction portfolios constructed to maximize risk-adjusted absolute returns.",
      verification: "Transparent third-party custodian records, direct demat ownership, and standard performance attribution."
    },
    relationship: {
      title: "Relationship Trust",
      execution: "Outsourced CIO services managed directly by named senior partners rather than transactional RMs.",
      verification: "Significantly low client-to-advisor ratios, direct partner access, and multi-generational succession reviews."
    }
  };

  const pillars = [
    {
      title: "Intellectual Honesty",
      desc: "We reject speculative market noise. All client capital allocation strategies originate directly from empirical findings verified by the Verlak Research Centre.",
      icon: BookOpen
    },
    {
      title: "Fiduciary Purity",
      desc: "Operating under a zero-commission, pure fee-only advisory framework ensures our operational incentives are fully aligned with client outcomes.",
      icon: Scale
    },
    {
      title: "Long-Term Stewardship",
      desc: "We do not evaluate success across fiscal quarters. We build and secure asset architectures intended to preserve purchasing power across generations.",
      icon: Shield
    }
  ];

  const faqs = [
    {
      q: "How does Verlak ensure structural continuity across multiple generations?",
      a: "Our advisory framework operates at the family-unit level rather than on isolated individual accounts. Our dedicated advisors work with family members and their next-generation heirs to integrate estate planning, family values, and structural governance directly into the overarching investment policy statement."
    },
    {
      q: "Who audits the performance metrics and compliance frameworks of Verlak?",
      a: "Verlak undergoes regular internal and independent external compliance audits to ensure absolute adherence to SEBI investment advisory regulations and data protection requirements. Direct demat holdings allow clients to audit their assets independently in real time."
    }
  ];

  return (
    <div className="flex flex-col bg-brand-ivory text-brand-navy min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="bg-brand-navy text-brand-ivory py-24 px-4 text-center border-b border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            About Verlak Corporation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light leading-tight">
            Built for Legacies. <span className="italic">Not Benchmarks.</span>
          </h1>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          <p className="font-sans text-sm sm:text-base text-brand-silver max-w-2xl mx-auto leading-relaxed">
            The institutional foundation designed to deliver global private banking standards with uncompromised local mastery.
          </p>
        </div>
      </section>

      {/* 2. Origin Narrative */}
      <section className="py-24 px-4 bg-white border-b border-brand-gold/15">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 space-y-4">
              <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block">Our Origins</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-navy font-light leading-tight">
                The Architecture of Conviction
              </h2>
              <div className="h-0.5 w-12 bg-brand-gold"></div>
            </div>
            
            <div className="md:col-span-8 space-y-6 text-xs sm:text-sm text-brand-slate leading-relaxed">
              <p>
                Verlak Corporation was established to address a clear gap in the Indian private wealth sector: high-net-worth and ultra-high-net-worth families lacked access to independent investment intelligence free from product bias and commission alignment.
              </p>
              <p>
                Benchmarked against firms like UBS, BlackRock, and Goldman Sachs, Verlak was engineered from the ground up as an independent investment intelligence institution. The name &apos;Verlak&apos; evokes strength, precision, and permanence—the foundational qualities required to guide multi-generational capital through complex economic cycles.
              </p>
              <p className="font-serif text-brand-navy italic text-sm border-l-2 border-brand-gold pl-4 py-1">
                &ldquo;We do not sell products. We build legacies.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Three Pillars of Trust */}
      <section className="py-24 px-4 bg-brand-ivory border-b border-brand-gold/15">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Institutional Values</span>
            <h2 className="font-serif text-3xl text-brand-navy font-light">Our Founding Commitments</h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div key={pillar.title} className="bg-white border border-brand-gold/15 p-8 space-y-6 shadow-sm">
                  <div className="inline-flex p-3 bg-brand-navy text-brand-gold rounded-none">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg text-brand-navy font-semibold">{pillar.title}</h3>
                  <p className="text-xs text-brand-slate leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Trust Matrix */}
      <section className="py-24 px-4 bg-white border-b border-brand-gold/15">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Audit Parameters</span>
            <h2 className="font-serif text-3xl text-brand-navy font-light">The Trust Framework</h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
            <p className="text-xs text-brand-slate max-w-lg mx-auto">
              We separate trust from marketing claims. Click through our structured trust framework to inspect our direct execution methods and verification vectors.
            </p>
          </div>

          {/* Interactive Toggle Headers */}
          <div className="flex flex-wrap border-b border-brand-gold/20 justify-center gap-2 mb-8">
            {Object.keys(trustMatrix).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-3 text-xs tracking-wider uppercase font-semibold transition-colors border-b-2 -mb-px ${
                  activeTab === key
                    ? "border-brand-gold text-brand-navy font-bold"
                    : "border-transparent text-brand-slate hover:text-brand-navy"
                }`}
              >
                {trustMatrix[key as keyof typeof trustMatrix].title}
              </button>
            ))}
          </div>

          {/* Content Panel (Soft Shadow, Gold Border, Ivory Background) */}
          <div className="bg-brand-ivory/50 border border-brand-gold/20 p-8 shadow-sm space-y-6">
            <h3 className="font-serif text-xl text-brand-navy font-semibold border-b border-brand-gold/10 pb-3">
              {trustMatrix[activeTab as keyof typeof trustMatrix].title} Parameters
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
              <div className="space-y-2">
                <h4 className="font-sans font-bold tracking-widest text-[10px] text-brand-gold uppercase">Operational Execution Core</h4>
                <p className="text-brand-slate leading-relaxed">
                  {trustMatrix[activeTab as keyof typeof trustMatrix].execution}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-sans font-bold tracking-widest text-[10px] text-brand-gold uppercase">Primary Verification Vector</h4>
                <p className="text-brand-slate leading-relaxed">
                  {trustMatrix[activeTab as keyof typeof trustMatrix].verification}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strategic Compliance Trust Badge Block */}
      <section className="py-20 px-4 bg-brand-navy text-brand-ivory border-y border-brand-gold/20">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Absolute Transparency Metrics</span>
          <h3 className="font-serif text-xl sm:text-2xl font-light">Rigorous Corporate Governance & Regulatory Standards</h3>
          <div className="h-px w-20 bg-brand-gold/40 mx-auto"></div>
          <p className="text-xs text-brand-silver max-w-xl mx-auto leading-relaxed">
            Verlak Corporation Private Limited operates in strict alignment with SEBI guidelines and the Digital Personal Data Protection (DPDP) Act 2023. We hold ourselves to absolute compliance without fabrication.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 max-w-md mx-auto">
            <div className="border border-brand-gold/20 p-4 bg-brand-navy/60">
              <span className="text-[10px] text-brand-gold tracking-widest uppercase font-semibold block">Investment Advisory</span>
              <p className="text-xs text-brand-silver font-medium mt-1">SEBI RIA Registered [Registration Pending]</p>
            </div>
            <div className="border border-brand-gold/20 p-4 bg-brand-navy/60">
              <span className="text-[10px] text-brand-gold tracking-widest uppercase font-semibold block">Mutual Fund Access</span>
              <p className="text-xs text-brand-silver font-medium mt-1">AMFI ARN License [License Pending]</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Strategic FAQs */}
      <section className="py-24 px-4 bg-white border-b border-brand-gold/15">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Strategic Queries</span>
            <h2 className="font-serif text-3xl text-brand-navy font-light">Frequently Asked Questions</h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          </div>

          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="space-y-2.5 pb-6 border-b border-brand-gold/10">
                <h3 className="font-serif text-lg text-brand-navy font-semibold">{item.q}</h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing Call to Action */}
      <section className="py-24 px-4 bg-brand-ivory text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="font-serif text-3xl text-brand-navy font-light">Partner with an Independent Fiduciary.</h2>
          <div className="h-0.5 w-12 bg-brand-gold mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto leading-relaxed">
            Discover the long-term compounding benefits of conflict-free investment architecture. Let our senior partners conduct an objective audit of your current holdings.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-brand-gold text-brand-navy text-xs font-bold tracking-widest uppercase hover:bg-brand-navy hover:text-brand-ivory transition-colors duration-300 shadow-sm"
            >
              Request a Structural Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
