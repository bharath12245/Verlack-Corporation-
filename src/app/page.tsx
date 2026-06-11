import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Database, Award, Landmark, TrendingUp, HelpCircle } from "lucide-react";

export default function HomePage() {
  const pathways = [
    {
      title: "HNI Families",
      description: "Wealth Advisory & PMS",
      details: "Preserving capital and driving tax-efficient compounding for portfolios from ₹2 Crore to ₹25 Crore.",
      href: "/services/wealth-management",
      tag: "COMPRESSED COMPOUNDING"
    },
    {
      title: "UHNI & Family Offices",
      description: "Comprehensive Legacy Services",
      details: "Institutional asset allocation, estate mapping, and private market deal flow for capital exceeding ₹25 Crore.",
      href: "/services/family-office-services",
      tag: "LEGACY ARCHITECTURE"
    },
    {
      title: "NRI & Global Indians",
      description: "Cross-Border Synchronization",
      details: "Navigating FEMA regulations, repatriation protocols, and US/UK tax efficiency with direct investment channels.",
      href: "/services/global-investments",
      tag: "GLOBAL TO LOCAL"
    },
    {
      title: "Corporates & Founders",
      description: "Capital & Treasury Solutions",
      details: "Structuring liquidity events, corporate treasury optimization, and corporate finance advisory mandates.",
      href: "/services/corporate-advisory",
      tag: "BALANCE SHEET OPTIMIZATION"
    }
  ];

  const services = [
    {
      title: "Wealth Management",
      desc: "Dynamic goal mapping and institutional asset allocation across traditional and alternative asset classes.",
      href: "/services/wealth-management"
    },
    {
      title: "Portfolio Management (PMS)",
      desc: "High-conviction concentrated equity mandates with direct asset ownership and complete transparency.",
      href: "/services/portfolio-management"
    },
    {
      title: "Investment Advisory",
      desc: "Pure fee-only counsel with zero distribution or product incentives, fully aligned with your outcomes.",
      href: "/services/investment-advisory"
    },
    {
      title: "Alternative Investments",
      desc: "Institutional access to tier-one private equity, private credit, and unlisted venture opportunities.",
      href: "/services/alternative-investments"
    },
    {
      title: "Estate & Succession Planning",
      desc: "Comprehensive trust creation, family constitutions, and multi-generational lineage protection.",
      href: "/services/estate-succession"
    },
    {
      title: "Global Investments",
      desc: "Sophisticated international asset allocation leveraging the Liberalised Remittance Scheme (LRS).",
      href: "/services/global-investments"
    }
  ];

  const faqs = [
    {
      q: "What makes Verlak Corporation structurally different from a private bank?",
      a: "Traditional private banks operate on a distribution model, earning commissions from products they cross-sell, which introduces structural conflicts of interest. Verlak is a pure SEBI-Registered Investment Adviser operating on a 100% fee-only, zero-commission framework. We are legally bound by a fiduciary duty to serve only your financial outcome."
    },
    {
      q: "How does the onboarding process begin for a portfolio above ₹25 Crore?",
      a: "For ultra-high-net-worth portfolios, we initiate our proprietary Wealth Health Score framework. This maps your entire asset ecosystem across 8 distinct dimensions (Portfolio Alignment, Goal Progress, Risk Calibration, Tax Efficiency, and more) before any capital allocation strategy is discussed or executed."
    }
  ];

  return (
    <div className="flex flex-col bg-brand-ivory text-brand-navy min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center bg-brand-navy text-brand-ivory px-4 py-20 border-b border-brand-gold/20">
        {/* Subtle background graphic line overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">
          <div className="inline-flex items-center space-x-2 border border-brand-gold/30 px-3 py-1 text-[10px] tracking-[0.2em] text-brand-gold uppercase bg-brand-navy/60 font-semibold">
            <span>Fiduciary-First Advisory</span>
            <span className="w-1 h-1 bg-brand-gold rounded-full"></span>
            <span>SEBI Registration Pending</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-tight tracking-tight max-w-4xl mx-auto">
            Where Wealth Meets <span className="text-brand-gold italic">Conviction.</span>
          </h1>

          <p className="font-sans text-sm sm:text-lg text-brand-silver max-w-2xl mx-auto leading-relaxed">
            Independent wealth management built for families, founders, and institutions seeking long-term capital stewardship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold text-brand-navy text-xs font-bold tracking-widest uppercase hover:bg-brand-ivory hover:text-brand-navy transition-colors duration-300 shadow-lg"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-3.5 border border-brand-ivory/30 text-brand-ivory text-xs font-bold tracking-widest uppercase hover:bg-brand-ivory hover:text-brand-navy hover:border-brand-ivory transition-colors duration-300"
            >
              Explore Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Credibility Positioning Bar (Pillars instead of fabricated numbers) */}
      <section className="w-full bg-brand-navy border-y border-brand-gold/20 py-8 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-brand-gold/10">
            <div className="flex flex-col justify-center px-4">
              <span className="font-serif text-sm tracking-wide text-brand-gold font-medium">Independent</span>
              <span className="font-sans text-[10px] tracking-widest text-brand-silver uppercase mt-1">Wealth Advisory</span>
            </div>
            <div className="flex flex-col justify-center px-4">
              <span className="font-serif text-sm tracking-wide text-brand-gold font-medium">Research-Led</span>
              <span className="font-sans text-[10px] tracking-widest text-brand-silver uppercase mt-1">Investment Intelligence</span>
            </div>
            <div className="flex flex-col justify-center px-4">
              <span className="font-serif text-sm tracking-wide text-brand-gold font-medium">Fiduciary-First</span>
              <span className="font-sans text-[10px] tracking-widest text-brand-silver uppercase mt-1">Outcome Alignment</span>
            </div>
            <div className="flex flex-col justify-center px-4">
              <span className="font-serif text-sm tracking-wide text-brand-gold font-medium">Global</span>
              <span className="font-sans text-[10px] tracking-widest text-brand-silver uppercase mt-1">Investment Access</span>
            </div>
            <div className="flex flex-col justify-center px-4 col-span-2 md:col-span-1 border-t border-brand-gold/10 md:border-t-0 mt-4 md:mt-0 pt-4 md:pt-0">
              <span className="font-serif text-sm tracking-wide text-brand-gold font-medium">Institutional</span>
              <span className="font-sans text-[10px] tracking-widest text-brand-silver uppercase mt-1">Portfolio Construction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Audience Strategic Pathways */}
      <section className="py-24 px-4 bg-brand-ivory">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-light">
              Engineered for <span className="italic">Distinct Mandates</span>
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
              Discover our institutional infrastructure, designed exclusively to match the scale, complexity, and structural nuances of your specific wealth ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pathways.map((card) => (
              <div 
                key={card.title} 
                className="bg-white border border-brand-gold/15 p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-300"
              >
                <div className="space-y-6">
                  <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block">
                    {card.tag}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-brand-navy font-semibold">{card.title}</h3>
                    <p className="text-xs text-brand-slate font-medium mt-1">{card.description}</p>
                  </div>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {card.details}
                  </p>
                </div>
                <div className="pt-8">
                  <Link 
                    href={card.href} 
                    className="inline-flex items-center text-xs font-bold tracking-wider text-brand-gold hover:text-brand-navy uppercase transition-colors group"
                  >
                    Explore Journey <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Philosophy Teaser (The Verlak Method) */}
      <section className="bg-brand-navy text-brand-ivory py-24 px-4 border-y border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
              Investment Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight">
              We Think in Decades, <span className="italic">Not Quarters.</span>
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            <p className="text-sm sm:text-base text-brand-silver leading-relaxed max-w-xl">
              Market volatility is temporary; structural conviction is permanent. The Verlak Method is our proprietary 
              six-pillar investment architecture (Quality, Growth, Longevity, Global, Legacy, Tax-Efficiency) deployed 
              to decouple your family capital from short-term market anxiety and align it with long-term macroeconomic realities.
            </p>
            <div className="pt-4">
              <Link 
                href="/about#philosophy" 
                className="inline-flex items-center px-6 py-3 border border-brand-gold/40 text-brand-gold text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300"
              >
                Discover The Verlak Method
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-brand-navy/60 border border-brand-gold/20 p-10 space-y-6 flex flex-col justify-center">
            <span className="text-5xl font-serif text-brand-gold leading-none">&ldquo;</span>
            <p className="font-serif text-lg sm:text-xl text-brand-ivory italic leading-relaxed">
              Your wealth deserves more than a transactional product. It deserves an enduring philosophy.
            </p>
            <div className="h-px w-12 bg-brand-gold/30"></div>
            <p className="text-[10px] tracking-wider text-brand-silver uppercase font-semibold">
              The Verlak Fiduciary Charter
            </p>
          </div>

        </div>
      </section>

      {/* 5. Core Ecosystem Blueprint */}
      <section className="py-24 px-4 bg-brand-ivory">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
              Institutional Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-light">
              Comprehensive <span className="italic">Services Ecosystem</span>
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold"></div>
            <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
              An integrated ecosystem where every capability informs the next—replicating the global private banking structures of Geneva and New York, tailored for India’s regulatory landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="bg-white border border-brand-gold/15 p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <h3 className="font-serif text-lg text-brand-navy font-semibold">{service.title}</h3>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Link 
                    href={service.href} 
                    className="inline-flex items-center text-xs font-bold tracking-wider text-brand-gold hover:text-brand-navy uppercase transition-colors group"
                  >
                    Learn More <ArrowRight className="ml-1 h-3. w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center px-8 py-3.5 bg-brand-navy text-brand-ivory text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Featured Intelligence (Research Centre Teaser) */}
      <section className="py-24 px-4 bg-white border-t border-brand-gold/15">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
                Verlak Research Centre
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-light">
                Intellectual Capital. <span className="italic">Empirical Conviction.</span>
              </h2>
              <div className="h-0.5 w-16 bg-brand-gold"></div>
              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                Access the institutional-grade economic analysis that drives our asset allocation frameworks. Our insights are defined by empirical evidence, not emotional reaction.
              </p>
            </div>
            <div>
              <Link 
                href="/research" 
                className="inline-flex items-center text-xs font-bold tracking-wider text-brand-navy hover:text-brand-gold uppercase transition-colors underline"
              >
                Enter Research Hub &rarr;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Featured Article - Large Left */}
            <div className="lg:col-span-7 bg-brand-ivory/40 border border-brand-gold/15 p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider text-brand-navy border border-brand-navy/35 bg-white uppercase">
                  Research Reports
                </span>
                <p className="text-[10px] text-brand-slate font-semibold">June 2025</p>
                <h3 className="font-serif text-2xl text-brand-navy font-normal leading-snug">
                  Verlak India Wealth Report: Capital Re-allocation Vectors Across High-Growth Sectors.
                </h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  An institutional review mapping out how UHNI families are rebalancing capital away from legacy assets towards private markets, structured credit, and domestic deep-tech opportunities.
                </p>
              </div>
              <div className="pt-8">
                <Link 
                  href="/research" 
                  className="inline-flex items-center px-6 py-2.5 bg-brand-navy text-brand-ivory text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300"
                >
                  Read Whitepaper
                </Link>
              </div>
            </div>

            {/* Right List of Articles */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              
              <div className="border-b border-brand-gold/10 pb-6 space-y-3">
                <span className="text-[9px] font-bold tracking-wider text-brand-gold uppercase">
                  Market Outlook
                </span>
                <h4 className="font-serif text-lg text-brand-navy font-semibold">
                  Navigating Long-Term Capital Gains (LTCG) Optimization Post-Budget.
                </h4>
                <p className="text-xs text-brand-slate leading-relaxed">
                  A structured tax analysis clarifying immediate portfolio adjustments needed to minimize tax drags on legacy holdings.
                </p>
                <Link href="/research" className="inline-block text-xs font-bold text-brand-navy hover:text-brand-gold uppercase pt-1">
                  View Document &rarr;
                </Link>
              </div>

              <div className="border-b border-brand-gold/10 pb-6 space-y-3">
                <span className="text-[9px] font-bold tracking-wider text-brand-gold uppercase">
                  CIO Letters
                </span>
                <h4 className="font-serif text-lg text-brand-navy font-semibold">
                  The Illusion of Diversification: Reviewing Over-Hedging Risks.
                </h4>
                <p className="text-xs text-brand-slate leading-relaxed">
                  Our Chief Investment Officer explores why traditional mutual fund allocations lead to high duplication and muted returns.
                </p>
                <Link href="/research" className="inline-block text-xs font-bold text-brand-navy hover:text-brand-gold uppercase pt-1">
                  View Document &rarr;
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. Institutional Trust Elements / Benchmarks */}
      <section className="py-16 px-4 bg-brand-navy text-brand-ivory border-y border-brand-gold/20">
        <div className="mx-auto max-w-7xl text-center space-y-8">
          <span className="text-[9px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Verified Institutional Benchmarks
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-light">
            Providing Global Standards of Excellence for Indian Wealth Stewardship
          </h3>
          <div className="h-px w-20 bg-brand-gold/40 mx-auto"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4 items-center justify-center max-w-4xl mx-auto opacity-70">
            <div className="flex flex-col items-center justify-center p-4 border border-brand-gold/10">
              <span className="font-serif text-xs font-semibold text-brand-silver">EUROMONEY</span>
              <span className="text-[9px] tracking-widest uppercase text-brand-gold mt-1 font-semibold">Private Bank Standards</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border border-brand-gold/10">
              <span className="font-serif text-xs font-semibold text-brand-silver">FORBES INDIA</span>
              <span className="text-[9px] tracking-widest uppercase text-brand-gold mt-1 font-semibold">RIA Frameworks</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border border-brand-gold/10">
              <span className="font-serif text-xs font-semibold text-brand-silver">HUBBIS ASIA</span>
              <span className="text-[9px] tracking-widest uppercase text-brand-gold mt-1 font-semibold">Research Guidelines</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 border border-brand-gold/10">
              <span className="font-serif text-xs font-semibold text-brand-silver">CNBC FINANCIAL</span>
              <span className="text-[9px] tracking-widest uppercase text-brand-gold mt-1 font-semibold">Advisory Rigor</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Client Testimonial */}
      <section className="py-24 px-4 bg-brand-ivory text-brand-navy">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <span className="text-6xl font-serif text-brand-gold leading-none">&ldquo;</span>
          <blockquote className="font-serif text-xl sm:text-2xl font-normal italic leading-relaxed text-brand-navy">
            Verlak dismantled the opaque product-pushing model that dominated our previous banking relationships. Their fee-only fiduciary model aligned their success with ours, treating our family capital with intellectual honesty.
          </blockquote>
          <div className="h-px w-12 bg-brand-gold mx-auto"></div>
          <div>
            <p className="text-xs font-bold tracking-widest text-brand-navy uppercase">
              First-Generation Technology Founder &amp; Industrialist
            </p>
            <p className="text-[10px] tracking-widest text-brand-slate uppercase mt-1">
              Mumbai (Anonymized in strict accordance with SEBI compliance frameworks)
            </p>
          </div>
        </div>
      </section>

      {/* 9. Strategic FAQs */}
      <section className="py-24 px-4 bg-white border-t border-brand-gold/15">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
              Strategic FAQs
            </span>
            <h2 className="font-serif text-3xl text-brand-navy font-light">
              Understand Our <span className="italic">Operational Design</span>
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          </div>

          <div className="space-y-12">
            {faqs.map((faq) => (
              <div key={faq.q} className="space-y-3 border-b border-brand-gold/10 pb-6">
                <h3 className="font-serif text-lg text-brand-navy font-semibold flex items-start">
                  <HelpCircle className="h-5 w-5 text-brand-gold mr-2.5 mt-0.5 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className="bg-brand-navy text-brand-ivory py-24 px-4 text-center border-t border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-8">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Partner with an Independent Fiduciary
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light">
            Begin Your Wealth Stewardship Journey.
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          <p className="text-sm text-brand-silver max-w-2xl mx-auto leading-relaxed">
            Connect with a senior partner for a comprehensive, conflict-free valuation of your current portfolio architecture.
            <br />
            <span className="text-brand-gold font-semibold mt-2 block text-xs tracking-wider uppercase">
              Minimum engagement threshold: ₹2 Crore portfolio aggregate.
            </span>
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-brand-gold text-brand-navy text-xs font-bold tracking-widest uppercase hover:bg-brand-ivory hover:text-brand-navy transition-colors duration-300 shadow-lg"
            >
              Request Private Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
