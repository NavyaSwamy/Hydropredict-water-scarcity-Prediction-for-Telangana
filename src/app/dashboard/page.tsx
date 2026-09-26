import { KPICards } from "@/components/dashboard/KPICards";
import { AlertCenter } from "@/components/dashboard/AlertCenter";
import { TelanganaMap } from "@/components/map/TelanganaMap";
import { StateAggregateChart } from "@/components/charts/TrendCharts";
import { districts } from "@/lib/data/districts";
import { GlassCard } from "@/components/ui/GlassCard";
import { Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 pb-16 sm:px-6">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">Command Center</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">TELANGANA LIVE WATER STATUS</h1>
        <p className="mt-2 text-sm text-[#90E0EF]">
          District risk map · groundwater · temperature · rainfall · AI alerts · prediction engine
        </p>
      </header>

      <KPICards />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <TelanganaMap compact />
        </div>
        <AlertCenter />
      </div>

      <StateAggregateChart districts={districts} />

      <GlassCard className="p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[#00B4D8]" />
          <h2 className="text-lg font-bold text-white">AI Prediction Engine</h2>
        </div>
        <p className="mt-2 text-sm text-[#90E0EF]">
          Ensemble model trained on Telangana IMD rainfall, groundwater board telemetry, and
          Landsat-derived temperature anomalies. Next refresh: simulated live stream for demo.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <MiniEngine label="Inference Latency" value="124 ms" />
          <MiniEngine label="Districts Scored" value="33 / 33" />
          <MiniEngine label="Confidence" value="99.42%" />
        </div>
      </GlassCard>
    </div>
  );
}

function MiniEngine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-[#90E0EF]/70">{label}</p>
      <p className="mt-1 text-xl font-bold text-[#00B4D8]">{value}</p>
    </div>
  );
}
