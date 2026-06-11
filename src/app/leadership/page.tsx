import React from "react";
import Link from "next/link";
import { UserCheck, Award, GraduationCap, Scale, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function LeadershipPage() {
  const executives = [
    {
      role: "Chief Executive Officer (CEO)",
      name: "Strategic Partner",
      experience: "20+ Years in Private Banking & Wealth Management",
      credentials: "MBA Finance, Former Managing Director at Global Tier-1 Private Bank",
      desc: "Directs Verlak's long-term corporate vision and regulatory compliance. Holds principal-level relationships with institutional clients and ensures absolute alignment with our fiduciary-first charter."
    },
    {
      role: "Chief Investment Officer (CIO)",
      name: "Investment Partner",
      experience: "18+ Years in Macro Asset Allocation & Public Equities",
      credentials: "CFA Charterholder, PhD in Financial Economics",
      desc: "Chairs the Verlak Investment Committee. Authors the Monthly CIO Letter and manages the asset allocation frameworks and risk calibration models for our core discretionary PMS mandates."
    },
    {
      role: "Head of Wealth Management",
      name: "Client Partner",
      experience: "15+ Years in HNI Portfolio Advisory",
      credentials: "CFA Level III, MBA Finance from Premier Business School",
      desc: "Directs client relationship teams for Verlak Select and Premier tiers. Focuses on integrating clients' long-term life objectives into customized investment policy statements."
    },
    {
      role: "Head of Research",
      name: "Research Director",
      experience: "12+ Years in Equity Research & Quantitative Analysis",
      credentials: "CFA Charterholder, B.Tech from Indian Institute of Technology (IIT)",
      desc: "Directs the Verlak Research Centre. Manages the fundamental sector analysis and quantitative research programs that feed directly into our Investment Committee's weekly mandates."
    },
    {
      role: "Head of Family Office & UHNI Services",
      name: "Family Advisory Partner",
      experience: "16+ Years in Trust, Succession & Multi-Jurisdictional Law",
      credentials: "CA (Chartered Accountant), LLB (Law Graduate)",
      desc: "Manages estate planning, family constitution drafting, and private market co-investment deals for Verlak Private and Legacy tier relationships exceeding ₹50 Crore."
    },
    {
      role: "Chief Compliance Officer (CCO)",
      name: "Compliance Officer",
      experience: "10+ Years in Securities Law & SEBI Auditing",
      credentials: "CS (Company Secretary), LLB (Securities Law Specialist)",
      desc: "Oversees Verlak's regulatory compliance frameworks. Ensures complete alignment of operations, client reports, and marketing with SEBI RIA/PMS rules and the DPDP Act 2023."
    }
  ];

  const matrix = [
    {
      division: "Investment Committee",
      size: "4 → 6 members",
      profile: "CFAs, PhD Economists, 15+ years senior portfolio management experience"
    },
    {
      division: "Research Analysts",
      size: "3 → 8 analysts",
      profile: "CFA Level III, Premier IIT/IIM graduates, dedicated sector specialists"
    },
    {
      division: "Relationship Managers",
      size: "5 → 15 RMs",
      profile: "MBA Finance, minimum ₹50 Cr AUM track record, SEBI certified"
    },
    {
      division: "Family Office Advisors",
      size: "2 → 6 specialists",
      profile: "Private banking backgrounds, Legal (LLB) / CA qualified, estate depth"
    },
    {
      division: "Digital & Technology",
      size: "3 → 10 engineers",
      profile: "Full-stack software engineers, fintech backgrounds, data science capabilities"
    },
    {
      division: "Operations & Compliance",
      size: "2 → 6 officers",
      profile: "CA/LLB credentials, securities law background, SEBI compliance audits"
    }
  ];

  const faqs = [
    {
      q: "Do senior partners remain directly involved in day-to-day client accounts?",
      a: "Yes. We limit our client-to-advisor ratios significantly compared to traditional retail banks. This allows our senior leaders and investment partners to stay directly involved in structuring, auditing, and reviewing your family wealth plans rather than delegating relationships to junior salespeople."
    },
    {
      q: "How does Verlak's investment committee manage portfolio decision-making?",
      a: "Our Investment Committee meets weekly to review macroeconomic indicators and sector deep-dives from the Verlak Research Centre. All rebalancing and position adjustments are driven by institutional research consensus and empirical data, rather than individual speculative calls."
    }
  ];

  return (
    <div className="flex flex-col bg-brand-ivory text-brand-navy min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="bg-brand-navy text-brand-ivory py-24 px-4 text-center border-b border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Our Professionals
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light leading-tight">
            Driven by Expertise. <span className="italic">Focused on Integrity.</span>
          </h1>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          <p className="font-sans text-sm sm:text-base text-brand-silver max-w-2xl mx-auto leading-relaxed">
            Meet the multidisciplinary team of seasoned financial leaders, research strategists, and compliance experts shaping independent wealth management in India.
          </p>
        </div>
      </section>

      {/* 2. Team Philosophy */}
      <section className="py-24 px-4 bg-white border-b border-brand-gold/15">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 space-y-4">
              <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block">Our Philosophy</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-navy font-light leading-tight">
                Outgrowing the Sales Model
              </h2>
              <div className="h-0.5 w-12 bg-brand-gold"></div>
            </div>
            <div className="md:col-span-8 text-xs sm:text-sm text-brand-slate leading-relaxed space-y-4">
              <p>
                We believe that exceptional wealth management requires deep, specialized financial expertise rather than relationship management based on product cross-selling. We have replaced the traditional sales-broker model with a multidisciplinary panel of seasoned investment professionals.
              </p>
              <p>
                Verlak&apos;s senior leadership team brings together specialists from private banking, corporate finance, equity research, and legal planning. This ensures that every advice we give is backed by professional credentials and rigorous standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Executive Profiles Grid */}
      <section className="py-24 px-4 bg-brand-ivory border-b border-brand-gold/15">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Senior Management</span>
            <h2 className="font-serif text-3xl text-brand-navy font-light">Specialized Leadership Panel</h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((exec) => (
              <div key={exec.role} className="bg-white border border-brand-gold/15 p-8 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <div className="border-b border-brand-gold/10 pb-4">
                    <span className="text-[9px] font-bold tracking-wider text-brand-gold uppercase block">{exec.role}</span>
                    <h3 className="font-serif text-lg text-brand-navy font-semibold mt-1">{exec.name}</h3>
                    <p className="text-[10px] text-brand-slate font-medium mt-0.5">{exec.experience}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs text-brand-slate leading-relaxed">
                      {exec.desc}
                    </p>
                    <div className="pt-2 border-t border-brand-gold/5">
                      <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block">Credentials</span>
                      <p className="text-[10px] text-brand-navy leading-normal font-medium mt-0.5">{exec.credentials}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Professional Team Breakdown & Criteria Matrix */}
      <section className="py-24 px-4 bg-white border-b border-brand-gold/15">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Hiring Standards</span>
            <h2 className="font-serif text-3xl text-brand-navy font-light">Organizational Competence Matrix</h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
            <p className="text-xs text-brand-slate max-w-lg mx-auto">
              Our commitment to research and fiduciary standards means we maintain the most selective recruitment criteria in the Indian wealth sector.
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto border border-brand-gold/20 shadow-sm bg-brand-ivory/30">
            <table className="min-w-full divide-y divide-brand-gold/10 font-sans text-xs sm:text-sm">
              <thead className="bg-brand-navy text-brand-ivory text-left text-[10px] tracking-wider uppercase font-bold">
                <tr>
                  <th scope="col" className="px-6 py-4">Functional Division</th>
                  <th scope="col" className="px-6 py-4">Scale (Year 1 &rarr; 3)</th>
                  <th scope="col" className="px-6 py-4">Hiring Profile &amp; Credentials</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gold/10 bg-white">
                {matrix.map((row) => (
                  <tr key={row.division} className="hover:bg-brand-ivory/20 transition-colors">
                    <td className="px-6 py-4 font-semibold text-brand-navy">{row.division}</td>
                    <td className="px-6 py-4 text-brand-slate">{row.size}</td>
                    <td className="px-6 py-4 text-brand-slate leading-relaxed">{row.profile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Trust Section (SEBI requirements compliance badge) */}
      <section className="py-20 px-4 bg-brand-navy text-brand-ivory border-y border-brand-gold/20">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">SEBI Certification Compliance</span>
          <h3 className="font-serif text-xl sm:text-2xl font-light">Certified Professionals. Uncompromising Standards.</h3>
          <div className="h-px w-20 bg-brand-gold/40 mx-auto"></div>
          <p className="text-xs text-brand-silver max-w-xl mx-auto leading-relaxed">
            Every wealth management advisor and research analyst at Verlak Corporation holds mandatory certifications from the National Institute of Securities Markets (NISM) and is fully compliant with SEBI (Investment Advisers) Regulations.
          </p>
        </div>
      </section>

      {/* 6. Strategic FAQs */}
      <section className="py-24 px-4 bg-white border-b border-brand-gold/15">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Structural Queries</span>
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
          <h2 className="font-serif text-3xl text-brand-navy font-light">Engage Directly with Our Partners.</h2>
          <div className="h-0.5 w-12 bg-brand-gold mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-slate max-w-xl mx-auto leading-relaxed">
            Experience the difference of research-backed investment advice. Schedule a direct partner-level introduction call.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-brand-gold text-brand-navy text-xs font-bold tracking-widest uppercase hover:bg-brand-navy hover:text-brand-ivory transition-colors duration-300 shadow-sm"
            >
              Schedule Partner Introduction
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
