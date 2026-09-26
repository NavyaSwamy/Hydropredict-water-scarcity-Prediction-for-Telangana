"use client";

import { useState } from "react";
import { districts } from "@/lib/data/districts";
import { GlassCard } from "@/components/ui/GlassCard";
import { RiskBadge } from "@/components/ui/RiskBadge";

export default function AdminPage() {
  const [query, setQuery] = useState("");

  const filtered = districts.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 pb-16 sm:px-6">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-[#90E0EF]/70">Admin Panel</p>
        <h1 className="text-3xl font-bold text-white">Telangana Data Management</h1>
        <p className="mt-2 text-sm text-[#90E0EF]">
          Demo CRUD view for district hydrology records (read-only sample dataset).
        </p>
      </header>

      <GlassCard className="p-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search district…"
          className="w-full rounded-xl border border-white/10 bg-[#001F3F]/60 px-4 py-2 text-sm text-white outline-none focus:border-[#00B4D8]"
        />
      </GlassCard>

      <GlassCard className="overflow-x-auto p-0">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-white/10 bg-white/5 text-xs uppercase text-[#90E0EF]/70">
            <tr>
              <th className="px-4 py-3">District</th>
              <th className="px-4 py-3">Rainfall</th>
              <th className="px-4 py-3">Groundwater</th>
              <th className="px-4 py-3">Temp</th>
              <th className="px-4 py-3">Risk</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={d.id} className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3 font-medium text-white">{d.name}</td>
                <td className="px-4 py-3 text-[#90E0EF]">{d.rainfall} mm</td>
                <td className="px-4 py-3 text-[#90E0EF]">{d.groundwater} m</td>
                <td className="px-4 py-3 text-[#90E0EF]">{d.temperature}°C</td>
                <td className="px-4 py-3">
                  <RiskBadge level={d.riskLevel} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
    </div>
  );
}
