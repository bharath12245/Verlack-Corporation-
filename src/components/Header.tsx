"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Globe, User, BookOpen, Compass } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position to change background styling slightly if wanted
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

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

  const ourThinking = [
    { name: "Market Insights", href: "/research?category=market-outlook" },
    { name: "Research Centre", href: "/research" },
    { name: "Podcast", href: "/research?tab=podcast" },
    { name: "Events & Webinars", href: "/research?tab=events" },
  ];

  const about = [
    { name: "Philosophy", href: "/about#philosophy" },
    { name: "Leadership", href: "/leadership" },
    { name: "Awards", href: "/about#awards" },
    { name: "Careers", href: "/about#careers" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-brand-ivory border-b border-brand-gold/20 shadow-md" 
        : "bg-brand-ivory border-b border-brand-gold/10"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Wordmark */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3">
              <img 
                src="/logo.jpg" 
                alt="Verlak Emblem" 
                className="h-10 w-10 object-cover object-top border border-brand-gold/20" 
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-widest text-brand-navy font-bold uppercase leading-none">
                  Verlak
                </span>
                <span className="font-sans text-[8px] tracking-[0.3em] text-brand-gold uppercase mt-1 font-medium leading-none">
                  Corporation
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {/* What We Do Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-xs font-semibold tracking-wider text-brand-navy hover:text-brand-gold uppercase transition-colors py-2"
                onMouseEnter={() => setActiveDropdown("what-we-do")}
              >
                What We Do <ChevronDown className="ml-1 h-3 w-3 text-brand-gold" />
              </button>
              
              {activeDropdown === "what-we-do" && (
                <div 
                  className="absolute left-0 mt-2 w-72 bg-brand-ivory border border-brand-gold/20 shadow-lg py-4 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-4 py-2 border-b border-brand-gold/10 mb-2">
                    <p className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Capabilities</p>
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-6 py-2.5 text-xs text-brand-navy hover:bg-brand-navy hover:text-brand-ivory transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Who We Serve Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-xs font-semibold tracking-wider text-brand-navy hover:text-brand-gold uppercase transition-colors py-2"
                onMouseEnter={() => setActiveDropdown("who-we-serve")}
              >
                Who We Serve <ChevronDown className="ml-1 h-3 w-3 text-brand-gold" />
              </button>
              
              {activeDropdown === "who-we-serve" && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-brand-ivory border border-brand-gold/20 shadow-lg py-4 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-4 py-2 border-b border-brand-gold/10 mb-2">
                    <p className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Client Segment</p>
                  </div>
                  {whoWeServe.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-2.5 text-xs text-brand-navy hover:bg-brand-navy hover:text-brand-ivory transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Our Thinking Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-xs font-semibold tracking-wider text-brand-navy hover:text-brand-gold uppercase transition-colors py-2"
                onMouseEnter={() => setActiveDropdown("our-thinking")}
              >
                Our Thinking <ChevronDown className="ml-1 h-3 w-3 text-brand-gold" />
              </button>
              
              {activeDropdown === "our-thinking" && (
                <div 
                  className="absolute left-0 mt-2 w-60 bg-brand-ivory border border-brand-gold/20 shadow-lg py-4 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-4 py-2 border-b border-brand-gold/10 mb-2">
                    <p className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Insights & Research</p>
                  </div>
                  {ourThinking.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-2.5 text-xs text-brand-navy hover:bg-brand-navy hover:text-brand-ivory transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-xs font-semibold tracking-wider text-brand-navy hover:text-brand-gold uppercase transition-colors py-2"
                onMouseEnter={() => setActiveDropdown("about")}
              >
                About <ChevronDown className="ml-1 h-3 w-3 text-brand-gold" />
              </button>
              
              {activeDropdown === "about" && (
                <div 
                  className="absolute right-0 lg:left-0 mt-2 w-56 bg-brand-ivory border border-brand-gold/20 shadow-lg py-4 z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-4 py-2 border-b border-brand-gold/10 mb-2">
                    <p className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">Institution</p>
                  </div>
                  {about.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-2.5 text-xs text-brand-navy hover:bg-brand-navy hover:text-brand-ivory transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/client-portal"
              className="px-5 py-2 text-xs font-semibold tracking-wider text-brand-navy border border-brand-navy hover:bg-brand-navy hover:text-brand-ivory uppercase transition-colors duration-300"
            >
              Client Portal
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 text-xs font-semibold tracking-wider text-brand-ivory bg-brand-gold border border-brand-gold hover:bg-brand-navy hover:border-brand-navy hover:text-brand-ivory uppercase transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-brand-navy hover:text-brand-gold focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Ivory panel with soft shadow & gold borders) */}
      {isOpen && (
        <div className="lg:hidden bg-brand-ivory border-t border-brand-gold/20 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-1 px-4 py-6">
            {/* What We Do */}
            <div>
              <button
                onClick={() => toggleDropdown("what-we-do")}
                className="flex w-full items-center justify-between py-3 text-xs font-semibold tracking-wider text-brand-navy uppercase border-b border-brand-gold/10"
              >
                What We Do <ChevronDown className="h-4 w-4 text-brand-gold" />
              </button>
              {activeDropdown === "what-we-do" && (
                <div className="pl-4 mt-2 space-y-2 py-1">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-xs text-brand-slate hover:text-brand-navy"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Who We Serve */}
            <div>
              <button
                onClick={() => toggleDropdown("who-we-serve")}
                className="flex w-full items-center justify-between py-3 text-xs font-semibold tracking-wider text-brand-navy uppercase border-b border-brand-gold/10"
              >
                Who We Serve <ChevronDown className="h-4 w-4 text-brand-gold" />
              </button>
              {activeDropdown === "who-we-serve" && (
                <div className="pl-4 mt-2 space-y-2 py-1">
                  {whoWeServe.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-xs text-brand-slate hover:text-brand-navy"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Our Thinking */}
            <div>
              <button
                onClick={() => toggleDropdown("our-thinking")}
                className="flex w-full items-center justify-between py-3 text-xs font-semibold tracking-wider text-brand-navy uppercase border-b border-brand-gold/10"
              >
                Our Thinking <ChevronDown className="h-4 w-4 text-brand-gold" />
              </button>
              {activeDropdown === "our-thinking" && (
                <div className="pl-4 mt-2 space-y-2 py-1">
                  {ourThinking.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-xs text-brand-slate hover:text-brand-navy"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <div>
              <button
                onClick={() => toggleDropdown("about")}
                className="flex w-full items-center justify-between py-3 text-xs font-semibold tracking-wider text-brand-navy uppercase border-b border-brand-gold/10"
              >
                About <ChevronDown className="h-4 w-4 text-brand-gold" />
              </button>
              {activeDropdown === "about" && (
                <div className="pl-4 mt-2 space-y-2 py-1">
                  {about.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-xs text-brand-slate hover:text-brand-navy"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Buttons in Mobile Drawer */}
            <div className="pt-6 flex flex-col space-y-3">
              <Link
                href="/client-portal"
                className="w-full text-center py-3 text-xs font-semibold tracking-wider text-brand-navy border border-brand-navy uppercase"
              >
                Client Portal
              </Link>
              <Link
                href="/contact"
                className="w-full text-center py-3 text-xs font-semibold tracking-wider text-brand-ivory bg-brand-gold uppercase"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
