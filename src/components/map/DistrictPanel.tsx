"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { District } from "@/lib/types";
import { RiskBadge } from "@/components/ui/RiskBadge";
import { GlassCard } from "@/components/ui/GlassCard";
import { CloudRain, Thermometer, Waves, Sparkles, X } from "lucide-react";

export function DistrictPanel({
  district,
  onClose,
}: {
  district: District | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {district && (
        <motion.aside
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 260 }}
          className="fixed right-0 top-20 z-40 h-[calc(100vh-5rem)] w-full max-w-md border-l border-white/10 bg-[#001F3F]/90 p-5 shadow-2xl backdrop-blur-2xl sm:p-6"
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#90E0EF]/70">
                District Intelligence
              </p>
              <h2 className="text-2xl font-bold text-white">{district.name}</h2>
              <div className="mt-2">
                <RiskBadge level={district.riskLevel} />
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 text-[#90E0EF] hover:bg-white/10"
              aria-label="Close panel"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-3">
            <Metric icon={CloudRain} label="Rainfall" value={`${district.rainfall} mm`} />
            <Metric icon={Thermometer} label="Temperature" value={`${district.temperature}°C`} />
            <Metric icon={Waves} label="Groundwater" value={`${district.groundwater} m`} />
            <GlassCard className="p-4">
              <p className="text-xs uppercase tracking-wide text-[#90E0EF]/70">Risk Score</p>
              <p className="mt-1 text-3xl font-bold text-[#00B4D8]">{district.riskScore}</p>
            </GlassCard>
            <GlassCard className="p-4">
              <div className="mb-2 flex items-center gap-2 text-[#CAF0F8]">
                <Sparkles className="h-4 w-4 text-[#00B4D8]" />
                <p className="text-sm font-semibold">AI Recommendation</p>
              </div>
              <p className="text-sm leading-relaxed text-[#90E0EF]">{district.recommendation}</p>
            </GlassCard>
            <Link
              href={`/district/${district.id}`}
              className="block rounded-xl bg-gradient-to-r from-[#0077B6] to-[#00B4D8] py-3 text-center text-sm font-semibold text-white"
            >
              Open Digital Twin →
            </Link>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CloudRain;
  label: string;
  value: string;
}) {
  return (
    <GlassCard className="flex items-center gap-3 p-4">
      <div className="rounded-xl bg-[#0077B6]/30 p-2">
        <Icon className="h-5 w-5 text-[#00B4D8]" />
      </div>
      <div>
        <p className="text-xs text-[#90E0EF]/70">{label}</p>
        <p className="text-lg font-semibold text-white">{value}</p>
      </div>
    </GlassCard>
  );
}
