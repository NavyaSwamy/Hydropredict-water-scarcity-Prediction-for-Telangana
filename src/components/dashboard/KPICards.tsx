"use client";

import { platformStats } from "@/lib/data/districts";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MapPin, AlertTriangle, Skull, Waves, Target } from "lucide-react";

const items = [
  {
    label: "Total Districts Analyzed",
    value: platformStats.totalDistricts,
    decimals: 0,
    suffix: "",
    icon: MapPin,
    accent: "#00B4D8",
  },
  {
    label: "High Risk Districts",
    value: platformStats.highRisk,
    decimals: 0,
    suffix: "",
    icon: AlertTriangle,
    accent: "#f97316",
  },
  {
    label: "Critical Districts",
    value: platformStats.critical,
    decimals: 0,
    suffix: "",
    icon: Skull,
    accent: "#ef4444",
  },
  {
    label: "Average Groundwater",
    value: platformStats.avgGroundwater,
    decimals: 1,
    suffix: " m",
    icon: Waves,
    accent: "#90E0EF",
  },
  {
    label: "Model Accuracy",
    value: platformStats.modelAccuracy,
    decimals: 2,
    suffix: "%",
    icon: Target,
    accent: "#22c55e",
  },
];

export function KPICards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <GlassCard key={item.label} className="p-4 transition hover:-translate-y-0.5 hover:border-[#00B4D8]/30">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs uppercase tracking-wide text-[#90E0EF]/70">{item.label}</p>
            <item.icon className="h-4 w-4" style={{ color: item.accent }} />
          </div>
          <p className="text-3xl font-bold text-white">
            <AnimatedCounter value={item.value} decimals={item.decimals} suffix={item.suffix} />
          </p>
        </GlassCard>
      ))}
    </div>
  );
}
