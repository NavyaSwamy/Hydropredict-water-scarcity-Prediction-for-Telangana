import type { District } from "@/lib/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { RiskBadge } from "@/components/ui/RiskBadge";
import { TrendingDown, TrendingUp, Minus } from "lucide-react";

export function DigitalTwin({ district }: { district: District }) {
  return (
    <GlassCard className="overflow-hidden p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-[#90E0EF]/70">District Digital Twin</p>
      <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
        {district.name.toUpperCase()} DIGITAL TWIN
      </h1>
      <p className="mt-1 text-sm text-[#90E0EF]">AI monitoring profile · Telangana node</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <TwinMetric label="Water Stress Index" value={`${district.waterStressIndex}%`} highlight />
        <TwinMetric label="Groundwater Health" value={district.groundwaterHealth} />
        <TwinMetric label="Rainfall Trend" value={district.rainfallTrend} icon="rain" />
        <TwinMetric label="Temperature Trend" value={district.temperatureTrend} icon="temp" />
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-xs uppercase text-[#90E0EF]/70">Risk Level</p>
          <div className="mt-2">
            <RiskBadge level={district.riskLevel} className="text-sm" />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function TwinMetric({
  label,
  value,
  highlight,
  icon,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  icon?: "rain" | "temp";
}) {
  const TrendIcon =
    icon === "rain"
      ? value === "decreasing"
        ? TrendingDown
        : value === "increasing"
          ? TrendingUp
          : Minus
      : icon === "temp"
        ? value === "increasing"
          ? TrendingUp
          : value === "decreasing"
            ? TrendingDown
            : Minus
        : null;

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-wide text-[#90E0EF]/70">{label}</p>
      <div className="mt-2 flex items-center gap-2">
        {TrendIcon && <TrendIcon className="h-4 w-4 text-[#00B4D8]" />}
        <p className={highlight ? "text-2xl font-bold text-[#00B4D8]" : "text-lg font-semibold capitalize text-white"}>
          {value}
        </p>
      </div>
    </div>
  );
}
