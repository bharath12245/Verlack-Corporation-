import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verlak Corporation | Independent Wealth Management & Institutional Advisory",
  description: "Experience independent, research-led wealth management tailored for India's premier HNI and UHNI families. Zero commission, fee-only fiduciary counsel.",
  keywords: [
    "independent wealth management India",
    "SEBI registered investment adviser",
    "multi-generational family office",
    "bespoke portfolio management services",
    "fee-only advisory HNI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-ivory text-brand-navy font-sans">
        <Header />
        <main className="flex-grow flex flex-col bg-brand-ivory">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
