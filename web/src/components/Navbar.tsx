"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/philosophy", label: "Investment Philosophy" },
  { href: "/performance", label: "Performance" },
  { href: "/why-aif", label: "AIF" },
  { href: "/insights", label: "Insights" },
  { href: "/journey", label: "Journey" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#fffdf5]/85 border-b border-[color-mix(in_oklab,var(--foreground)_10%,transparent)]">
      <div className="section h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-32 md:h-14 md:w-40">
            <Image src="/logo.png" alt="Logo" fill sizes="(min-width: 768px) 160px, 128px" style={{ objectFit: "contain" }} priority={true} />
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-black px-3 py-2 rounded-md transition-colors border border-transparent hover:bg-[var(--accent)] hover:text-[#1a1300] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="lg:hidden px-3 py-2 rounded-md border" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          ☰
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t">
          <div className="section py-4 grid gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 font-semibold text-black px-3 rounded-md border border-transparent hover:bg-[var(--accent)] hover:text-[#1a1300] transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


