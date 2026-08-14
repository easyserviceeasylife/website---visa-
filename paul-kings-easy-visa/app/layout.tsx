import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "@/home-page/hero/HeroSection.css";
import "@/home-page/how-we-help/HowWeHelpSection.css";
import "@/home-page/how-it-works/HowItWorksSection.css";
import "@/home-page/client-stories/ClientStoriesSection.css";
import "@/home-page/meet-paul/MeetPaulSection.css";
import "@/home-page/faq/FAQSection.css";
import "@/home-page/contact/ContactSection.css";
import { business as siteConfig, siteUrl } from "@/data/business";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  keywords: [
    "Paul Kings Easy Visa",
    "visa services Pattaya",
    "UK visa Thailand",
    "Australia visa Thailand",
    "Europe visa Thailand",
    "British passport renewal Thailand",
    "legal document services Pattaya",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
