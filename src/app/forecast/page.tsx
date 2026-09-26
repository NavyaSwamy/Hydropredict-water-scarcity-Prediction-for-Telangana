"use client";

import { useState } from "react";
import { districts } from "@/lib/data/districts";
import { ForecastTimeline } from "@/components/forecast/ForecastTimeline";
import { GlassCard } from "@/components/ui/GlassCard";
import { RiskBadge } from "@/components/ui/RiskBadge";

export default function ForecastPage() {
  const [id, setId] = useState("nalgonda");
  const district = districts.find((d) => d.id === id)!;

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 pb-16 sm:px-6">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-[#90E0EF]/70">Future Forecasting</p>
        <h1 className="text-3xl font-bold text-white">2027 Scarcity Outlook</h1>
      </header>

      <GlassCard className="p-4">
        <label className="text-xs text-[#90E0EF]/70">Select Telangana District</label>
        <select
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="mt-2 w-full max-w-md rounded-xl border border-white/10 bg-[#001F3F]/80 px-3 py-2 text-sm text-white"
        >
          {districts.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-sm text-[#90E0EF]">Current risk:</span>
          <RiskBadge level={district.riskLevel} />
        </div>
      </GlassCard>

      <ForecastTimeline district={district} />
    </div>
  );
}
