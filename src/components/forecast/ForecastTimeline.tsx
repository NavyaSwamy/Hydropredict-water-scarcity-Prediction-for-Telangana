import type { District } from "@/lib/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { riskColors } from "@/lib/risk-colors";

export function ForecastTimeline({
  district,
  title,
}: {
  district?: District;
  title?: string;
}) {
  const months = district?.forecast2027 ?? [];

  return (
    <GlassCard className="p-6">
      <p className="text-xs uppercase tracking-[0.25em] text-[#90E0EF]/70">Future Forecast</p>
      <h2 className="text-xl font-bold text-white">
        {title ?? `${district?.name ?? "Telangana"} · 2027 Water Risk Outlook`}
      </h2>
      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {months.map((m) => {
          const c = riskColors[m.risk];
          return (
            <div
              key={m.month}
              className="min-w-[100px] flex-shrink-0 rounded-2xl border border-white/10 p-4 text-center backdrop-blur"
              style={{
                background: `linear-gradient(160deg, ${c.fill}22, #001F3F88)`,
                boxShadow: `0 0 24px ${c.glow}`,
              }}
            >
              <p className="text-xs text-[#90E0EF]/80">2027</p>
              <p className="mt-1 text-lg font-bold text-white">{m.month}</p>
              <p className="mt-2 text-xs font-semibold uppercase" style={{ color: c.stroke }}>
                {c.label}
              </p>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
