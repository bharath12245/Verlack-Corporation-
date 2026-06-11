import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Briefcase, Landmark, Percent, Settings, ShieldAlert, Globe, GraduationCap } from "lucide-react";

export default function ServicesPage() {
  const serviceCategories = [
    {
      name: "Wealth Management",
      slug: "wealth-management",
      tagline: "Comprehensive Capital Architecture",
      desc: "An integrated, goals-based asset stewardship mandate that structures your entire financial ecosystem for sustained long-term compounding.",
      icon: Layers
    },
    {
      name: "Portfolio Management (PMS)",
      slug: "portfolio-management",
      tagline: "Direct Asset Ownership",
      desc: "Focused, high-conviction public equity portfolios managed through transparent structures with no hidden mutual fund wrappers.",
      icon: Briefcase
    },
    {
      name: "Investment Advisory",
      slug: "investment-advisory",
      tagline: "Fiduciary Alignment",
      desc: "Independent, research-driven counsel with 100% fee-only, zero-commission alignment. Legally bound to serve only your outcomes.",
      icon: Percent
    },
    {
      name: "Alternative Investments",
      slug: "alternative-investments",
      tagline: "Institutional Deal Flow",
      desc: "Diversify beyond public markets with exclusive access to curated private credit, tier-one private equity, and unlisted alternative assets.",
      icon: Settings
    },
    {
      name: "Family Office Services",
      slug: "family-office-services",
      tagline: "Securing Family Legacies",
      desc: "A dedicated, comprehensive Chief Investment Officer infrastructure designed to protect and grow the multi-generational capital of India's premier families.",
      icon: Landmark
    },
    {
      name: "Estate & Succession",
      slug: "estate-succession",
      tagline: "Protecting Lineage Assets",
      desc: "Structuring private family trusts and robust succession frameworks to ensure your assets transfer smoothly to future generations without legal friction.",
      icon: ShieldAlert
    },
    {
      name: "Global Investments",
      slug: "global-investments",
      tagline: "Cross-Border Wealth desk",
      desc: "Sophisticated cross-border asset management allowing resident investors to access global markets and helping NRIs build long-term assets at home.",
      icon: Globe
    },
    {
      name: "Corporate Advisory",
      slug: "corporate-advisory",
      tagline: "Capital & Treasury Solutions",
      desc: "Strategic capital markets advice and treasury management designed for founder-led companies, family enterprises, and growing mid-market corporates.",
      icon: GraduationCap
    }
  ];

  return (
    <div className="flex flex-col bg-brand-ivory text-brand-navy min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-brand-navy text-brand-ivory py-24 px-4 text-center border-b border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Capabilities Matrix
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light leading-tight">
            Institutional Wealth <span className="italic">Ecosystem</span>
          </h1>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          <p className="font-sans text-sm sm:text-base text-brand-silver max-w-2xl mx-auto leading-relaxed">
            Replicating the global private banking structures of Geneva and New York, customized for India&apos;s unique regulatory and family landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Explore Capabilities</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-navy font-light">
              Our Core Financial Disciplines
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.slug} 
                  className="bg-brand-ivory/30 border border-brand-gold/15 p-8 flex flex-col justify-between hover:shadow-md hover:bg-brand-ivory/50 transition-all duration-300"
                >
                  <div className="space-y-5">
                    <div className="inline-flex p-3 bg-brand-navy text-brand-gold">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-semibold text-brand-gold tracking-widest uppercase block">{service.tagline}</span>
                      <h3 className="font-serif text-xl text-brand-navy font-semibold mt-1">{service.name}</h3>
                    </div>
                    <p className="text-xs text-brand-slate leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-8 border-t border-brand-gold/10 mt-6">
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-xs font-bold tracking-wider text-brand-gold hover:text-brand-navy uppercase transition-colors group"
                    >
                      Access Capability Details <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Invitation */}
      <section className="py-24 px-4 bg-brand-ivory text-center border-t border-brand-gold/15">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="font-serif text-3xl text-brand-navy font-light">Structure Your Multi-Generational Wealth</h2>
          <div className="h-0.5 w-12 bg-brand-gold mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto leading-relaxed">
            Every capability connects to the others in our integrated service framework. Speak to our advisory desk to create a unified Wealth Blueprint for your family capital.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-brand-navy text-brand-ivory text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300 shadow-sm"
            >
              Request Advisory Briefing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
