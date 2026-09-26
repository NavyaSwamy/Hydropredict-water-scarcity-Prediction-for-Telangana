import type { RiskLevel } from "@/lib/types";

export const riskColors: Record<
  RiskLevel,
  { fill: string; stroke: string; glow: string; label: string }
> = {
  low: {
    fill: "#22c55e",
    stroke: "#86efac",
    glow: "rgba(34, 197, 94, 0.45)",
    label: "Low",
  },
  medium: {
    fill: "#eab308",
    stroke: "#fde047",
    glow: "rgba(234, 179, 8, 0.45)",
    label: "Medium",
  },
  high: {
    fill: "#f97316",
    stroke: "#fdba74",
    glow: "rgba(249, 115, 22, 0.5)",
    label: "High",
  },
  critical: {
    fill: "#ef4444",
    stroke: "#fca5a5",
    glow: "rgba(239, 68, 68, 0.55)",
    label: "Critical",
  },
};
