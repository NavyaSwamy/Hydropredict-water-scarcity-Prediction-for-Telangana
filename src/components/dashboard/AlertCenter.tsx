import { alerts } from "@/lib/data/alerts";
import { GlassCard } from "@/components/ui/GlassCard";
import { AlertTriangle, Info, Skull } from "lucide-react";
import clsx from "clsx";

const iconMap = {
  warning: AlertTriangle,
  critical: Skull,
  info: Info,
};

export function AlertCenter() {
  return (
    <GlassCard className="p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-[#90E0EF]/70">Smart Alert Center</p>
      <h3 className="mt-1 text-lg font-bold text-white">Live Telangana Warnings</h3>
      <ul className="mt-4 space-y-3">
        {alerts.map((a) => {
          const Icon = iconMap[a.severity];
          return (
            <li
              key={a.id}
              className={clsx(
                "rounded-xl border p-3",
                a.severity === "critical" && "border-red-500/30 bg-red-500/10",
                a.severity === "warning" && "border-amber-500/30 bg-amber-500/10",
                a.severity === "info" && "border-[#00B4D8]/30 bg-[#0077B6]/10",
              )}
            >
              <div className="flex gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#CAF0F8]" />
                <div>
                  <p className="text-sm font-semibold text-white">⚠️ {a.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#90E0EF]">{a.detail}</p>
                  <p className="mt-2 text-[10px] text-[#90E0EF]/60">{a.timestamp}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </GlassCard>
  );
}
