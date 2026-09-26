"use client";

import { useMemo, useState } from "react";
import { districts } from "@/lib/data/districts";
import type { District } from "@/lib/types";
import { riskColors } from "@/lib/risk-colors";
import { DistrictPanel } from "./DistrictPanel";
import { GlassCard } from "@/components/ui/GlassCard";
import clsx from "clsx";

export function TelanganaMap({ className, compact }: { className?: string; compact?: boolean }) {
  const [selected, setSelected] = useState<District | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const legend = useMemo(
    () => (["low", "medium", "high", "critical"] as const).map((k) => ({ k, ...riskColors[k] })),
    [],
  );

  return (
    <div className={clsx("relative", className)}>
      <GlassCard className={clsx("relative overflow-hidden p-4 sm:p-6", compact ? "min-h-[420px]" : "min-h-[620px]")}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#90E0EF]/70">
              Interactive Telangana
            </p>
            <h2 className="text-xl font-bold text-white sm:text-2xl">District Water Risk Map</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {legend.map((l) => (
              <span
                key={l.k}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-wide text-[#CAF0F8]"
              >
                <span className="h-2 w-2 rounded-full" style={{ background: l.fill }} />
                {l.label}
              </span>
            ))}
          </div>
        </div>

        <svg
          viewBox="0 0 100 72"
          className="mx-auto w-full max-w-4xl"
          role="img"
          aria-label="Telangana district risk map"
        >
          <defs>
            <linearGradient id="mapGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0077B6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.15" />
            </linearGradient>
            <filter id="pulseGlow">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M12 18 C18 8, 35 6, 52 10 C68 14, 78 22, 82 34 C86 46, 78 58, 62 66 C44 72, 28 70, 18 58 C8 46, 6 30, 12 18 Z"
            fill="url(#mapGlow)"
            stroke="#00B4D8"
            strokeOpacity="0.45"
            strokeWidth="0.6"
          />

          {districts.map((d) => {
            const c = riskColors[d.riskLevel];
            const active = hovered === d.id || selected?.id === d.id;
            return (
              <g key={d.id}>
                <circle
                  cx={d.mapX}
                  cy={d.mapY}
                  r={active ? 2.8 : 2.2}
                  fill={c.fill}
                  stroke={c.stroke}
                  strokeWidth={0.35}
                  filter="url(#pulseGlow)"
                  className="cursor-pointer transition-all"
                  style={{
                    opacity: active ? 1 : 0.88,
                    boxShadow: c.glow,
                  }}
                  onMouseEnter={() => setHovered(d.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(d)}
                />
                {(active || compact) && (
                  <text
                    x={d.mapX}
                    y={d.mapY - 3.2}
                    textAnchor="middle"
                    className="pointer-events-none select-none fill-[#CAF0F8] text-[2px] font-medium"
                  >
                    {d.name.split(" ")[0]}
                  </text>
                )}
              </g>
            );
          })}

          <text x="50" y="68" textAnchor="middle" className="fill-[#90E0EF]/60 text-[2.5px]">
            Telangana · 33 Districts · Live AI Risk Layer
          </text>
        </svg>

        <p className="mt-3 text-center text-xs text-[#90E0EF]/70">
          Click any district — try <button type="button" className="text-[#00B4D8] underline" onClick={() => setSelected(districts.find((d) => d.id === "nalgonda") ?? null)}>Nalgonda</button>
        </p>
      </GlassCard>

      <DistrictPanel district={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
