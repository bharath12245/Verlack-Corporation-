import React from "react";
import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Our Value Investment Holding Model & Principles",
  description: "Learn about Verlak Corporation's founding origins, co-investment alignment, value investing principles, and corporate governance frameworks.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
