import { TimeMachine } from "@/components/charts/TimeMachine";

export default function TrendsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[#90E0EF]/70">Historical Trends</p>
        <h1 className="text-3xl font-bold text-white">Water Time Machine</h1>
        <p className="mt-2 text-sm text-[#90E0EF]">
          Slide from 2021 to 2026 and watch rainfall, groundwater, and temperature evolve for any
          Telangana district.
        </p>
      </div>
      <TimeMachine />
    </div>
  );
}
