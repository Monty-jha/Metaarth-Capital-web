"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="mt-4 bg-gradient-to-b from-[#fffdf5] to-[#fff7d6]">
      <div className="section py-8 md:py-8 grid gap-6 md:gap-8 md:grid-cols-12 items-start">
        <motion.div
          className="md:col-span-4 flex flex-col items-start -mt-6 md:-mt-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" aria-label="Go to home" className="inline-block">
            <div className="relative h-24 w-24 md:h-36 md:w-48">
              <Image src="/logo.png" alt="Logo" fill sizes="280px" style={{ objectFit: "contain" }} priority={true} />
            </div>
          </Link>
          <div className="h-1 w-14 bg-[var(--accent)] rounded-full mt-1" />
          <p className="muted mt-0 text-[15px] leading-snug max-w-xs">Professional investment management for Ultra-HNIs and Family Offices.</p>
        </motion.div>

        <motion.div
          className="md:col-span-5 grid grid-cols-2 gap-x-8 gap-y-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <div>
            <div className="font-semibold">Navigation</div>
            <div className="mt-2 grid text-sm">
              <Link href="/about" className="transition-colors hover:text-[var(--foreground)]">About</Link>
              <Link href="/why-aif" className="transition-colors hover:text-[var(--foreground)]">AIF</Link>
              <Link href="/performance" className="transition-colors hover:text-[var(--foreground)]">Performance</Link>
              <Link href="/insights" className="transition-colors hover:text-[var(--foreground)]">Insights</Link>
            </div>
          </div>
          <div>
            <div className="font-semibold">More</div>
            <div className="mt-2 grid text-sm">
              <Link href="/philosophy" className="transition-colors hover:text-[var(--foreground)]">Philosophy</Link>
              <Link href="/journey" className="transition-colors hover:text-[var(--foreground)]">Investor Journey</Link>
              <Link href="/contact" className="transition-colors hover:text-[var(--foreground)]">Contact</Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-[15px] space-y-1">
            <p className="muted">Metaarth Capital
            Office Space No. Part 8 and 9, Saran Chamber- 2, Lucknow- 226001.</p>
            <p className="muted">+91 9839906754,+91 8104958203</p>
            <p className="muted">metaarthfinserve@gmail.com</p>
          </div>
        </motion.div>
      </div>
      <div className="section py-3 text-xs muted relative">
        © {new Date().getFullYear()} Metaarth Capital. All rights reserved. Designed & Developed by Microdigitall Team.
        {/* Social icons bottom-right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 text-[var(--accent)]">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="opacity-90 hover:opacity-100 transition-opacity icon-shine">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.08V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.45V23h-4V8.5z"/></svg>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="opacity-90 hover:opacity-100 transition-opacity icon-shine">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.54 1.57-1.4 1.89-2.42-.83.5-1.75.86-2.72 1.06a4.27 4.27 0 0 0-7.28 3.9A12.1 12.1 0 0 1 3.15 4.9a4.26 4.26 0 0 0 1.32 5.69 4.24 4.24 0 0 1-1.93-.53v.05c0 2.07 1.47 3.8 3.42 4.2-.36.1-.74.16-1.13.16-.28 0-.55-.03-.82-.08.55 1.72 2.16 2.97 4.07 3a8.58 8.58 0 0 1-5.3 1.82c-.34 0-.68-.02-1.02-.06A12.09 12.09 0 0 0 8.29 21c7.87 0 12.18-6.52 12.18-12.18l-.01-.56A8.7 8.7 0 0 0 24 5.1c-.86.38-1.8.64-2.77.75z"/></svg>
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="opacity-90 hover:opacity-100 transition-opacity icon-shine">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.17 1.8.17v2h-1c-1 0-1.3.63-1.3 1.3V12h2.2l-.35 3h-1.85v7A10 10 0 0 0 22 12z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}


