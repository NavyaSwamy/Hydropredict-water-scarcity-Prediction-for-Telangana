import { notFound } from "next/navigation";
import { districtById } from "@/lib/data/districts";
import { DigitalTwin } from "@/components/district/DigitalTwin";
import { TrendCharts } from "@/components/charts/TrendCharts";
import { ForecastTimeline } from "@/components/forecast/ForecastTimeline";
import Link from "next/link";

export function generateStaticParams() {
  return [...districtById.keys()].map((id) => ({ id }));
}

export default async function DistrictPage({ params }: PageProps<"/district/[id]">) {
  const { id } = await params;
  const district = districtById.get(id);
  if (!district) notFound();

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 pb-16 sm:px-6">
      <Link href="/map" className="text-sm text-[#00B4D8] hover:underline">
        ← Back to Risk Map
      </Link>
      <DigitalTwin district={district} />
      <TrendCharts district={district} />
      <ForecastTimeline district={district} />
    </div>
  );
}
