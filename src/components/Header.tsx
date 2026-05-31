"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/data";
import Logo from "@/components/Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 bg-[rgba(244,235,215,0.94)] backdrop-blur-sm border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14 py-4 grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-10">
        <Link href="/" className="flex items-center gap-3.5">
          <span className="w-12 h-12 grid place-items-center">
            <Logo variant="light" />
          </span>
          <span className="flex flex-col gap-1.5 leading-none">
            <span className="font-display text-[14px] sm:text-[16px] tracking-[0.01em] leading-[0.94] text-ink">
              UNITED
              <br />
              PEOPLE&apos;S FRONT
            </span>
            <span className="hidden sm:block font-mono text-[10px] tracking-[0.16em] uppercase text-saffron-deep">
              United People&apos;s Front · Est. 2026
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="list-none flex justify-center gap-9">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="font-condensed text-[14px] font-medium tracking-[0.18em] uppercase text-ink py-1.5 relative after:content-[''] after:absolute after:inset-s-0 after:inset-e-0 after:bottom-0 after:h-0.5 after:bg-saffron after:scale-x-0 after:origin-start after:transition-transform after:duration-250 hover:text-saffron-deep hover:after:scale-x-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 justify-self-end lg:justify-self-auto">
          <Link
            href="/report-issue"
            className="hidden sm:inline-flex bg-ink text-paper font-condensed text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] sm:tracking-[0.2em] uppercase px-3.5 py-[9px] sm:px-[22px] sm:py-3 border-2 border-ink transition-all duration-150 hover:bg-saffron-deep hover:border-saffron-deep hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-ink)]"
          >
            Report Issue
          </Link>

          <button
            type="button"
            className="lg:hidden inline-flex h-12 w-12 flex-col items-center justify-center gap-1.5 border-2 border-ink bg-paper text-ink transition-colors duration-150 hover:bg-saffron-2"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`${menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"} lg:hidden overflow-hidden border-t-2 border-ink bg-[rgba(244,235,215,0.98)] transition-all duration-200`}
      >
        <nav aria-label="Mobile Primary" className="mx-auto max-w-7xl px-5 sm:px-8 py-4">
          <ul className="list-none grid gap-3">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="block font-condensed text-[14px] font-semibold tracking-[0.18em] uppercase text-ink border-2 border-ink bg-paper px-4 py-3"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/report-issue"
                className="block font-condensed text-[14px] font-semibold tracking-[0.18em] uppercase text-paper border-2 border-ink bg-ink px-4 py-3"
                onClick={() => setMenuOpen(false)}
              >
                Report Issue
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
