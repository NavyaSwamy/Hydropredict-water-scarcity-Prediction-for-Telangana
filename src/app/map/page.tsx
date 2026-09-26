import { TelanganaMap } from "@/components/map/TelanganaMap";

export default function MapPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[#90E0EF]/70">Primary Attraction</p>
        <h1 className="text-3xl font-bold text-white">Telangana Interactive Risk Map</h1>
        <p className="mt-2 max-w-2xl text-sm text-[#90E0EF]">
          Click any of 33 districts for rainfall, groundwater, temperature, AI risk score, and
          recommendations. Optimized for Telangana-only monitoring demos.
        </p>
      </div>
      <TelanganaMap />
    </div>
  );
}
