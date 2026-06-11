import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Wealth Management", href: "/services/wealth-management" },
    { name: "Portfolio Management (PMS)", href: "/services/portfolio-management" },
    { name: "Investment Advisory", href: "/services/investment-advisory" },
    { name: "Alternative Investments", href: "/services/alternative-investments" },
    { name: "Family Office Services", href: "/services/family-office-services" },
    { name: "Estate & Succession", href: "/services/estate-succession" },
    { name: "Global Investments", href: "/services/global-investments" },
    { name: "Corporate Advisory", href: "/services/corporate-advisory" },
  ];

  const whoWeServe = [
    { name: "HNI Families", href: "/services/wealth-management" },
    { name: "UHNI & Ultra-Wealthy", href: "/services/family-office-services" },
    { name: "Family Office", href: "/services/family-office-services" },
    { name: "NRI & Global Indians", href: "/services/global-investments" },
    { name: "Corporates & Founders", href: "/services/corporate-advisory" },
  ];

  const aboutLinks = [
    { name: "Philosophy", href: "/about#philosophy" },
    { name: "Leadership", href: "/leadership" },
    { name: "Awards & Recognition", href: "/about#awards" },
    { name: "Careers", href: "/about#careers" },
  ];

  return (
    <footer className="bg-brand-navy text-brand-ivory border-t border-brand-gold/20 pt-16 pb-8 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Nav Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-brand-gold/10">
          
          {/* Brand & Wordmark */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col mb-4">
              <span className="font-serif text-2xl tracking-widest text-brand-ivory uppercase font-bold">
                Verlak
              </span>
              <span className="font-sans text-[8px] tracking-[0.3em] text-brand-gold uppercase -mt-1 font-medium">
                Corporation
              </span>
            </Link>
            <p className="text-xs text-brand-silver leading-relaxed max-w-sm">
              Verlak Corporation is India&apos;s most distinguished independent investment advisory and wealth management firm. 
              Serving discerning HNI and UHNI families with research-led strategies, fiduciary independence, and global access. 
              We do not sell products. We build legacies.
            </p>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-gold uppercase mb-4">What We Do</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xs text-brand-silver hover:text-brand-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-xs text-brand-gold font-semibold hover:underline">
                  View All Capabilities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Segment */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-gold uppercase mb-4">Who We Serve</h4>
            <ul className="space-y-2.5">
              {whoWeServe.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xs text-brand-silver hover:text-brand-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Institution */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-brand-gold uppercase mb-4">Institution</h4>
            <ul className="space-y-2.5">
              {aboutLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xs text-brand-silver hover:text-brand-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Middle Section: Regulatory & Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-brand-gold/10 text-xs text-brand-silver">
          <div>
            <h5 className="font-semibold text-brand-gold uppercase mb-2">Regulatory Information</h5>
            <p className="leading-relaxed mb-3">
              Verlak Corporation Private Limited | <strong>[SEBI Registration Pending]</strong> | <strong>[AMFI ARN Pending]</strong>
            </p>
            <p className="leading-relaxed">
              Registered Office: Verlak Towers, Level 8, Financial District, Gachibowli, Hyderabad - 500032, India.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-brand-gold uppercase mb-2">Compliance Navigation</h5>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/investor-charter" className="hover:text-brand-gold transition-colors underline">
                Investor Charter
              </Link>
              <span>|</span>
              <a 
                href="https://scores.sebi.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-gold transition-colors underline"
              >
                SEBI SCORES
              </a>
              <span>|</span>
              <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors underline">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms-and-conditions" className="hover:text-brand-gold transition-colors underline">
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link href="/disclosures" className="hover:text-brand-gold transition-colors underline">
                Disclosures & Fee Schedules
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Disclaimer & Copyright */}
        <div className="pt-8 text-[11px] text-brand-silver leading-relaxed">
          <div className="border border-brand-gold/20 p-4 bg-brand-navy/50 mb-6">
            <span className="text-brand-gold font-bold block mb-1">SEBI STATUTORY RISK DISCLAIMER:</span>
            <p>
              &ldquo;Investment in securities market are subject to market risks. Read all the related documents carefully before investing. 
              Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or 
              provide any assurance of returns to investors. Performance numbers displayed are aggregate historical figures and do not guarantee 
              future wealth creation.&rdquo;
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px]">
            <p>Copyright &copy; {currentYear} Verlak Corporation Private Limited. All rights reserved.</p>
            <p className="mt-2 sm:mt-0 text-brand-gold font-serif tracking-wider">Where Wealth Meets Conviction.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
