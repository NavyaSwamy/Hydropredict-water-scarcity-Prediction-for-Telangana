import clsx from "clsx";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/10 bg-white/5 shadow-[0_8px_32px_rgba(0,31,63,0.35)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
