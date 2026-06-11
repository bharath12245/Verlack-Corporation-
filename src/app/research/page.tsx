"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, Calendar, Mail, FileText, ChevronRight, Check } from "lucide-react";

export default function ResearchCentrePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [downloadEmail, setDownloadEmail] = useState<string>("");
  const [gatedFile, setGatedFile] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [activeMonthIdx, setActiveMonthIdx] = useState<number>(0);

  const categories = [
    { id: "all", name: "All Research" },
    { id: "market-outlook", name: "Market Outlook" },
    { id: "research-reports", name: "Research Reports" },
    { id: "articles", name: "Articles" },
    { id: "cio-letters", name: "CIO Letters" },
    { id: "sector-deep-dives", name: "Sector Deep Dives" }
  ];

  const publications = [
    {
      title: "Verlak India Wealth Report 2026",
      desc: "Capital Re-allocation Vectors Across High-Growth Sectors. Our flagship annual assessment of macro, public equity valuations, and private credit.",
      category: "research-reports",
      date: "Jan 2026",
      readTime: "24 Pages"
    },
    {
      title: "Navigating Long-Term Capital Gains (LTCG) Optimization Post-Budget",
      desc: "A structured tax analysis clarifying immediate portfolio adjustments needed to minimize tax drags on legacy holdings.",
      category: "market-outlook",
      date: "Feb 2026",
      readTime: "8 Pages"
    },
    {
      title: "The Illusion of Diversification: Reviewing Over-Hedging Risks",
      desc: "Our Chief Investment Officer explores why traditional mutual fund allocations lead to high duplication and muted returns.",
      category: "cio-letters",
      date: "Mar 2026",
      readTime: "6 Pages"
    },
    {
      title: "Indian Financial Services (BFSI) Sector Deep Dive",
      desc: "Fundamental equity review tracking net interest margins, credit growth, and asset quality indicators for top-tier private lenders.",
      category: "sector-deep-dives",
      date: "Apr 2026",
      readTime: "16 Pages"
    },
    {
      title: "Alternatives Outlook: Accessing Private Credit & PE",
      desc: "diligence frameworks and yield trends in domestic unlisted credit markets and high-yield structured notes.",
      category: "research-reports",
      date: "May 2026",
      readTime: "18 Pages"
    },
    {
      title: "Monsoon Progress & Rural Consumptive Drivers",
      desc: "Sector weight mapping tracing agricultural yields and secondary consumption variables for FMCG and automobile equities.",
      category: "articles",
      date: "Jun 2026",
      readTime: "12 Pages"
    }
  ];

  const calendarMonths = [
    { m: "January", theme: "Union Budget Preview", desc: "Identifying long-term HNI asset allocation and tax implications before the national budget release." },
    { m: "February", theme: "Post-Budget Strategic Allocation", desc: "Adjusting sector weights and asset allocations to align with final budget policies." },
    { m: "March", theme: "Strategic Capital Gains Optimization", desc: "Year-end tax planning frameworks designed to maximize long-term capital gains (LTCG) efficiency." },
    { m: "April", theme: "Earnings Season Analysis", desc: "In-depth review of corporate performance figures to refine our high-conviction PMS equity parameters." },
    { m: "May", theme: "Monsoon Progress & Rural Economic Indicators", desc: "Macro sector mapping linking monsoon trajectories with rural consumption demand indices." },
    { m: "June", theme: "Mid-Year Portfolio Reviews", desc: "Comprehensive asset rebalancing strategy adjusting allocations for the second half of the year." },
    { m: "July", theme: "Global Macro Indicators", desc: "Central bank monetary policy analysis (RBI & US Fed) and its impact on emerging market equity premiums." },
    { m: "August", theme: "Long-Term Structural Themes", desc: "Tracking India's decadal growth drivers: manufacturing, infrastructure, and digital ecosystems." },
    { m: "September", theme: "Consumption Trends & Festive Season Shifts", desc: "Tactical public equity reallocation capitalizing on festive spending trends." },
    { m: "October", theme: "Performance Overviews", desc: "Independent reviews and risk-adjusted metrics for PMS, AIF, and private investment channels." },
    { m: "November", theme: "Global Asset Realignment", desc: "Reevaluating developed market vs. emerging market allocations for LRS-active portfolios." },
    { m: "December", theme: "Annual Market Review and 12-Month Outlook", desc: "Consolidating empirical data to outline asset parameters for the year ahead." }
  ];

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (downloadEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setGatedFile(null);
        setSubscribed(false);
        setDownloadEmail("");
        alert("Institutional document download link has been sent to: " + downloadEmail);
      }, 1500);
    }
  };

  const filteredPublications = selectedCategory === "all"
    ? publications
    : publications.filter(pub => pub.category === selectedCategory);

  return (
    <div className="flex flex-col bg-brand-ivory text-brand-navy min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="bg-brand-navy text-brand-ivory py-24 px-4 text-center border-b border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Thought Leadership
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light leading-tight">
            Empirical Evidence. <span className="italic">No Market Hype.</span>
          </h1>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          <p className="font-sans text-sm sm:text-base text-brand-silver max-w-2xl mx-auto leading-relaxed">
            Access independent financial analysis, macroeconomic research, and market insights directly from the Verlak Research Centre.
          </p>
        </div>
      </section>

      {/* 2. Flagship Guides / Gated Downloads */}
      <section className="py-24 px-4 bg-white border-b border-brand-gold/15">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Flagship Series</span>
            <h2 className="font-serif text-3xl text-brand-navy font-light">Annual Strategic Publications</h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Guide 1 */}
            <div className="border border-brand-gold/20 p-8 bg-brand-ivory/25 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <FileText className="h-10 w-10 text-brand-gold" />
                <h3 className="font-serif text-xl text-brand-navy font-semibold">Verlak India Wealth Report</h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  India&apos;s definitive annual wealth outlook covering macro valuations, equity constraints, structured debt, and alternative co-investments. Reserved for clients and premium subscribers.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setGatedFile("Verlak India Wealth Report")}
                  className="w-full sm:w-auto px-6 py-2.5 bg-brand-navy text-brand-ivory text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300 shadow-sm"
                >
                  Download Publication
                </button>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="border border-brand-gold/20 p-8 bg-brand-ivory/25 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <FileText className="h-10 w-10 text-brand-gold" />
                <h3 className="font-serif text-xl text-brand-navy font-semibold">The Family Wealth Compass</h3>
                <p className="text-xs text-brand-slate leading-relaxed">
                  An institutional guide detailing trust formations, family business succession agreements, and legacy transfer structures under current Indian tax law.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => setGatedFile("The Family Wealth Compass")}
                  className="w-full sm:w-auto px-6 py-2.5 bg-brand-navy text-brand-ivory text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300 shadow-sm"
                >
                  Download Publication
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Publications & Category Filtering */}
      <section className="py-24 px-4 bg-brand-ivory/30 border-b border-brand-gold/15">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6 border-b border-brand-gold/10 pb-6">
            <div className="space-y-3">
              <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block">Research stream</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-navy font-light">Advisory Research Archive</h2>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-[10px] tracking-wider uppercase font-semibold border transition-all ${
                    selectedCategory === cat.id
                      ? "bg-brand-navy border-brand-navy text-brand-ivory font-bold"
                      : "border-brand-gold/25 text-brand-slate hover:bg-brand-ivory hover:text-brand-navy"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Publications List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((pub, idx) => (
              <div key={idx} className="bg-white border border-brand-gold/15 p-8 flex flex-col justify-between shadow-sm hover:border-brand-gold/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] text-brand-slate font-medium">
                    <span>{pub.date}</span>
                    <span>{pub.readTime}</span>
                  </div>
                  <h3 className="font-serif text-base text-brand-navy font-semibold line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-brand-slate leading-relaxed line-clamp-4">
                    {pub.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-brand-gold/10 mt-6 flex justify-between items-center">
                  <span className="text-[9px] font-bold text-brand-gold tracking-wider uppercase">
                    {categories.find(c => c.id === pub.category)?.name}
                  </span>
                  <button 
                    onClick={() => setGatedFile(pub.title)}
                    className="inline-flex items-center text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors"
                  >
                    Access Report <ChevronRight className="ml-0.5 h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive 12-Month Research Calendar */}
      <section className="py-24 px-4 bg-white border-b border-brand-gold/15">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Research Agenda</span>
            <h2 className="font-serif text-3xl text-brand-navy font-light">Rolling 12-Month Calendar</h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
            <p className="text-xs text-brand-slate max-w-lg mx-auto">
              Our research team plans publication coverage to map systematically against macroeconomic adjustment periods and corporate reporting schedules. Click any month below to inspect details.
            </p>
          </div>

          {/* Interactive Month List */}
          <div className="space-y-3">
            {calendarMonths.map((item, idx) => (
              <div 
                key={item.m} 
                className="border border-brand-gold/20 shadow-sm"
              >
                <button
                  onClick={() => setActiveMonthIdx(activeMonthIdx === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 bg-brand-ivory/20 hover:bg-brand-ivory/50 transition-colors text-left"
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-sans text-[10px] font-bold tracking-wider text-brand-gold uppercase w-20">{item.m}</span>
                    <span className="font-serif text-sm sm:text-base text-brand-navy font-semibold">{item.theme}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 text-brand-gold transition-transform duration-300 ${
                    activeMonthIdx === idx ? "rotate-90" : ""
                  }`} />
                </button>
                
                {activeMonthIdx === idx && (
                  <div className="p-6 bg-white border-t border-brand-gold/10 text-xs sm:text-sm text-brand-slate leading-relaxed">
                    <p className="font-medium text-brand-navy mb-2">Scope of Research:</p>
                    <p>{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gated Modal Overlay */}
      {gatedFile && (
        <div className="fixed inset-0 bg-brand-navy/60 z-50 flex items-center justify-center p-4">
          <div className="bg-brand-ivory border border-brand-gold/30 p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => {
                setGatedFile(null);
                setSubscribed(false);
              }}
              className="absolute top-4 right-4 text-brand-navy hover:text-brand-gold font-bold text-xs"
            >
              [ Close ]
            </button>

            {subscribed ? (
              <div className="text-center space-y-4 py-6">
                <div className="h-12 w-12 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center mx-auto">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Link Dispatched</h3>
                <p className="text-xs text-brand-slate">
                  A secure access token to download <strong>{gatedFile}</strong> is on its way to your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDownloadSubmit} className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block">Gated Request</span>
                  <h3 className="font-serif text-xl text-brand-navy font-semibold leading-snug">
                    Access Research Document
                  </h3>
                  <p className="text-xs text-brand-slate">
                    Please provide your corporate details to authorize access for:
                    <br />
                    <strong className="text-brand-navy">{gatedFile}</strong>
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-[9px] font-bold tracking-wider text-brand-navy uppercase">Corporate Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="email@institution.com"
                    value={downloadEmail}
                    onChange={(e) => setDownloadEmail(e.target.value)}
                    className="px-4 py-2.5 bg-white border border-brand-gold/20 text-xs text-brand-navy focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-navy text-brand-ivory text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300"
                >
                  Verify &amp; Request Access Token
                </button>
                
                <p className="text-[10px] text-center text-brand-slate leading-relaxed">
                  By submitting, you agree to our data compliance protocol under the DPDP Act 2023.
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 6. Closing Subscription Block */}
      <section className="bg-brand-navy text-brand-ivory py-24 px-4 text-center border-t border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Intelligence Network
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light">
            Subscribe to the Verlak Research Stream
          </h2>
          <div className="h-0.5 w-12 bg-brand-gold mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-silver max-w-xl mx-auto leading-relaxed">
            Join our select list of wealth owners, corporate CFOs, and legal partners receiving quarterly reports and weekly macro commentaries directly from our CIO.
          </p>
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-brand-gold text-brand-navy text-xs font-bold tracking-widest uppercase hover:bg-brand-ivory hover:text-brand-navy transition-colors duration-300 shadow-sm"
            >
              Request Research Access
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
