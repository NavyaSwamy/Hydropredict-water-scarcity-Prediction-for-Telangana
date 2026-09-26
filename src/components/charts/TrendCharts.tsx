"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { District } from "@/lib/types";
import { GlassCard } from "@/components/ui/GlassCard";

export function TrendCharts({ district }: { district: District }) {
  const data = district.history;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <ChartCard title="Rainfall Evolution (mm)">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="rainGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00B4D8" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#00B4D8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#ffffff15" strokeDasharray="3 3" />
            <XAxis dataKey="year" stroke="#90E0EF" fontSize={11} />
            <YAxis stroke="#90E0EF" fontSize={11} />
            <Tooltip contentStyle={{ background: "#001F3F", border: "1px solid #0077B6" }} />
            <Area type="monotone" dataKey="rainfall" stroke="#00B4D8" fill="url(#rainGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Groundwater Decline (m)">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ffffff15" strokeDasharray="3 3" />
            <XAxis dataKey="year" stroke="#90E0EF" fontSize={11} />
            <YAxis stroke="#90E0EF" fontSize={11} />
            <Tooltip contentStyle={{ background: "#001F3F", border: "1px solid #0077B6" }} />
            <Line type="monotone" dataKey="groundwater" stroke="#90E0EF" strokeWidth={2} dot />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Temperature Rise (°C)">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ffffff15" strokeDasharray="3 3" />
            <XAxis dataKey="year" stroke="#90E0EF" fontSize={11} />
            <YAxis stroke="#90E0EF" fontSize={11} />
            <Tooltip contentStyle={{ background: "#001F3F", border: "1px solid #0077B6" }} />
            <Line type="monotone" dataKey="temperature" stroke="#f97316" strokeWidth={2} dot />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <GlassCard className="p-4">
      <p className="mb-2 text-sm font-semibold text-[#CAF0F8]">{title}</p>
      {children}
    </GlassCard>
  );
}

export function StateAggregateChart({ districts }: { districts: District[] }) {
  const data = [2021, 2022, 2023, 2024, 2025, 2026].map((year) => {
    const slice = districts.map((d) => d.history.find((h) => h.year === year)!);
    const n = slice.length;
    return {
      year,
      rainfall: Math.round((slice.reduce((a, s) => a + s.rainfall, 0) / n) * 10) / 10,
      groundwater: Math.round((slice.reduce((a, s) => a + s.groundwater, 0) / n) * 100) / 100,
      temperature: Math.round((slice.reduce((a, s) => a + s.temperature, 0) / n) * 100) / 100,
    };
  });

  return (
    <GlassCard className="p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-[#90E0EF]/70">Telangana State Aggregate</p>
      <h3 className="text-lg font-bold text-white">Multi-signal Analytics</h3>
      <div className="mt-4 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#ffffff15" strokeDasharray="3 3" />
            <XAxis dataKey="year" stroke="#90E0EF" />
            <YAxis stroke="#90E0EF" />
            <Tooltip contentStyle={{ background: "#001F3F", border: "1px solid #0077B6" }} />
            <Legend />
            <Line name="Rainfall (mm)" dataKey="rainfall" stroke="#00B4D8" strokeWidth={2} />
            <Line name="Groundwater (m)" dataKey="groundwater" stroke="#90E0EF" strokeWidth={2} />
            <Line name="Temperature (°C)" dataKey="temperature" stroke="#f97316" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}
