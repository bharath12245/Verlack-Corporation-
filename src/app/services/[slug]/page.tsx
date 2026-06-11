import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Layers, ShieldCheck, Scale, Database, Settings } from "lucide-react";

// Define the static params for pre-rendering
export async function generateStaticParams() {
  const slugs = [
    "wealth-management",
    "portfolio-management",
    "investment-advisory",
    "alternative-investments",
    "family-office-services",
    "estate-succession",
    "global-investments",
    "corporate-advisory"
  ];
  return slugs.map((slug) => ({ slug }));
}

// Full custom content database for all 8 services from Content Bible
const serviceData = {
  "wealth-management": {
    name: "Wealth Management",
    tagline: "Comprehensive Capital Architecture",
    heroTitle: "Comprehensive Capital Architecture. Multi-Generational Continuity.",
    heroSub: "An integrated, goals-based asset stewardship mandate that structures your entire financial ecosystem for sustained long-term compounding.",
    narrativeTitle: "Moving Beyond Transactional Management",
    narrativeDesc: "Wealth management at Verlak is not a series of disconnected investment transactions; it is an integrated, goals-based strategic mandate. We look across your family's entire balance sheet—incorporating liquid portfolios, private business equity, real estate holdings, and legacy structures—to construct an institutional asset allocation strategy designed to withstand macroeconomic shifts and optimize post-tax compounding.",
    deliverables: [
      { title: "Comprehensive Financial Architecture", desc: "Institutional mapping and long-term risk profile modeling across all family asset pools." },
      { title: "Dynamic Asset Allocation", desc: "Custom adjustments across domestic equities, international fixed income, precious metals, and real estate alternatives." },
      { title: "Tax Optimization Integration", desc: "Embedded tax planning frameworks designed to maximize long-term capital gains efficiency." },
      { title: "Asset Rebalancing Systems", desc: "Systematic asset reallocation to mitigate risk during periods of market stress." },
      { title: "Aggregated Balance Sheet Visibility", desc: "Unified performance reporting tracking all assets under one master dashboard." }
    ],
    benefits: [
      "Decouples family capital from short-term market anxiety.",
      "Ensures unified estate, tax, and investment planning structures.",
      "Access to institutional advisory tiers starting from ₹2 Crore."
    ],
    riskTitle: "Benchmarked Performance Risk Controls",
    riskDesc: "Every wealth management portfolio is subjected to historical macroeconomic stress tests—simulating major global financial adjustments—to safeguard capital against sudden liquidity challenges.",
    faqs: [
      { q: "What is the minimum portfolio size required for Verlak Wealth Management?", a: "Our core wealth management services begin with the Verlak Select tier, designed for relationships starting at an aggregate investable capital threshold of ₹2 Crore." },
      { q: "How frequently are portfolios rebalanced under this mandate?", a: "Portfolios are reviewed continuously using our automated drift-detection systems. Formal rebalancing is initiated when any core asset allocation shifts beyond your target parameter, or in response to structural changes highlighted by the Verlak Research Centre." }
    ],
    nextLabel: "Portfolio Management (PMS)",
    nextSlug: "portfolio-management"
  },
  "portfolio-management": {
    name: "Portfolio Management (PMS)",
    tagline: "Direct Asset Ownership",
    heroTitle: "Direct Asset Ownership. Institutional Equity Rigor.",
    heroSub: "Focused, high-conviction public equity portfolios managed through transparent structures with no hidden mutual fund wrappers.",
    narrativeTitle: "High-Conviction Alpha Generation",
    narrativeDesc: "Verlak's Portfolio Management Services (PMS) provide discerning investors with institutional-grade direct equity ownership. We reject overly diversified, index-hugging strategies. Instead, we deploy concentrated capital into corporate leaders that match our strict long-term quality criteria, ensuring high-conviction opportunities are fully reflected across your portfolio.",
    deliverables: [
      { title: "The Verlak Conviction Portfolio", desc: "A concentrated selection of 15 to 25 high-conviction Indian equities positioned to benefit from structural domestic growth themes." },
      { title: "The Verlak Quality Compounder", desc: "Built on our proprietary investment framework, targeting high-quality companies with low debt profiles and clear cash-flow generation capabilities." },
      { title: "Verlak Balanced Advantage Portfolio", desc: "Dynamically shifts between public equity and high-grade fixed income instruments to optimize returns across volatile market cycles." }
    ],
    benefits: [
      "Stocks are held directly in your individual demat account, providing complete transparency and eliminating co-mingling risks.",
      "Asset sales are managed to optimize individual capital gains tax treatments.",
      "Clear performance reporting that isolates true market alpha."
    ],
    riskTitle: "Strict Independent Risk Management",
    riskDesc: "Our Investment Committee meets weekly to review asset performance metrics. Every position is subject to strict concentration caps, ensuring no single corporate entity introduces unmanaged risk to the overarching portfolio structure.",
    faqs: [
      { q: "What is the legal minimum ticket size for a SEBI-registered PMS?", a: "The statutory minimum investment set by SEBI for any Portfolio Management Service is ₹50 Lakhs." },
      { q: "What is the primary difference between discretionary and non-discretionary PMS structures?", a: "In a Discretionary PMS, the Verlak Portfolio Manager handles all execution decisions directly based on your agreed investment mandate. In a Non-Discretionary PMS, Verlak provides research-backed recommendations, but each transaction requires your explicit confirmation before execution." }
    ],
    nextLabel: "Investment Advisory",
    nextSlug: "investment-advisory"
  },
  "investment-advisory": {
    name: "Investment Advisory",
    tagline: "Fiduciary Alignment",
    heroTitle: "Zero Commissions. No Conflicts. Pure Fiduciary Alignment.",
    heroSub: "The clearest expression of financial advisory: independent, research-driven counsel where our single priority is your long-term success.",
    narrativeTitle: "The Fiduciary Standard in Practice",
    narrativeDesc: "Most wealth managers claim alignment while accepting backend commissions from product sales, creating hidden costs and conflicts of interest. Verlak Corporation operates under a fee-only advisory framework, accepting zero product incentives, volume rebates, or distribution commissions. Our clients pay an explicit advisory fee, ensuring every recommendation is driven entirely by objective data.",
    deliverables: [
      { title: "Bespoke Investment Policy Statement (IPS)", desc: "A comprehensive operational charter defining your long-term risk parameters, liquidity needs, and capital allocation limits." },
      { title: "Optimized Fund Layouts", desc: "Comprehensive evaluation of existing mutual fund portfolios to remove high-cost structures and underperforming legacy products." },
      { title: "Fixed Income Ladder Strategies", desc: "Structured debt arrangements designed to deliver predictable cash flows while managing interest rate volatility." },
      { title: "Tactical Allocation Guidance", desc: "Data-driven recommendations designed to capitalize on short-term market mispricings without altering your long-term risk profile." }
    ],
    benefits: [
      "100% independent counsel with zero bank cross-sell pressure.",
      "Explicit fee structure with zero product distribution commissions.",
      "Clear review of external legacy holdings to optimize fee structures."
    ],
    riskTitle: "Signed Fiduciary Oath",
    riskDesc: "Every advisory engagement begins with a formal, signed fiduciary pledge confirming that Verlak accepts zero commercial incentives outside our direct agreement with you.",
    faqs: [
      { q: "How are Verlak Investment Advisory fees calculated?", a: "Our advisory fees are calculated transparently as an annual percentage of Assets Under Advisory (AUA), or structured as a fixed retainer based on the complexity of your family capital needs. Fees are disclosed upfront before engagement." },
      { q: "Can Verlak help optimize my legacy portfolios held at other institutions?", a: "Yes. A core element of our onboarding process involves analyzing your existing external holdings to identify high-fee products, structural overlaps, and hidden commission costs." }
    ],
    nextLabel: "Alternative Investments",
    nextSlug: "alternative-investments"
  },
  "alternative-investments": {
    name: "Alternative Investments",
    tagline: "Institutional Deal Flow",
    heroTitle: "Institutional Deal Flow. Non-Correlated Returns.",
    heroSub: "Move beyond volatile public markets with exclusive access to curated private credit, tier-one private equity, and structured alternative assets.",
    narrativeTitle: "Unlocking the Private Markets",
    narrativeDesc: "True portfolio diversification requires looking beyond traditional public equities and fixed income products. Verlak provides our alternative investment clients with access to sophisticated private market opportunities. Leveraging our extensive network across top-tier venture funds, private equity syndicates, and corporate issuers, we identify, evaluate, and deliver alternative investments that offer low correlation to public markets.",
    deliverables: [
      { title: "Alternative Investment Funds (AIF Categories I, II, III)", desc: "Rigorous, independent analysis and access to top-performing venture capital, private equity, and long-short macro hedge funds." },
      { title: "Private Credit Syndications", desc: "High-yield senior secured lending opportunities with institutional-grade risk management and structured security interest." },
      { title: "Pre-IPO & Late-Stage Private Securities", desc: "Access to established, venture-backed companies prior to public listing liquidity events." },
      { title: "Real Estate Alternatives (REITs & InvITs)", desc: "Institutional property yields and infrastructure cash flows structured for predictable income generation." }
    ],
    benefits: [
      "Access to private credit and PE offerings normally reserved for sovereign wealth funds.",
      "Unlocking returns with low correlation to volatile public indices.",
      "Direct diligence verification conducted by our internal quantitative teams."
    ],
    riskTitle: "Independent Operational Protection",
    riskDesc: "Verlak remains entirely independent of the asset originators we review. We accept zero distribution fees, ensuring our alternative investment selections are guided solely by objective quality assessments.",
    faqs: [
      { q: "What is the typical minimum investment requirement for Alternative Investment Funds (AIFs) in India?", a: "By SEBI regulation, the minimum investment threshold for individual participation in a Category I, II, or III Alternative Investment Fund is ₹1 Crore." },
      { q: "How does Verlak manage liquidity risk in private equity investments?", a: "Private assets are inherently illiquid and require extended investment horizons. We manage this risk by incorporating alternative allocations into your master wealth plan, ensuring your immediate and mid-term cash flow needs are fully covered by liquid holdings." }
    ],
    nextLabel: "Family Office Services",
    nextSlug: "family-office-services"
  },
  "family-office-services": {
    name: "Family Office Services",
    tagline: "Securing Family Legacies",
    heroTitle: "Securing Legacies. Harmonizing Dynasty Capital.",
    heroSub: "A dedicated, comprehensive Chief Investment Officer infrastructure designed to protect and grow the multi-generational capital of India's premier families.",
    narrativeTitle: "Institutional Infrastructure for Family Legacies",
    narrativeDesc: "As family wealth grows, managing a complex web of holding companies, trusts, private investments, and multi-generational needs requires an institutional approach. Verlak Family Office Services provides ultra-high-net-worth families with a dedicated, outsourced Chief Investment Officer structure. We manage and integrate your family's entire financial ecosystem, aligning investment management, estate planning, and family governance into a single cohesive framework.",
    deliverables: [
      { title: "Consolidated Balance Sheet Oversight", desc: "Centralized data tracking across all family assets, legal entities, and private business holdings." },
      { title: "Bespoke Family Governance & Constitutions", desc: "Designing clear communication and decision-making frameworks to ensure smooth wealth transitions across generations." },
      { title: "Co-Investment Access Programs", desc: "Creating opportunities for families to co-invest alongside major global institutions in unique private transactions." },
      { title: "Philanthropic Allocation Frameworks", desc: "Structuring impact-driven capital and corporate social responsibility initiatives to establish an enduring family legacy." },
      { title: "Next-Generation Integration & Training", desc: "Comprehensive financial education programs designed to prepare heirs for future wealth stewardship responsibilities." }
    ],
    benefits: [
      "Access to a comprehensive CIO office framework starting at ₹50 Crore relationship size.",
      "Generational alignment with structured decision governance.",
      "Consolidated performance metrics and asset protection structures."
    ],
    riskTitle: "Confirmed Operational Security",
    riskDesc: "Our family office data systems utilize advanced encryption standards to ensure family financial records remain entirely private and secure.",
    faqs: [
      { q: "What portfolio scale benefits most from Verlak Family Office Services?", a: "While traditional single-family office structures require massive capital to operate independently, Verlak delivers comprehensive family office capabilities starting at an accessible relationship threshold of ₹50 Crore." },
      { q: "How does Verlak help resolve generational differences regarding investment strategies?", a: "We design formal family constitutions that establish objective guidelines for capital allocation and decision-making, helping align diverse viewpoints across generations around shared legacy goals." }
    ],
    nextLabel: "Estate & Succession",
    nextSlug: "estate-succession"
  },
  "estate-succession": {
    name: "Estate & Succession",
    tagline: "Protecting Lineage Assets",
    heroTitle: "Protect Your Lineage. Eliminate Generational Friction.",
    heroSub: "Structuring private family trusts and robust succession frameworks to ensure your assets transfer smoothly to future generations without unnecessary regulatory or legal friction.",
    narrativeTitle: "The Architecture of Asset Preservation",
    narrativeDesc: "Without careful structural planning, wealth transitions between generations can introduce unexpected tax liabilities, legal disputes, and regulatory challenges. Verlak’s Estate & Succession Planning services treat asset preservation with the institutional care it requires. Working alongside trusted legal partners, we design private family trusts, corporate holding structures, and clear succession plans that safeguard your family's capital and ensure your legacy is preserved exactly as intended.",
    deliverables: [
      { title: "Private Family Trust Structuring", desc: "Designing custom trust vehicles to protect assets, optimize long-term distribution, and manage potential tax liabilities." },
      { title: "Corporate Succession Frameworks", desc: "Structuring voting trusts, shareholder agreements, and management transitions for family businesses." },
      { title: "Cross-Border Inheritance Mapping", desc: "Aligning estate distributions for globally distributed families to comply with differing international regulations." },
      { title: "Asset Nomination Strategy Assessments", desc: "Comprehensive reviews of property titles, corporate listings, and account nominations to eliminate potential transfer friction." }
    ],
    benefits: [
      "Protection of personal assets from operational corporate liabilities.",
      "Uninterrupted wealth transition without prolonged probate delays.",
      "Clear coordination with top corporate legal and tax firms."
    ],
    riskTitle: "Rigorous Structural Soundness",
    riskDesc: "Our estate planning strategies are regularly reviewed by leading corporate legal specialists to ensure full compliance with Indian trust laws and current tax regulations.",
    faqs: [
      { q: "Why should a family establish a Private Family Trust instead of relying on a standard Will?", a: "A Will only takes effect after probate, a process that can be time-consuming and open to public record challenges. A Private Family Trust allows for immediate, private asset transitions and continuous management during your lifetime, offering significantly better protection against legal and operational friction." },
      { q: "How does Verlak assist with estate planning for non-resident family members (NRIs)?", a: "We collaborate with cross-border tax specialists to structure multi-jurisdiction trusts, ensuring your asset transfers comply with FEMA regulations and minimize foreign inheritance tax exposure." }
    ],
    nextLabel: "Global Investments",
    nextSlug: "global-investments"
  },
  "global-investments": {
    name: "Global Investments",
    tagline: "Cross-Border Wealth Desk",
    heroTitle: "Erase Borders. Capitalize on Global Growth Vectors.",
    heroSub: "Sophisticated cross-border asset management allowing Indian investors to access global markets and helping international Indians build long-term assets at home.",
    narrativeTitle: "Diversifying Capital Across Global Markets",
    narrativeDesc: "True financial resilience requires geographic diversification. Limiting an asset base to a single economy introduces concentration risks linked to local regulatory shifts and currency fluctuations. Verlak’s Global Investments & NRI Services division provides a seamless path to international markets, allowing clients to build balanced, multi-currency portfolios that capture global growth opportunities while managing cross-border compliance effectively.",
    deliverables: [
      { title: "Optimized International Portfolios", desc: "Utilizing the Liberalised Remittance Scheme (LRS) to invest across international equities, global index funds, and thematic ETFs." },
      { title: "Cross-Border Investment Evaluation", desc: "Comprehensive analysis of global venture debt, private equity, and international fund structures." },
      { title: "Specialized NRI Financial Advisory", desc: "Helping non-resident Indians navigate FEMA compliance, optimize NRE/NRO accounts, and manage double-taxation treaties (DTAA)." },
      { title: "Currency Risk Mitigation", desc: "Developing structural hedging strategies to shield globally diversified portfolios from major exchange rate volatility." }
    ],
    benefits: [
      "Direct compliance framework mapped to FATCA and RBI regulations.",
      "Seamless USD remittance structuring for international equities.",
      "Repatriation audit optimization for NRI capital inflows."
    ],
    riskTitle: "Cross-Border Regulatory Assurance",
    riskDesc: "Our international investment strategies are structured in strict alignment with FATCA, FBAR, and RBI guidelines to ensure full compliance across jurisdictions.",
    faqs: [
      { q: "What is the annual investment limit for international assets under the LRS?", a: "Under current RBI guidelines, the Liberalised Remittance Scheme (LRS) allows resident individuals to remit up to $250,000 USD per financial year for permitted capital and current account transactions." },
      { q: "How does Verlak assist NRIs with Double Taxation Avoidance Agreements (DTAA)?", a: "We structure your Indian investments to leverage relevant DTAA provisions between India and your country of residence, helping prevent duplicate taxation on investment income and capital gains." }
    ],
    nextLabel: "Corporate Advisory",
    nextSlug: "corporate-advisory"
  },
  "corporate-advisory": {
    name: "Corporate Advisory",
    tagline: "Capital & Treasury Solutions",
    heroTitle: "Optimize Corporate Treasury. Navigate Liquidity Events.",
    heroSub: "Strategic capital markets advice and treasury management designed for founder-led companies, family enterprises, and growing mid-market corporations.",
    narrativeTitle: "Aligning Corporate Strength with Family Legacy",
    narrativeDesc: "For entrepreneurs and business owners, personal wealth is often deeply intertwined with corporate balance sheets. Verlak Corporate Advisory bridges this gap, providing financial guidance to maximize corporate liquidity, optimize treasury returns, and manage complex corporate transactions smoothly. We help business leaders manage corporate capital efficiently, execute capital raising initiatives, and prepare for significant liquidity events.",
    deliverables: [
      { title: "Institutional Corporate Treasury Advisory", desc: "Developing capital management frameworks that maximize yields on corporate reserves while ensuring liquidity and safety." },
      { title: "Strategic M&A and Capital Advisory", desc: "Providing buy-side and sell-side transaction guidance, valuation reviews, and rigorous financial due diligence." },
      { title: "Bespoke ESOP and Equity Structuring", desc: "Designing equity incentive programs and liquidity plans that retain key talent and optimize founder equity." },
      { title: "Pre-IPO Capital Preparation", desc: "Helping companies align their financial reporting, capital structures, and investor communications for public market listings." }
    ],
    benefits: [
      "Aligns corporate balance sheet liquidity with family office goals.",
      "Optimizes founder tax treatment during liquidity events.",
      "Prepares mid-market enterprises for public capital listings."
    ],
    riskTitle: "Uncompromised Confidentiality Assurance",
    riskDesc: "All corporate transactions and advisory mandates are managed within a highly secure operational framework to guarantee absolute privacy for your corporate data.",
    faqs: [
      { q: "What types of companies benefit most from Verlak Corporate Advisory?", a: "We focus on serving mid-market corporations, family businesses, and high-growth, founder-led enterprises seeking institutional-grade corporate finance advice." },
      { q: "How does Verlak coordinate corporate advisory with personal family office needs?", a: "We ensure corporate strategy is fully aligned with personal family office goals, managing liquidity events to smooth the transition of corporate wealth into long-term family assets." }
    ],
    nextLabel: "Wealth Management",
    nextSlug: "wealth-management"
  }
};

const navigationList = [
  { name: "Wealth Management", slug: "wealth-management" },
  { name: "Portfolio Management (PMS)", slug: "portfolio-management" },
  { name: "Investment Advisory", slug: "investment-advisory" },
  { name: "Alternative Investments", slug: "alternative-investments" },
  { name: "Family Office Services", slug: "family-office-services" },
  { name: "Estate & Succession", slug: "estate-succession" },
  { name: "Global Investments", slug: "global-investments" },
  { name: "Corporate Advisory", slug: "corporate-advisory" }
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = serviceData[slug as keyof typeof serviceData];
  if (!data) return {};
  return {
    title: `${data.name} | Verlak Corporation`,
    description: data.heroSub,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = serviceData[slug as keyof typeof serviceData];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col bg-brand-ivory text-brand-navy min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="bg-brand-navy text-brand-ivory py-24 px-4 border-b border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-5xl space-y-6">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            {data.tagline}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light leading-tight max-w-4xl">
            {data.heroTitle}
          </h1>
          <div className="h-0.5 w-16 bg-brand-gold"></div>
          <p className="text-sm sm:text-base text-brand-silver max-w-3xl leading-relaxed">
            {data.heroSub}
          </p>
        </div>
      </section>

      {/* 2. Side-nav & Core Content Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Navigation - Sticky Left */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-8 order-2 lg:order-1">
              <div className="border border-brand-gold/20 p-6 bg-brand-ivory/20 shadow-sm">
                <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block mb-4">
                  Advisory Capabilities
                </span>
                <nav className="space-y-1">
                  {navigationList.map((nav) => (
                    <Link
                      key={nav.slug}
                      href={`/services/${nav.slug}`}
                      className={`flex items-center justify-between px-4 py-3 text-xs tracking-wider uppercase font-semibold border-l-2 transition-colors ${
                        slug === nav.slug
                          ? "border-brand-gold bg-brand-navy text-brand-ivory font-bold"
                          : "border-transparent text-brand-slate hover:bg-brand-ivory/50 hover:text-brand-navy"
                      }`}
                    >
                      <span>{nav.name}</span>
                      <ChevronRight className="h-3 w-3 text-brand-gold" />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Column - Right */}
            <div className="lg:col-span-8 space-y-16 order-1 lg:order-2">
              
              {/* Narrative block */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl sm:text-3xl text-brand-navy font-light leading-tight">
                  {data.narrativeTitle}
                </h2>
                <div className="h-0.5 w-12 bg-brand-gold"></div>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                  {data.narrativeDesc}
                </p>
              </div>

              {/* Deliverables Matrix */}
              <div className="space-y-6">
                <h3 className="font-serif text-xl text-brand-navy font-semibold">
                  Core Service Deliverables
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {data.deliverables.map((deliv, idx) => (
                    <div key={idx} className="border border-brand-gold/15 p-6 bg-brand-ivory/10 shadow-sm hover:border-brand-gold/30 transition-all">
                      <h4 className="font-serif text-base text-brand-navy font-semibold mb-1.5 flex items-center">
                        <CheckCircle2 className="h-4.5 w-4.5 text-brand-gold mr-2 flex-shrink-0" />
                        {deliv.title}
                      </h4>
                      <p className="text-xs text-brand-slate leading-relaxed pl-6">
                        {deliv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="border border-brand-gold/20 p-8 bg-brand-ivory/30 shadow-sm space-y-4">
                <h4 className="font-serif text-lg text-brand-navy font-semibold">Strategic Advantages</h4>
                <ul className="space-y-3">
                  {data.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-brand-slate leading-relaxed flex items-start">
                      <span className="h-1.5 w-1.5 bg-brand-gold rounded-full mr-2.5 mt-2 flex-shrink-0"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risk Controls / Fiduciary standards */}
              <div className="border-l-4 border-brand-navy pl-6 py-2 bg-brand-ivory/10 space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase block">
                  {data.riskTitle}
                </span>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                  {data.riskDesc}
                </p>
              </div>

              {/* FAQs */}
              <div className="space-y-6 border-t border-brand-gold/10 pt-12">
                <h3 className="font-serif text-xl text-brand-navy font-semibold">
                  Service Specific Queries
                </h3>
                <div className="space-y-6">
                  {data.faqs.map((faq, idx) => (
                    <div key={idx} className="space-y-2.5 pb-6 border-b border-brand-gold/10 last:border-0">
                      <h4 className="font-serif text-base text-brand-navy font-semibold flex items-start">
                        <HelpCircle className="h-4.5 w-4.5 text-brand-gold mr-2.5 mt-0.5 flex-shrink-0" />
                        {faq.q}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-slate leading-relaxed pl-7">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Cap Link */}
              <div className="flex justify-end pt-6">
                <Link 
                  href={`/services/${data.nextSlug}`}
                  className="inline-flex items-center text-xs font-bold tracking-widest text-brand-gold hover:text-brand-navy uppercase transition-colors"
                >
                  Next Capability: {data.nextLabel} <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Form CTA Section */}
      <section className="bg-brand-navy text-brand-ivory py-24 px-4 text-center border-t border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Fiduciary Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light">
            Request a Private Valuation Review
          </h2>
          <div className="h-0.5 w-12 bg-brand-gold mx-auto"></div>
          <p className="text-xs sm:text-sm text-brand-silver max-w-xl mx-auto leading-relaxed">
            Let our senior partners conduct an independent audit of your current portfolio asset weights and commission structures.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-brand-gold text-brand-navy text-xs font-bold tracking-widest uppercase hover:bg-brand-ivory hover:text-brand-navy transition-colors duration-300 shadow-sm"
            >
              Initiate Onboarding Discussion
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
