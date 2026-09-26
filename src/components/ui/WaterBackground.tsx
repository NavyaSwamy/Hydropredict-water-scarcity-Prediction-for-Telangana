"use client";

export function WaterBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden bg-[#001F3F]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,#0077B644,transparent_50%),radial-gradient(ellipse_at_80%_0%,#00B4D833,transparent_45%),radial-gradient(ellipse_at_50%_100%,#001F3F,transparent_60%)]" />
      <div className="water-grid absolute inset-0 opacity-30" />
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="water-particle absolute h-1 w-1 rounded-full bg-[#90E0EF]/60"
          style={{
            left: `${(i * 17) % 100}%`,
            animationDelay: `${i * 0.35}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}
