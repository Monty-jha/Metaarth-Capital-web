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
  title: "Metaarth Capital — Institutional Strategy for the Sophisticated Investor",
  description: "SEBI-registered AIF Category III manager. Trust, sophistication, performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
