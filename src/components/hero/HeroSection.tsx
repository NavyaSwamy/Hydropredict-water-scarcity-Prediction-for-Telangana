"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { platformStats } from "@/lib/data/districts";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#00B4D8]">
          Telangana · AI Water Intelligence
        </p>
        <h1 className="bg-gradient-to-br from-white via-[#CAF0F8] to-[#90E0EF] bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-6xl md:text-7xl">
          HYDROPREDICT AI
        </h1>
        <p className="mt-4 text-lg text-[#90E0EF] sm:text-xl">
          Predicting Water Scarcity
          <br />
          Before It Becomes a Crisis
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[#90E0EF]/80">
          Predicting Tomorrow&apos;s Water Crisis Today — rainfall, groundwater, and temperature
          fused into district-level risk for all of Telangana.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#CAF0F8]">
          <HeroStat value={platformStats.modelAccuracy} suffix="%" label="Prediction Accuracy" decimals={2} />
          <HeroStat value={platformStats.totalDistricts} suffix="+" label="Districts Analyzed" />
          <span className="rounded-full border border-[#00B4D8]/40 bg-[#0077B6]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
            AI-Powered Risk Assessment
          </span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/map"
            className="rounded-2xl bg-gradient-to-r from-[#0077B6] to-[#00B4D8] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#0077B6]/40 transition hover:scale-[1.02]"
          >
            Explore Dashboard
          </Link>
          <Link
            href="/dashboard"
            className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-[#CAF0F8] backdrop-blur hover:bg-white/10"
          >
            Command Center
          </Link>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 200 140" className="h-[min(55vh,420px)] w-auto animate-pulse">
          <path
            d="M24 36 C36 18, 70 14, 104 22 C138 30, 156 48, 164 68 C172 88, 156 108, 124 118 C92 128, 56 124, 36 104 C16 84, 12 56, 24 36 Z"
            fill="none"
            stroke="#00B4D8"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}

function HeroStat({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  return (
    <div>
      <p className="text-2xl font-bold text-white">
        <AnimatedCounter value={value} suffix={suffix} decimals={decimals} />
      </p>
      <p className="text-xs text-[#90E0EF]/70">{label}</p>
    </div>
  );
}
