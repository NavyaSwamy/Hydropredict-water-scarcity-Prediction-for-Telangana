"use client";

import { useMemo, useState } from "react";
import { districts } from "@/lib/data/districts";
import { GlassCard } from "@/components/ui/GlassCard";
import { TrendCharts } from "./TrendCharts";

export function TimeMachine() {
  const [year, setYear] = useState(2026);
  const [districtId, setDistrictId] = useState("nalgonda");

  const district = districts.find((d) => d.id === districtId) ?? districts[0];

  const snapshot = useMemo(
    () => district.history.find((h) => h.year === year) ?? district.history[district.history.length - 1],
    [district, year],
  );

  return (
    <div className="space-y-6">
      <GlassCard className="p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[#90E0EF]/70">Time Machine</p>
        <h2 className="text-2xl font-bold text-white">Historical Water Evolution</h2>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <div className="min-w-[240px] flex-1">
            <label className="text-xs text-[#90E0EF]/70">District</label>
            <select
              value={districtId}
              onChange={(e) => setDistrictId(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-[#001F3F]/80 px-3 py-2 text-sm text-white"
            >
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
          <div className="min-w-[280px] flex-[2]">
            <div className="mb-2 flex justify-between text-xs text-[#90E0EF]">
              <span>2021</span>
              <span className="font-semibold text-[#00B4D8]">{year}</span>
              <span>2026</span>
            </div>
            <input
              type="range"
              min={2021}
              max={2026}
              step={1}
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="w-full accent-[#00B4D8]"
            />
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Stat year={year} label="Rainfall" value={`${snapshot.rainfall} mm`} />
          <Stat year={year} label="Groundwater" value={`${snapshot.groundwater} m`} />
          <Stat year={year} label="Temperature" value={`${snapshot.temperature}°C`} />
        </div>
      </GlassCard>
      <TrendCharts district={district} />
    </div>
  );
}

function Stat({ year, label, value }: { year: number; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-xs text-[#90E0EF]/70">
        {label} · {year}
      </p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  );
}
