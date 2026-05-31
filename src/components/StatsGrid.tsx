"use client";

import React from "react";
import { STAT_ITEMS } from "@/constants/data";

interface StatsGridLayoutProps {
  loading?: boolean;
}

function StatsGridLayout({ loading }: StatsGridLayoutProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[18px] border-t border-[rgba(26,17,8,0.2)] pt-[22px] w-full">
      {STAT_ITEMS.map((item, idx) => {
        let borderClass = "";
        if (idx === 0 || idx === 2) {
          borderClass = "border-e border-[rgba(26,17,8,0.12)]";
        } else if (idx === 1) {
          borderClass = "lg:border-e border-[rgba(26,17,8,0.12)] border-e-0 lg:border-e-[rgba(26,17,8,0.12)]";
        }

        return (
          <div key={item.label} className={`flex flex-col gap-1.5 pe-[18px] ${borderClass}`}>
            <div className="flex items-center gap-2">
              <strong className={`font-display text-[28px] sm:text-[36px] font-normal text-ink leading-none ${loading ? "opacity-60" : ""}`}>
                {item.value}
              </strong>
            </div>
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-3">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function StatsGrid() {
  return <StatsGridLayout />;
}

export function StatsGridFallback() {
  return <StatsGridLayout loading />;
}
