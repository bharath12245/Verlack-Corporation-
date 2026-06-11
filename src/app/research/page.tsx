import React from "react";
import { Metadata } from "next";
import ResearchCentrePageClient from "./ResearchPageClient";

export const metadata: Metadata = {
  title: "Verlak Research Centre | Macro Insights & Intelligence",
  description: "Access our independent macro outlook reports, publications, CIO letters, and 12-month research calendar from the Verlak Research Centre.",
};

export default function ResearchCentrePage() {
  return <ResearchCentrePageClient />;
}
