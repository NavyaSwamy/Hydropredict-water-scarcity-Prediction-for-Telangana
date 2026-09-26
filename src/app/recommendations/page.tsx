"use client";

import { useState } from "react";
import { districts } from "@/lib/data/districts";
import { GlassCard } from "@/components/ui/GlassCard";
import { RiskBadge } from "@/components/ui/RiskBadge";
import { CheckCircle2 } from "lucide-react";

export default function RecommendationsPage() {
  const [id, setId] = useState("nalgonda");
  const district = districts.find((d) => d.id === id)!;

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 pb-16 sm:px-6">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-[#90E0EF]/70">AI Recommendation Engine</p>
        <h1 className="text-3xl font-bold text-white">Actionable Interventions</h1>
        <p className="mt-2 text-sm text-[#90E0EF]">
          Post-prediction guidance tailored to each Telangana district&apos;s hydrological profile.
        </p>
      </header>

      <GlassCard className="p-4">
        <label className="text-xs text-[#90E0EF]/70">District</label>
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
      </GlassCard>

      <GlassCard className="p-8">
        <p className="text-sm text-[#90E0EF]/70">Predicted Risk</p>
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <RiskBadge level={district.riskLevel} className="text-sm" />
          <span className="text-2xl font-bold text-white">Score {district.riskScore}</span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#90E0EF]">{district.recommendation}</p>

        <h2 className="mt-8 text-lg font-bold text-white">Recommended Actions</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {district.actions.map((action) => (
            <li
              key={action}
              className="flex items-center gap-3 rounded-xl border border-[#00B4D8]/25 bg-[#0077B6]/15 px-4 py-3 text-sm text-[#CAF0F8]"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#22c55e]" />
              {action}
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
}
