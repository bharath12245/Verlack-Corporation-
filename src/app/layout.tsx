import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecurityProvider from "@/components/SecurityProvider";

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
  metadataBase: new URL("https://www.verlakcorporation.com"),
  title: {
    default: "Verlak Corporation | Independent Wealth Management & Institutional Advisory",
    template: "%s | Verlak Corporation"
  },
  description: "Experience independent, research-led wealth management tailored for India's premier HNI and UHNI families. Zero commission, fee-only fiduciary counsel.",
  keywords: [
    "independent wealth management India",
    "SEBI registered investment adviser",
    "multi-generational family office India",
    "bespoke portfolio management services",
    "fee-only advisory HNI",
    "alternative assets India",
    "wealth stewardship",
    "Verlak Corporation"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Verlak Corporation | Independent Wealth Management",
    description: "Experience independent, research-led wealth management tailored for India's premier HNI and UHNI families. Zero commission, fee-only fiduciary counsel.",
    url: "https://www.verlakcorporation.com",
    siteName: "Verlak Corporation",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verlak Corporation | Independent Wealth Advisory",
    description: "Experience independent, research-led wealth management tailored for India's premier HNI and UHNI families.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <SecurityProvider>
          <Header />
          <main className="flex-grow flex flex-col bg-brand-ivory">
            {children}
          </main>
          <Footer />
        </SecurityProvider>
      </body>
    </html>
  );
}
