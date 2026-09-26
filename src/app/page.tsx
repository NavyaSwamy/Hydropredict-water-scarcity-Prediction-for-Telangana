import { HeroSection } from "@/components/hero/HeroSection";
import { TelanganaMap } from "@/components/map/TelanganaMap";
import { KPICards } from "@/components/dashboard/KPICards";
import { AlertCenter } from "@/components/dashboard/AlertCenter";
import { ForecastTimeline } from "@/components/forecast/ForecastTimeline";
import { districts } from "@/lib/data/districts";

export default function Home() {
  const nalgonda = districts.find((d) => d.id === "nalgonda")!;

  return (
    <>
      <HeroSection />
      <section id="map" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <TelanganaMap />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#90E0EF]/70">Statewide KPIs</p>
          <h2 className="text-2xl font-bold text-white">Analytics at a Glance</h2>
        </div>
        <KPICards />
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-2">
        <AlertCenter />
        <ForecastTimeline district={nalgonda} title="Nalgonda · 2027 Forecast Preview" />
      </section>
    </>
  );
}
