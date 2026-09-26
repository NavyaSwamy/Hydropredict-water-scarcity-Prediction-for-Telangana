import clsx from "clsx";
import type { RiskLevel } from "@/lib/types";
import { riskColors } from "@/lib/risk-colors";

export function RiskBadge({ level, className }: { level: RiskLevel; className?: string }) {
  const c = riskColors[level];
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        className,
      )}
      style={{
        backgroundColor: `${c.fill}22`,
        color: c.stroke,
        border: `1px solid ${c.fill}66`,
      }}
    >
      {c.label}
    </span>
  );
}
