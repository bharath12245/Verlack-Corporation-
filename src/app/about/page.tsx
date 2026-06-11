import React from "react";
import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Our Fiduciary Philosophy & Principles",
  description: "Learn about Verlak Corporation's founding origins, fiduciary values, the three pillars of trust, and our institutional governance frameworks.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
