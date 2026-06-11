import React from "react";
import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Our Private Advisory Office",
  description: "Request a private consultation with our senior wealth partners. Enforcing a minimum portfolio limit of ₹2 Crore for HNI & UHNI clients.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
