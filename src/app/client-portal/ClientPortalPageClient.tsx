"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { ShieldCheck, Layers, Calculator, HelpCircle, FileText, ChevronRight, Lock, Sparkles, TrendingUp, AlertTriangle } from "lucide-react";

export default function ClientPortalPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [calcTab, setCalcTab] = useState<string>("sip");

  // Prevent hydration errors with Recharts by only rendering on client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // MOCK PORTFOLIO DATA (Institutional client example)
  const portfolioSummary = {
    netWorth: "₹28,45,20,000",
    dailyChange: "+₹1,42,800 (+0.49%)",
    xirr: "14.6%",
    lastUpdated: "11 Jun 2026, 03:30 PM IST"
  };

  const assetAllocationData = [
    { name: "Public Equity PMS", value: 45, color: "#071D49" },
    { name: "Fixed Income & Bonds", value: 25, color: "#3A4A5E" },
    { name: "Alternative Credit/PE", value: 15, color: "#B58A45" },
    { name: "Liquid Cash/Treasury", value: 15, color: "#8A9BAE" }
  ];

  const holdings = [
    { name: "Verlak Conviction PMS", type: "Equity PMS", marketValue: "₹12,80,34,000", costBasis: "₹10,00,00,000", gain: "+28.0%", color: "text-green-600" },
    { name: "HDFC Corp Debt Direct Plan", type: "Fixed Income", marketValue: "₹7,11,30,000", costBasis: "₹6,50,00,000", gain: "+9.4%", color: "text-green-600" },
    { name: "Neo-Credit Structured Debenture", type: "Alternatives", marketValue: "₹4,26,78,000", costBasis: "₹4,00,00,000", gain: "+6.7%", color: "text-green-600" },
    { name: "Verlak Liquidity Reserve Cash", type: "Cash/Treasury", marketValue: "₹4,26,78,000", costBasis: "₹4,26,78,000", gain: "0.0%", color: "text-brand-slate" }
  ];

  // CALCULATOR 1: SIP & COMPOUNDING
  const [sipMonthly, setSipMonthly] = useState<number>(50000);
  const [sipCAGR, setSipCAGR] = useState<number>(12);
  const [sipYears, setSipYears] = useState<number>(15);

  const calculateSIP = () => {
    const P = sipMonthly;
    const r = sipCAGR / 12 / 100;
    const n = sipYears * 12;
    if (r === 0) return { invested: P * n, total: P * n, gains: 0 };

    const total = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = P * n;
    const gains = total - invested;

    return {
      invested: Math.round(invested),
      total: Math.round(total),
      gains: Math.round(gains)
    };
  };

  const sipResult = calculateSIP();

  // CALCULATOR 2: RETIREMENT CORPUS PLANNER
  const [retCurrentAge, setRetCurrentAge] = useState<number>(30);
  const [retTargetAge, setRetTargetAge] = useState<number>(60);
  const [retMonthlyExpense, setRetMonthlyExpense] = useState<number>(100000);
  const [retInflation, setRetInflation] = useState<number>(6);
  const [retReturnPost, setRetReturnPost] = useState<number>(8);

  const calculateRetirement = () => {
    const yearsToRetire = retTargetAge - retCurrentAge;
    if (yearsToRetire <= 0) return { corpus: 0, sipNeeded: 0, monthlyFutureExp: retMonthlyExpense };

    // Monthly expenses adjusted for inflation at retirement
    const monthlyFutureExp = retMonthlyExpense * Math.pow(1 + retInflation / 100, yearsToRetire);

    // Required corpus (assume 30 years post-retirement with inflation-adjusted returns)
    // Inflation adjusted return post-retirement
    const r_post = retReturnPost / 12 / 100;
    const inf_post = retInflation / 12 / 100;
    const real_r = (r_post - inf_post) / (1 + inf_post);

    const postRetirementMonths = 30 * 12;
    let requiredCorpus = 0;
    if (real_r === 0) {
      requiredCorpus = monthlyFutureExp * postRetirementMonths;
    } else {
      requiredCorpus = monthlyFutureExp * ((1 - Math.pow(1 + real_r, -postRetirementMonths)) / real_r);
    }

    // Monthly SIP needed during accumulation (assume 12% CAGR pre-retirement)
    const accum_r = 12 / 12 / 100;
    const accum_n = yearsToRetire * 12;
    const sipNeeded = requiredCorpus / (((Math.pow(1 + accum_r, accum_n) - 1) / accum_r) * (1 + accum_r));

    return {
      monthlyFutureExp: Math.round(monthlyFutureExp),
      corpus: Math.round(requiredCorpus),
      sipNeeded: Math.round(sipNeeded)
    };
  };

  const retResult = calculateRetirement();

  // CALCULATOR 3: RISK PROFILER
  const [riskAnswers, setRiskAnswers] = useState<number[]>([-1, -1, -1, -1, -1]);
  const [riskResult, setRiskResult] = useState<string>("");

  const riskQuestions = [
    {
      q: "1. What is your primary investment horizon for family capital?",
      options: [
        { text: "Short Term (Under 3 years) - Liquidity is priority", points: 1 },
        { text: "Medium Term (3 to 7 years) - Structured growth", points: 3 },
        { text: "Long Term (7+ years) - Multi-generational wealth", points: 5 }
      ]
    },
    {
      q: "2. How would you react if public equity portfolios dropped 20% during market stress?",
      options: [
        { text: "Liquidate assets to prevent further downside", points: 1 },
        { text: "Maintain current weights and wait for recovery", points: 3 },
        { text: "Opportunistically reallocate cash to buy quality equities", points: 5 }
      ]
    },
    {
      q: "3. Which objective best describes your wealth management goal?",
      options: [
        { text: "Capital Preservation (Maintain purchasing power vs inflation)", points: 1 },
        { text: "Balanced Growth (Steady compounding with moderate drawdowns)", points: 3 },
        { text: "Aggressive Alpha (PE co-investments and high-conviction PMS)", points: 5 }
      ]
    },
    {
      q: "4. What is the main source of your investable assets?",
      options: [
        { text: "Stable corporate salary or conservative pension", points: 1 },
        { text: "Professional practice or business cash flows", points: 3 },
        { text: "Equity liquidity event, founder exit, or inheritance", points: 5 }
      ]
    },
    {
      q: "5. What is your prior familiarity with alternative investments (AIFs, Private Credit)?",
      options: [
        { text: "No familiarity - Prefers direct mutual funds and fixed deposits", points: 1 },
        { text: "Moderate - Familiar with corporate bonds and index ETFs", points: 3 },
        { text: "Advanced - Actively participates in PE syndications and debt alts", points: 5 }
      ]
    }
  ];

  const handleAnswerSelect = (qIdx: number, points: number) => {
    const newAnswers = [...riskAnswers];
    newAnswers[qIdx] = points;
    setRiskAnswers(newAnswers);

    // If all questions answered, calculate score
    if (newAnswers.every(ans => ans !== -1)) {
      const score = newAnswers.reduce((a, b) => a + b, 0);
      if (score <= 9) setRiskResult("Conservative");
      else if (score <= 17) setRiskResult("Balanced");
      else setRiskResult("Growth");
    }
  };

  const resetRiskQuiz = () => {
    setRiskAnswers([-1, -1, -1, -1, -1]);
    setRiskResult("");
  };

  // CALCULATOR 4: TAX ANALYZER
  const [taxGain, setTaxGain] = useState<number>(500000);
  const [taxAssetType, setTaxAssetType] = useState<string>("equity");
  const [taxHoldingPeriod, setTaxHoldingPeriod] = useState<number>(18); // months

  const calculateTax = () => {
    const gains = taxGain;
    let category = "";
    let rate = 0;
    let taxPayable = 0;
    let thresholdExempt = 0;

    if (taxAssetType === "equity") {
      if (taxHoldingPeriod > 12) {
        category = "Long-Term Capital Gains (LTCG)";
        rate = 12.5; // New Budget Rate
        thresholdExempt = 125000; // New exemption limit
        taxPayable = gains > thresholdExempt ? (gains - thresholdExempt) * (rate / 100) : 0;
      } else {
        category = "Short-Term Capital Gains (STCG)";
        rate = 20.0; // New Budget Rate
        taxPayable = gains * (rate / 100);
      }
    } else {
      // Debt instruments (taxed at slab rates post-2023 budget amendments, assuming top slab 30%)
      category = "Short-Term Capital Gains (Taxed at Individual Slab Rate)";
      rate = 30.0;
      taxPayable = gains * (rate / 100);
    }

    const netGains = gains - taxPayable;

    return {
      category,
      rate,
      taxPayable: Math.round(taxPayable),
      netGains: Math.round(netGains),
      thresholdExempt
    };
  };

  const taxResult = calculateTax();

  // Helper format currency
  const formatINR = (num: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div className="flex flex-col bg-brand-ivory text-brand-navy min-h-screen font-sans">
      
      {/* 1. Header Hero Bar */}
      <section className="bg-brand-navy text-brand-ivory py-16 px-4 border-b border-brand-gold/20 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#B58A45_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-[9px] font-bold tracking-[0.25em] text-brand-gold uppercase block">
              Investor Command Centre
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-light">
              Verlak Client Portal
            </h1>
            <p className="text-[10px] text-brand-silver">
              Fiduciary Account Access &bull; Secure Session
            </p>
          </div>
          <div className="bg-brand-navy/60 border border-brand-gold/20 px-4 py-2 text-right">
            <span className="text-[9px] text-brand-silver uppercase block">Aggregate Net Worth</span>
            <span className="font-serif text-lg text-brand-gold font-semibold">{portfolioSummary.netWorth}</span>
          </div>
        </div>
      </section>

      {/* 2. Portal Primary Tabs */}
      <section className="bg-white border-b border-brand-gold/15 py-4 px-4 sticky top-20 z-40">
        <div className="mx-auto max-w-7xl flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all ${
              activeTab === "dashboard"
                ? "border-brand-gold text-brand-navy font-bold"
                : "border-transparent text-brand-slate hover:text-brand-navy"
            }`}
          >
            Portfolio &amp; Holdings
          </button>
          
          <button
            onClick={() => setActiveTab("calculators")}
            className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all ${
              activeTab === "calculators"
                ? "border-brand-gold text-brand-navy font-bold"
                : "border-transparent text-brand-slate hover:text-brand-navy"
            }`}
          >
            Interactive Calculators
          </button>

          <button
            onClick={() => setActiveTab("research")}
            className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all ${
              activeTab === "research"
                ? "border-brand-gold text-brand-navy font-bold"
                : "border-transparent text-brand-slate hover:text-brand-navy"
            }`}
          >
            Research Access
          </button>
        </div>
      </section>

      {/* 3. Tab Contents */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full flex-grow">
        
        {/* TAB 1: PORTFOLIO & HOLDINGS */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left widgets */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Wealth metrics grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white border border-brand-gold/15 p-6 shadow-sm">
                  <span className="text-[9px] text-brand-slate font-bold tracking-widest uppercase block">Portfolio Value</span>
                  <span className="font-serif text-2xl text-brand-navy font-bold mt-2 block">{portfolioSummary.netWorth}</span>
                </div>
                <div className="bg-white border border-brand-gold/15 p-6 shadow-sm">
                  <span className="text-[9px] text-brand-slate font-bold tracking-widest uppercase block">Daily P&amp;L change</span>
                  <span className="font-serif text-base text-green-600 font-semibold mt-2 block">{portfolioSummary.dailyChange}</span>
                </div>
                <div className="bg-white border border-brand-gold/15 p-6 shadow-sm">
                  <span className="text-[9px] text-brand-slate font-bold tracking-widest uppercase block">Mandate Performance (XIRR)</span>
                  <span className="font-serif text-2xl text-brand-navy font-bold mt-2 block">{portfolioSummary.xirr}</span>
                </div>
              </div>

              {/* Holdings Explorer Table */}
              <div className="bg-white border border-brand-gold/15 shadow-sm p-6 space-y-4">
                <div className="border-b border-brand-gold/10 pb-3 flex justify-between items-center">
                  <h3 className="font-serif text-lg font-semibold text-brand-navy">Holdings Explorer</h3>
                  <span className="text-[9px] text-brand-slate uppercase">Custodian verified CDSL/NSDL</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-brand-gold/10 text-xs">
                    <thead>
                      <tr className="text-left text-brand-slate font-bold uppercase tracking-wider text-[9px] border-b border-brand-gold/10">
                        <th className="pb-3">Asset Description</th>
                        <th className="pb-3">Allocation Class</th>
                        <th className="pb-3">Market Value</th>
                        <th className="pb-3">Cost Basis</th>
                        <th className="pb-3 text-right">Unrealized Gain</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-gold/10">
                      {holdings.map((item, idx) => (
                        <tr key={idx} className="hover:bg-brand-ivory/25 transition-colors">
                          <td className="py-3.5 font-semibold text-brand-navy">{item.name}</td>
                          <td className="py-3.5 text-brand-slate">{item.type}</td>
                          <td className="py-3.5 font-medium text-brand-navy">{item.marketValue}</td>
                          <td className="py-3.5 text-brand-slate">{item.costBasis}</td>
                          <td className={`py-3.5 text-right font-bold ${item.color}`}>{item.gain}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Right widgets - Charts & VELA AI */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Asset Allocation Chart Card */}
              <div className="bg-white border border-brand-gold/15 p-6 shadow-sm space-y-4">
                <h3 className="font-serif text-base font-semibold text-brand-navy border-b border-brand-gold/10 pb-3">
                  Asset Allocation Weights
                </h3>
                
                {mounted ? (
                  <div className="h-48 w-full flex items-center justify-center">
                    <PieChart width={240} height={180}>
                      <Pie
                        data={assetAllocationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={65}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {assetAllocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ background: "#F7F5EF", border: "1px solid #B58A45", fontSize: "10px" }}
                        formatter={(value) => [`${value}%`]}
                      />
                    </PieChart>
                  </div>
                ) : (
                  <div className="h-48 bg-brand-ivory/20 animate-pulse flex items-center justify-center text-xs text-brand-slate">
                    Loading data...
                  </div>
                )}

                <div className="space-y-2.5 pt-2">
                  {assetAllocationData.map((item) => (
                    <div key={item.name} className="flex justify-between items-center text-xs">
                      <span className="flex items-center text-brand-slate">
                        <span className="h-2 w-2 mr-2" style={{ backgroundColor: item.color }}></span>
                        {item.name}
                      </span>
                      <span className="font-semibold text-brand-navy">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* VELA AI Assistant card (Coming Soon) */}
              <div className="border border-brand-gold/25 p-6 bg-brand-navy text-brand-ivory shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <Sparkles className="h-16 w-16 text-brand-gold" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase">Phase 2 Roadmap</span>
                    <span className="px-2 py-0.5 text-[8px] bg-brand-gold text-brand-navy uppercase font-bold tracking-wider">Coming Soon</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-brand-ivory">VELA AI Wealth Assistant</h3>
                    <p className="text-[10px] text-brand-silver mt-1">Verlak Embedded Learning Assistant</p>
                  </div>
                  <p className="text-xs text-brand-silver leading-relaxed">
                    Vela will handle routine account balance enquiries, run goal forecasts, and flag rebalancing alerts directly on your dashboard. Designed to augment, never replace, your partner advisors.
                  </p>
                  <div className="h-px bg-brand-gold/20 pt-2"></div>
                  <p className="text-[10px] text-brand-gold font-medium italic">
                    &bull; Dynamic portfolio queries &bull; Tax impact calculations
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: INTERACTIVE CALCULATORS */}
        {activeTab === "calculators" && (
          <div className="bg-white border border-brand-gold/15 shadow-sm p-8 space-y-8">
            <div className="border-b border-brand-gold/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[9px] font-bold tracking-widest text-brand-gold uppercase block">Fiduciary Analytics</span>
                <h2 className="font-serif text-2xl text-brand-navy font-light">Interactive Calculators Sandbox</h2>
              </div>
              
              {/* Calculator Selection Subtabs */}
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => setCalcTab("sip")}
                  className={`px-4 py-2 text-[10px] uppercase tracking-wider font-semibold border ${
                    calcTab === "sip"
                      ? "bg-brand-navy border-brand-navy text-brand-ivory"
                      : "border-brand-gold/20 text-brand-slate hover:bg-brand-ivory"
                  }`}
                >
                  SIP Compounding
                </button>
                <button
                  onClick={() => setCalcTab("retirement")}
                  className={`px-4 py-2 text-[10px] uppercase tracking-wider font-semibold border ${
                    calcTab === "retirement"
                      ? "bg-brand-navy border-brand-navy text-brand-ivory"
                      : "border-brand-gold/20 text-brand-slate hover:bg-brand-ivory"
                  }`}
                >
                  Retirement Planner
                </button>
                <button
                  onClick={() => setCalcTab("risk")}
                  className={`px-4 py-2 text-[10px] uppercase tracking-wider font-semibold border ${
                    calcTab === "risk"
                      ? "bg-brand-navy border-brand-navy text-brand-ivory"
                      : "border-brand-gold/20 text-brand-slate hover:bg-brand-ivory"
                  }`}
                >
                  Risk Profiler
                </button>
                <button
                  onClick={() => setCalcTab("tax")}
                  className={`px-4 py-2 text-[10px] uppercase tracking-wider font-semibold border ${
                    calcTab === "tax"
                      ? "bg-brand-navy border-brand-navy text-brand-ivory"
                      : "border-brand-gold/20 text-brand-slate hover:bg-brand-ivory"
                  }`}
                >
                  Tax Analyzer
                </button>
              </div>
            </div>

            {/* CALCULATOR INTERFACE COMPONENT SUBTABS */}
            
            {/* SUBTAB: SIP & COMPOUNDING */}
            {calcTab === "sip" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Sliders Input */}
                <div className="lg:col-span-6 space-y-8">
                  <h3 className="font-serif text-lg font-semibold text-brand-navy border-b border-brand-gold/10 pb-2">SIP Parameters</h3>
                  
                  {/* Monthly Investment */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Monthly Contribution</span>
                      <span className="text-brand-gold">{formatINR(sipMonthly)}</span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={1000000}
                      step={5000}
                      value={sipMonthly}
                      onChange={(e) => setSipMonthly(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-ivory rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                    <div className="flex justify-between text-[9px] text-brand-slate">
                      <span>₹10,000</span>
                      <span>₹10 Lakhs</span>
                    </div>
                  </div>

                  {/* expected return */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Expected return CAGR</span>
                      <span className="text-brand-gold">{sipCAGR}%</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={25}
                      step={0.5}
                      value={sipCAGR}
                      onChange={(e) => setSipCAGR(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-ivory rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                    <div className="flex justify-between text-[9px] text-brand-slate">
                      <span>5%</span>
                      <span>25%</span>
                    </div>
                  </div>

                  {/* tenure */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Investment Horizon</span>
                      <span className="text-brand-gold">{sipYears} Years</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={40}
                      step={1}
                      value={sipYears}
                      onChange={(e) => setSipYears(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-ivory rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                    <div className="flex justify-between text-[9px] text-brand-slate">
                      <span>1 Year</span>
                      <span>40 Years</span>
                    </div>
                  </div>
                </div>

                {/* Outputs Panel */}
                <div className="lg:col-span-6 bg-brand-ivory/30 border border-brand-gold/15 p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-brand-navy border-b border-brand-gold/10 pb-2">Wealth Multiplier Overview</h3>
                    <div className="space-y-4 pt-4 text-xs">
                      <div className="flex justify-between border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-slate">Total Capital Invested</span>
                        <span className="font-semibold">{formatINR(sipResult.invested)}</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-slate">Estimated Capital Gained</span>
                        <span className="font-semibold text-green-600">+{formatINR(sipResult.gains)}</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="text-brand-navy font-bold">Total Estimated Corpus</span>
                        <span className="font-serif text-lg text-brand-navy font-bold">{formatINR(sipResult.total)}</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Line visualization */}
                  <div className="h-24 w-full bg-white border border-brand-gold/10 p-3 flex flex-col justify-end">
                    <span className="text-[8px] text-brand-slate block uppercase tracking-wider mb-2">Compound Growth Trajectory</span>
                    <svg viewBox="0 0 300 60" className="w-full h-full">
                      <path
                        d={`M0 50 Q 150 ${50 - (sipResult.gains / sipResult.total) * 15} 300 ${50 - (sipResult.gains / sipResult.total) * 40}`}
                        fill="none"
                        stroke="#B58A45"
                        strokeWidth="2.5"
                      />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#071D49" strokeWidth="1" strokeDasharray="2" />
                      <circle cx="300" cy={50 - (sipResult.gains / sipResult.total) * 40} r="4" fill="#071D49" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* SUBTAB: RETIREMENT CORPUS PLANNER */}
            {calcTab === "retirement" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Sliders Input */}
                <div className="lg:col-span-6 space-y-8">
                  <h3 className="font-serif text-lg font-semibold text-brand-navy border-b border-brand-gold/10 pb-2">Accumulation Variables</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Current Age */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span>Current Age</span>
                        <span className="text-brand-gold">{retCurrentAge}</span>
                      </div>
                      <input
                        type="range"
                        min={20}
                        max={65}
                        value={retCurrentAge}
                        onChange={(e) => setRetCurrentAge(Number(e.target.value))}
                        className="w-full h-1 bg-brand-ivory rounded accent-brand-gold"
                      />
                    </div>

                    {/* Target Retirement Age */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span>Retirement Age</span>
                        <span className="text-brand-gold">{retTargetAge}</span>
                      </div>
                      <input
                        type="range"
                        min={retCurrentAge + 1}
                        max={75}
                        value={retTargetAge}
                        onChange={(e) => setRetTargetAge(Number(e.target.value))}
                        className="w-full h-1 bg-brand-ivory rounded accent-brand-gold"
                      />
                    </div>
                  </div>

                  {/* Monthly expenses */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Monthly Expenses Today</span>
                      <span className="text-brand-gold">{formatINR(retMonthlyExpense)}</span>
                    </div>
                    <input
                      type="range"
                      min={20000}
                      max={1000000}
                      step={5000}
                      value={retMonthlyExpense}
                      onChange={(e) => setRetMonthlyExpense(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-ivory rounded accent-brand-gold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Inflation Rate */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span>Expected Inflation</span>
                        <span className="text-brand-gold">{retInflation}%</span>
                      </div>
                      <input
                        type="range"
                        min={4}
                        max={12}
                        value={retInflation}
                        onChange={(e) => setRetInflation(Number(e.target.value))}
                        className="w-full h-1 bg-brand-ivory rounded accent-brand-gold"
                      />
                    </div>

                    {/* Post Retirement return */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold">
                        <span>Post-Retirement Return</span>
                        <span className="text-brand-gold">{retReturnPost}%</span>
                      </div>
                      <input
                        type="range"
                        min={5}
                        max={15}
                        value={retReturnPost}
                        onChange={(e) => setRetReturnPost(Number(e.target.value))}
                        className="w-full h-1 bg-brand-ivory rounded accent-brand-gold"
                      />
                    </div>
                  </div>
                </div>

                {/* Outputs Panel */}
                <div className="lg:col-span-6 bg-brand-ivory/30 border border-brand-gold/15 p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-brand-navy border-b border-brand-gold/10 pb-2">Target Calculations</h3>
                    <div className="space-y-4 pt-4 text-xs">
                      <div className="flex justify-between border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-slate">Years to Retire</span>
                        <span className="font-semibold">{retTargetAge - retCurrentAge} Years</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-slate">Monthly Expense at Retirement</span>
                        <span className="font-semibold">{formatINR(retResult.monthlyFutureExp)}</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-navy font-bold">Required Retirement Corpus</span>
                        <span className="font-serif text-base text-brand-navy font-bold">{formatINR(retResult.corpus)}</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="text-brand-navy font-bold">Monthly Accumulation SIP (at 12% CAGR)</span>
                        <span className="font-serif text-lg text-brand-gold font-bold">{formatINR(retResult.sipNeeded)}/mo</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-brand-gold pl-4 text-[10px] text-brand-slate leading-relaxed">
                    Estimates are calculated using standard annuity factors assuming a post-retirement horizon of 30 years and adjusting for specified inflation parameters.
                  </div>
                </div>
              </div>
            )}

            {/* SUBTAB: RISK PROFILER */}
            {calcTab === "risk" && (
              <div className="space-y-8">
                <h3 className="font-serif text-lg font-semibold text-brand-navy border-b border-brand-gold/10 pb-2">Suitability &amp; Risk Questionnaire</h3>
                
                {riskResult ? (
                  <div className="border border-brand-gold/20 p-8 bg-brand-ivory/40 space-y-6 text-center max-w-xl mx-auto">
                    <ShieldCheck className="h-12 w-12 text-brand-gold mx-auto" />
                    <h4 className="font-serif text-xl font-bold">Result: {riskResult} Portfolio Profile</h4>
                    
                    <div className="space-y-4 text-xs max-w-md mx-auto">
                      <p className="text-brand-slate leading-relaxed">
                        Based on your horizon, drawdowns threshold, and goals, you map to the <strong>{riskResult}</strong> risk classification. We recommend the following institutional allocation:
                      </p>
                      
                      <div className="bg-white border border-brand-gold/10 p-4 divide-y divide-brand-gold/10">
                        {riskResult === "Conservative" && (
                          <>
                            <div className="flex justify-between py-1.5"><span>Fixed Income &amp; Debt Bonds</span><span className="font-bold text-brand-navy">70%</span></div>
                            <div className="flex justify-between py-1.5"><span>Public Equities PMS</span><span className="font-bold text-brand-navy">20%</span></div>
                            <div className="flex justify-between py-1.5"><span>Liquid Cash Reserves</span><span className="font-bold text-brand-navy">10%</span></div>
                          </>
                        )}
                        {riskResult === "Balanced" && (
                          <>
                            <div className="flex justify-between py-1.5"><span>Public Equities PMS</span><span className="font-bold text-brand-navy">45%</span></div>
                            <div className="flex justify-between py-1.5"><span>Fixed Income &amp; Debt Bonds</span><span className="font-bold text-brand-navy">30%</span></div>
                            <div className="flex justify-between py-1.5"><span>Private Credit &amp; PE Alts</span><span className="font-bold text-brand-navy">15%</span></div>
                            <div className="flex justify-between py-1.5"><span>Liquid Cash Reserves</span><span className="font-bold text-brand-navy">10%</span></div>
                          </>
                        )}
                        {riskResult === "Growth" && (
                          <>
                            <div className="flex justify-between py-1.5"><span>Public Equities PMS</span><span className="font-bold text-brand-navy">65%</span></div>
                            <div className="flex justify-between py-1.5"><span>Private Credit &amp; PE Alts</span><span className="font-bold text-brand-navy">20%</span></div>
                            <div className="flex justify-between py-1.5"><span>Fixed Income &amp; Debt Bonds</span><span className="font-bold text-brand-navy">10%</span></div>
                            <div className="flex justify-between py-1.5"><span>Liquid Cash Reserves</span><span className="font-bold text-brand-navy">5%</span></div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-center gap-4">
                      <button
                        onClick={resetRiskQuiz}
                        className="px-6 py-2.5 border border-brand-navy text-brand-navy text-xs font-bold tracking-wider uppercase hover:bg-brand-navy hover:text-brand-ivory transition-colors"
                      >
                        Retake Assessment
                      </button>
                      <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-brand-gold text-brand-navy text-xs font-bold tracking-wider uppercase hover:bg-brand-navy hover:text-brand-ivory transition-colors"
                      >
                        Discuss Allocation
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8 max-w-3xl mx-auto">
                    {riskQuestions.map((q, qIdx) => (
                      <div key={qIdx} className="space-y-3 border-b border-brand-gold/10 pb-6 last:border-none">
                        <h4 className="font-serif text-sm sm:text-base font-semibold text-brand-navy">{q.q}</h4>
                        <div className="grid grid-cols-1 gap-2.5">
                          {q.options.map((opt, optIdx) => (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleAnswerSelect(qIdx, opt.points)}
                              className={`text-left px-5 py-3 text-xs border transition-all ${
                                riskAnswers[qIdx] === opt.points
                                  ? "bg-brand-navy border-brand-navy text-brand-ivory font-semibold"
                                  : "border-brand-gold/20 hover:bg-brand-ivory text-brand-slate hover:text-brand-navy"
                              }`}
                            >
                              {opt.text}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SUBTAB: TAX ANALYZER */}
            {calcTab === "tax" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Inputs Column */}
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="font-serif text-lg font-semibold text-brand-navy border-b border-brand-gold/10 pb-2">Gains Parameters</h3>
                  
                  {/* Capital Gain Amount */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-bold tracking-wider uppercase text-brand-navy">Capital Gain Realized (₹)</label>
                    <input
                      type="number"
                      value={taxGain}
                      onChange={(e) => setTaxGain(Number(e.target.value))}
                      className="px-4 py-2.5 bg-brand-ivory/20 border border-brand-gold/25 text-xs font-semibold text-brand-navy focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  {/* Asset Class */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-bold tracking-wider uppercase text-brand-navy">Asset holding Class</label>
                    <select
                      value={taxAssetType}
                      onChange={(e) => setTaxAssetType(e.target.value)}
                      className="px-4 py-2.5 bg-white border border-brand-gold/25 text-xs text-brand-navy focus:outline-none focus:border-brand-gold"
                    >
                      <option value="equity">Public Equities / Equity PMS</option>
                      <option value="debt">Debt Instruments / Corporate Bonds</option>
                    </select>
                  </div>

                  {/* Holding Period */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Holding Period (Months)</span>
                      <span className="text-brand-gold">{taxHoldingPeriod} Months</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={48}
                      value={taxHoldingPeriod}
                      onChange={(e) => setTaxHoldingPeriod(Number(e.target.value))}
                      className="w-full h-1.5 bg-brand-ivory rounded accent-brand-gold"
                    />
                    <div className="flex justify-between text-[9px] text-brand-slate">
                      <span>1 Month</span>
                      <span>48 Months</span>
                    </div>
                  </div>
                </div>

                {/* Outputs Column */}
                <div className="lg:col-span-6 bg-brand-ivory/30 border border-brand-gold/15 p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-brand-navy border-b border-brand-gold/10 pb-2">Tax Liability Analysis</h3>
                    <div className="space-y-4 pt-4 text-xs">
                      <div className="flex justify-between border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-slate">Gains Category</span>
                        <span className="font-semibold text-brand-navy">{taxResult.category}</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-slate">Budget Tax Rate Applying</span>
                        <span className="font-semibold">{taxResult.rate}%</span>
                      </div>
                      {taxResult.thresholdExempt > 0 && (
                        <div className="flex justify-between border-b border-brand-gold/10 pb-2">
                          <span className="text-brand-slate">Statutory Exemption Allowance</span>
                          <span className="font-semibold text-green-600">-{formatINR(taxResult.thresholdExempt)}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-b border-brand-gold/10 pb-2">
                        <span className="text-brand-navy font-bold">Estimated Tax Payable</span>
                        <span className="font-semibold text-red-600">{formatINR(taxResult.taxPayable)}</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="text-brand-navy font-bold">Net Post-Tax Capital Gained</span>
                        <span className="font-serif text-lg text-brand-navy font-bold">{formatINR(taxResult.netGains)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-brand-gold/20 p-3 bg-white flex items-start space-x-2 text-[9px] text-brand-slate">
                    <AlertTriangle className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <p>
                      Tax estimates are based on the latest 2024-2025 Union Budget amendments (Equity LTCG increased to 12.5% with ₹1.25L exemption; Equity STCG increased to 20%). Debt holdings are taxed at slab rates. Consult your CA for final filings.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: RESEARCH & DOCUMENTS */}
        {activeTab === "research" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-brand-gold/15 p-8 shadow-sm space-y-4">
              <FileText className="h-10 w-10 text-brand-gold" />
              <h3 className="font-serif text-lg font-semibold text-brand-navy">Flagship Publications</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Unlock direct access to the latest edition of the <strong>Verlak India Wealth Report</strong> and the monthly <strong>CIO Letters</strong>.
              </p>
              <div className="pt-4">
                <Link
                  href="/research"
                  className="inline-flex items-center px-5 py-2 bg-brand-navy text-brand-ivory text-xs font-bold tracking-wider uppercase hover:bg-brand-gold hover:text-brand-navy transition-colors shadow-sm"
                >
                  Enter Research Centre
                </Link>
              </div>
            </div>

            <div className="bg-white border border-brand-gold/15 p-8 shadow-sm space-y-4">
              <Lock className="h-10 w-10 text-brand-gold" />
              <h3 className="font-serif text-lg font-semibold text-brand-navy">Document Vault</h3>
              <p className="text-xs text-brand-slate leading-relaxed">
                Access your historic quarterly performance attribution files, signed fiduciary charters, and compliance disclosures securely.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => alert("Secure Document Vault synchronization is active. No files uploaded currently.")}
                  className="px-5 py-2 border border-brand-navy text-brand-navy text-xs font-bold tracking-wider uppercase hover:bg-brand-navy hover:text-brand-ivory transition-colors"
                >
                  Verify Vault Status
                </button>
              </div>
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
