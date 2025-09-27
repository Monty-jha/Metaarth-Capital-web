import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Transitions } from "@/components/Transitions";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HideDevButton } from "@/components/HideDevButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import React from "react";

const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://metaarth-capital-web.vercel.app'),
  title: "Metaarth Capital — Professional Investment Management for Ultra-HNIs",
  description: "SEBI-registered AIF Category III manager specializing in sophisticated wealth management for Ultra-HNIs and Family Offices.",
  keywords: "Metaarth Capital, AIF, Alternative Investment Fund, SEBI, Ultra-HNI, Family Office, Investment Management, Wealth Management",
  authors: [{ name: "Metaarth Capital" }],
  creator: "Metaarth Capital",
  publisher: "Metaarth Capital",
  robots: "index, follow",
  openGraph: {
    title: "Metaarth Capital — Professional Investment Management for Ultra-HNIs",
    description: "SEBI-registered AIF Category III manager specializing in sophisticated wealth management for Ultra-HNIs and Family Offices.",
    url: "https://metaarth-capital-web.vercel.app",
    siteName: "Metaarth Capital",
    images: [
      {
        url: "/Metaarth Circle.png",
        width: 1200,
        height: 630,
        alt: "Metaarth Capital Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metaarth Capital — Professional Investment Management for Ultra-HNIs",
    description: "SEBI-registered AIF Category III manager specializing in sophisticated wealth management for Ultra-HNIs and Family Offices.",
    images: ["/Metaarth Circle.png"],
  },
  icons: {
    icon: [
      { url: '/Metaarth Circle.png', sizes: '32x32', type: 'image/png' },
      { url: '/Metaarth Circle.png', sizes: '16x16', type: 'image/png' },
      { url: '/Metaarth Circle.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/Metaarth Circle.png', sizes: '180x180', type: 'image/png' },
      { url: '/Metaarth Circle.png', sizes: '152x152', type: 'image/png' },
      { url: '/Metaarth Circle.png', sizes: '120x120', type: 'image/png' },
    ],
    shortcut: '/Metaarth Circle.png',
    other: [
      {
        rel: 'icon',
        url: '/Metaarth Circle.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Metaarth Circle.png" type="image/png" />
        <link rel="shortcut icon" href="/Metaarth Circle.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Metaarth Circle.png" />
      </head>
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <HideDevButton />
        <ScrollToTop />
        <Navbar />
        <Transitions>
          <main>{children}</main>
        </Transitions>
        <Footer />
      </body>
    </html>
  );
}
