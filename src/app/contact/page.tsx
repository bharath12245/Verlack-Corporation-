"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Shield, CheckCircle, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    assetLevel: "₹2 Crore – ₹10 Crore",
    interest: "Wealth Management Mandate",
    requirements: "",
    fiduciaryAck: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.fiduciaryAck) {
      setError("Please fill out all mandatory fields and acknowledge the minimum portfolio threshold.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const offices = [
    {
      city: "Hyderabad Corporate Headquarters",
      address: "Level 8, Verlak Towers, Financial District, Gachibowli, Hyderabad - 500032.",
      email: "info@verlakcorporation.com",
      phone: "+91 40 4829 8888"
    },
    {
      city: "Mumbai Advisory Office",
      address: "Level 18, Capital Building, Bandra Kurla Complex (BKC), Mumbai - 400051.",
      email: "info@verlakcorporation.com",
      phone: "+91 22 6192 7777"
    },
    {
      city: "New Delhi Private Banking Desk",
      address: "Level 3, Worldmark 2, Aerocity, New Delhi - 110037.",
      email: "info@verlakcorporation.com",
      phone: "+91 11 4102 6666"
    }
  ];

  const faqs = [
    {
      q: "What documents should I gather for my initial advisory session?",
      a: "To help us maximize the value of your first session, it is helpful to prepare high-level asset allocations, existing mutual fund summaries, or an overview of current private business holding structures and liabilities."
    },
    {
      q: "How long does it typically take to hear back after submitting an inquiry?",
      a: "A senior partner from our private advisory desk will review your requirements and reach out within one business day to coordinate a scheduling time for your initial discussion."
    }
  ];

  return (
    <div className="flex flex-col bg-brand-ivory text-brand-navy min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="bg-brand-navy text-brand-ivory py-24 px-4 text-center border-b border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Initiate Contact
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light leading-tight">
            Begin a Secure Partnership. <span className="italic">Establish Your Legacy.</span>
          </h1>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          <p className="font-sans text-sm sm:text-base text-brand-silver max-w-2xl mx-auto leading-relaxed">
            Contact our senior investment partners to schedule a comprehensive, conflict-free review of your family&apos;s financial architecture.
          </p>
        </div>
      </section>

      {/* 2. Main content: Form & Directory */}
      <section className="py-24 px-4 bg-white border-b border-brand-gold/15">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Form Column - Left */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block">Consultation Request</span>
                <h2 className="font-serif text-2xl sm:text-3xl text-brand-navy font-light leading-tight">
                  A High-Touch Onboarding
                </h2>
                <div className="h-0.5 w-12 bg-brand-gold"></div>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                  We treat every initial inquiry with complete discretion and professional care. Our introductory sessions are structured as open discussions focused on understanding your family&apos;s unique financial landscape, rather than generic sales presentations.
                </p>
              </div>

              {submitted ? (
                <div className="border border-brand-gold/20 p-8 bg-brand-ivory/50 space-y-4 text-center">
                  <CheckCircle className="h-12 w-12 text-brand-gold mx-auto" />
                  <h3 className="font-serif text-xl font-semibold text-brand-navy">Inquiry Received</h3>
                  <p className="text-xs text-brand-slate max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. A senior partner from our private advisory desk will contact you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-brand-ivory/30 border border-brand-gold/15 p-8 shadow-sm">
                  {error && (
                    <div className="p-4 bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold tracking-wider text-brand-navy uppercase">Full Legal Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="px-4 py-2.5 bg-white border border-brand-gold/20 text-xs text-brand-navy focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold tracking-wider text-brand-navy uppercase">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john.doe@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="px-4 py-2.5 bg-white border border-brand-gold/20 text-xs text-brand-navy focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold tracking-wider text-brand-navy uppercase">Contact Number (With Country Code) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="px-4 py-2.5 bg-white border border-brand-gold/20 text-xs text-brand-navy focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                    
                    {/* Asset Level */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold tracking-wider text-brand-navy uppercase">Asset Level Designation</label>
                      <select
                        value={formData.assetLevel}
                        onChange={(e) => setFormData({ ...formData, assetLevel: e.target.value })}
                        className="px-4 py-2.5 bg-white border border-brand-gold/20 text-xs text-brand-navy focus:outline-none focus:border-brand-gold"
                      >
                        <option>₹2 Crore – ₹10 Crore</option>
                        <option>₹10 Crore – ₹50 Crore</option>
                        <option>₹50 Crore – ₹500 Crore</option>
                        <option>Above ₹500 Crore</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Advisory Interest */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-bold tracking-wider text-brand-navy uppercase">Primary Advisory Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="px-4 py-2.5 bg-white border border-brand-gold/20 text-xs text-brand-navy focus:outline-none focus:border-brand-gold"
                    >
                      <option>Wealth Management Mandate</option>
                      <option>Portfolio Management (PMS)</option>
                      <option>Investment Advisory</option>
                      <option>Family Office Services</option>
                      <option>Alternative Asset Access</option>
                      <option>Corporate Treasury / M&A Solutions</option>
                    </select>
                  </div>

                  {/* Requirements */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-bold tracking-wider text-brand-navy uppercase">Custom Overview of Current Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your objectives, timelines, and current holding structure..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="px-4 py-2.5 bg-white border border-brand-gold/20 text-xs text-brand-navy focus:outline-none focus:border-brand-gold resize-none"
                    ></textarea>
                  </div>

                  {/* Fiduciary Acknowledgment Checkbox */}
                  <div className="flex items-start space-x-3 pt-2">
                    <input
                      type="checkbox"
                      id="fiduciaryAck"
                      required
                      checked={formData.fiduciaryAck}
                      onChange={(e) => setFormData({ ...formData, fiduciaryAck: e.target.checked })}
                      className="mt-1 h-4 w-4 border-brand-gold text-brand-gold focus:ring-brand-gold rounded-none"
                    />
                    <label htmlFor="fiduciaryAck" className="text-[11px] text-brand-slate leading-relaxed select-none">
                      I acknowledge that Verlak Corporation maintains a minimum portfolio engagement threshold of <strong>₹2 Crore</strong> aggregate investable capital. *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-navy text-brand-ivory text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300 shadow-sm"
                  >
                    Request Private Consultation Engagement
                  </button>
                </form>
              )}
            </div>

            {/* Directory Column - Right */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-3">
                <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block">Offices</span>
                <h2 className="font-serif text-2xl text-brand-navy font-light leading-tight">
                  Office Directory
                </h2>
                <div className="h-0.5 w-12 bg-brand-gold"></div>
              </div>

              <div className="space-y-8">
                {offices.map((office) => (
                  <div key={office.city} className="border-l-2 border-brand-gold pl-6 py-1 space-y-3">
                    <h4 className="font-serif text-base text-brand-navy font-semibold">{office.city}</h4>
                    <p className="text-xs text-brand-slate leading-relaxed">{office.address}</p>
                    
                    <div className="flex flex-col space-y-1.5 text-xs text-brand-navy pt-2">
                      <span className="flex items-center">
                        <Mail className="h-3.5 w-3.5 text-brand-gold mr-2" />
                        <a href={`mailto:${office.email}`} className="hover:text-brand-gold font-medium underline">
                          {office.email}
                        </a>
                      </span>
                      <span className="flex items-center">
                        <Phone className="h-3.5 w-3.5 text-brand-gold mr-2" />
                        <span>{office.phone}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Data Privacy Commit Section */}
      <section className="py-20 px-4 bg-brand-navy text-brand-ivory border-y border-brand-gold/20">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <Shield className="h-10 w-10 text-brand-gold mx-auto" />
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Absolute Data Privacy Commitment
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-light">
            Guaranteed Confidentiality Under DPDP Act 2023
          </h3>
          <div className="h-px w-20 bg-brand-gold/40 mx-auto"></div>
          <p className="text-xs text-brand-silver max-w-xl mx-auto leading-relaxed">
            All communication and financial information submitted through our portal is securely managed in strict compliance with the Digital Personal Data Protection (DPDP) Act 2023, ensuring complete confidentiality for your family details.
          </p>
        </div>
      </section>

      {/* 4. Strategic Onboarding FAQs */}
      <section className="py-24 px-4 bg-white border-b border-brand-gold/15">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block">Onboarding Queries</span>
            <h2 className="font-serif text-3xl text-brand-navy font-light">Frequently Asked Questions</h2>
            <div className="h-0.5 w-16 bg-brand-gold mx-auto"></div>
          </div>

          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="space-y-2.5 pb-6 border-b border-brand-gold/10">
                <h3 className="font-serif text-lg text-brand-navy font-semibold flex items-start">
                  <HelpCircle className="h-5 w-5 text-brand-gold mr-2.5 mt-0.5 flex-shrink-0" />
                  {item.q}
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed pl-8">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
