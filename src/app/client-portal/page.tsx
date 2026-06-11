import React from "react";
import { Metadata } from "next";
import ClientPortalPageClient from "./ClientPortalPageClient";

export const metadata: Metadata = {
  title: "Client Wealth Portal & Investment Sandbox",
  description: "Access Verlak Corporation's client portfolio command centre. Explore holdings and use our interactive calculators (SIP, Retirement, Risk, Tax).",
};

export default function ClientPortalPage() {
  return <ClientPortalPageClient />;
}
