import type { District, RiskLevel } from "@/lib/types";

function riskFromScore(score: number): RiskLevel {
  if (score >= 80) return "critical";
  if (score >= 65) return "high";
  if (score >= 45) return "medium";
  return "low";
}

function healthFromGroundwater(gw: number): District["groundwaterHealth"] {
  if (gw > -2) return "Excellent";
  if (gw > -4) return "Good";
  if (gw > -6) return "Moderate";
  if (gw > -8) return "Poor";
  return "Critical";
}

function history(
  baseRain: number,
  baseGw: number,
  baseTemp: number,
): District["history"] {
  return [2021, 2022, 2023, 2024, 2025, 2026].map((year, i) => ({
    year,
    rainfall: Math.round((baseRain - i * 2.1 + (i % 2) * 4) * 100) / 100,
    groundwater: Math.round((baseGw - i * 0.35) * 100) / 100,
    temperature: Math.round((baseTemp + i * 0.28) * 100) / 100,
  }));
}

const forecastTemplate: District["forecast2027"] = [
  { month: "Jan", risk: "medium" },
  { month: "Feb", risk: "high" },
  { month: "Mar", risk: "high" },
  { month: "Apr", risk: "critical" },
  { month: "May", risk: "critical" },
  { month: "Jun", risk: "high" },
];

type Seed = {
  id: string;
  name: string;
  mapX: number;
  mapY: number;
  rainfall: number;
  temperature: number;
  groundwater: number;
  riskScore: number;
  recommendation: string;
  rainfallTrend: District["rainfallTrend"];
  temperatureTrend: District["temperatureTrend"];
  actions?: string[];
};

const seeds: Seed[] = [
  { id: "adilabad", name: "Adilabad", mapX: 42, mapY: 12, rainfall: 48.2, temperature: 26.8, groundwater: -4.2, riskScore: 52, recommendation: "Community rainwater harvesting in tribal mandals.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "komaram-bheem", name: "Komaram Bheem Asifabad", mapX: 38, mapY: 18, rainfall: 52.1, temperature: 26.4, groundwater: -3.9, riskScore: 48, recommendation: "Forest catchment protection and check dams.", rainfallTrend: "stable", temperatureTrend: "increasing" },
  { id: "mancherial", name: "Mancherial", mapX: 48, mapY: 16, rainfall: 44.8, temperature: 27.1, groundwater: -5.1, riskScore: 58, recommendation: "Revive seasonal tanks near Godavari belt.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "nirmal", name: "Nirmal", mapX: 36, mapY: 24, rainfall: 46.5, temperature: 27.3, groundwater: -4.8, riskScore: 55, recommendation: "Farm pond expansion under Mission Kakatiya.", rainfallTrend: "decreasing", temperatureTrend: "stable" },
  { id: "nizamabad", name: "Nizamabad", mapX: 28, mapY: 22, rainfall: 41.2, temperature: 28.0, groundwater: -5.9, riskScore: 62, recommendation: "Micro-irrigation push for paddy belt.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "jagtial", name: "Jagtial", mapX: 44, mapY: 26, rainfall: 43.7, temperature: 27.8, groundwater: -5.4, riskScore: 59, recommendation: "Groundwater recharge in upland blocks.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "rajanna-sircilla", name: "Rajanna Sircilla", mapX: 40, mapY: 30, rainfall: 39.8, temperature: 28.2, groundwater: -6.2, riskScore: 64, recommendation: "Textile cluster water recycling audit.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "karimnagar", name: "Karimnagar", mapX: 46, mapY: 32, rainfall: 38.5, temperature: 28.5, groundwater: -6.8, riskScore: 68, recommendation: "Reservoir level monitoring — Lower Manair.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "peddapalli", name: "Peddapalli", mapX: 50, mapY: 28, rainfall: 40.1, temperature: 28.1, groundwater: -6.0, riskScore: 61, recommendation: "Industrial effluent compliance checks.", rainfallTrend: "stable", temperatureTrend: "increasing" },
  { id: "jayashankar-bhupalpally", name: "Jayashankar Bhupalpally", mapX: 54, mapY: 34, rainfall: 47.3, temperature: 27.6, groundwater: -4.5, riskScore: 50, recommendation: "Watershed treatment in forest fringe.", rainfallTrend: "stable", temperatureTrend: "increasing" },
  { id: "mulugu", name: "Mulugu", mapX: 58, mapY: 38, rainfall: 55.6, temperature: 26.9, groundwater: -3.2, riskScore: 42, recommendation: "Eco-tourism linked spring conservation.", rainfallTrend: "stable", temperatureTrend: "stable" },
  { id: "bhadradri-kothagudem", name: "Bhadradri Kothagudem", mapX: 62, mapY: 44, rainfall: 58.4, temperature: 27.4, groundwater: -3.8, riskScore: 46, recommendation: "Godavari riparian buffer zones.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "khammam", name: "Khammam", mapX: 68, mapY: 48, rainfall: 51.2, temperature: 28.3, groundwater: -5.2, riskScore: 57, recommendation: "Canal lining to reduce seepage loss.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "mahabubabad", name: "Mahabubabad", mapX: 52, mapY: 42, rainfall: 49.8, temperature: 27.9, groundwater: -4.9, riskScore: 54, recommendation: "Farm bunding for moisture retention.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "hanamkonda", name: "Hanamkonda", mapX: 48, mapY: 38, rainfall: 42.6, temperature: 28.4, groundwater: -6.5, riskScore: 66, recommendation: "Urban lake desilting — Pakhal linkage.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "warangal", name: "Warangal", mapX: 52, mapY: 40, rainfall: 41.9, temperature: 28.6, groundwater: -6.7, riskScore: 67, recommendation: "Smart irrigation for cotton blocks.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "jangaon", name: "Jangaon", mapX: 44, mapY: 44, rainfall: 40.5, temperature: 28.8, groundwater: -7.0, riskScore: 70, recommendation: "Community RO backup for fluoride zones.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "siddipet", name: "Siddipet", mapX: 38, mapY: 40, rainfall: 37.2, temperature: 29.0, groundwater: -7.2, riskScore: 72, recommendation: "Mission Bhagiratha pressure optimization.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "yadadri", name: "Yadadri Bhuvanagiri", mapX: 42, mapY: 48, rainfall: 36.8, temperature: 29.2, groundwater: -7.5, riskScore: 74, recommendation: "Temple town demand-side management.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "medak", name: "Medak", mapX: 30, mapY: 36, rainfall: 35.4, temperature: 28.7, groundwater: -6.9, riskScore: 69, recommendation: "Farm pond network in drought pockets.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "sangareddy", name: "Sangareddy", mapX: 26, mapY: 42, rainfall: 34.1, temperature: 29.1, groundwater: -7.8, riskScore: 76, recommendation: "Industrial zero-liquid-discharge push.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "kamareddy", name: "Kamareddy", mapX: 32, mapY: 28, rainfall: 38.9, temperature: 28.3, groundwater: -5.7, riskScore: 60, recommendation: "Crop shift advisory for maize belt.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "medchal", name: "Medchal-Malkajgiri", mapX: 34, mapY: 46, rainfall: 33.5, temperature: 29.4, groundwater: -8.1, riskScore: 78, recommendation: "STP reuse for peripheral layouts.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "hyderabad", name: "Hyderabad", mapX: 36, mapY: 50, rainfall: 32.8, temperature: 29.8, groundwater: -8.4, riskScore: 81, recommendation: "Lake restoration — Hussain Sagar catchment.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "ranga-reddy", name: "Ranga Reddy", mapX: 32, mapY: 52, rainfall: 33.2, temperature: 29.6, groundwater: -8.0, riskScore: 79, recommendation: "Peri-urban rainwater mandates.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "vikarabad", name: "Vikarabad", mapX: 24, mapY: 50, rainfall: 36.2, temperature: 28.9, groundwater: -7.1, riskScore: 71, recommendation: "Hill stream check dams.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "nagar-kurnool", name: "Nagar Kurnool", mapX: 18, mapY: 58, rainfall: 34.8, temperature: 29.3, groundwater: -7.6, riskScore: 75, recommendation: "Krishna basin aquifer mapping.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "wanaparthy", name: "Wanaparthy", mapX: 22, mapY: 62, rainfall: 33.9, temperature: 29.5, groundwater: -7.9, riskScore: 77, recommendation: "Drip irrigation subsidy acceleration.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "mahabubnagar", name: "Mahabubnagar", mapX: 26, mapY: 60, rainfall: 35.1, temperature: 29.7, groundwater: -7.4, riskScore: 73, recommendation: "Tanka revival in rain-shadow mandals.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "jogulamba-gadwal", name: "Jogulamba Gadwal", mapX: 14, mapY: 64, rainfall: 31.5, temperature: 30.1, groundwater: -8.6, riskScore: 84, recommendation: "Critical: emergency tanker routing plan.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  { id: "narayanpet", name: "Narayanpet", mapX: 18, mapY: 66, rainfall: 30.8, temperature: 30.3, groundwater: -8.9, riskScore: 86, recommendation: "Deep aquifer monitoring — over-extraction alert.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
  {
    id: "nalgonda",
    name: "Nalgonda",
    mapX: 46,
    mapY: 56,
    rainfall: 32.59,
    temperature: 28.29,
    groundwater: -7.48,
    riskScore: 72,
    recommendation: "Groundwater recharge measures recommended.",
    rainfallTrend: "decreasing",
    temperatureTrend: "increasing",
    actions: [
      "Rainwater harvesting",
      "Groundwater recharge pits",
      "Smart irrigation",
      "Reservoir monitoring",
    ],
  },
  { id: "suryapet", name: "Suryapet", mapX: 50, mapY: 52, rainfall: 39.4, temperature: 28.7, groundwater: -6.4, riskScore: 65, recommendation: "Musi river tributary restoration.", rainfallTrend: "decreasing", temperatureTrend: "increasing" },
];

const defaultActions = [
  "Rainwater harvesting",
  "Groundwater recharge pits",
  "Smart irrigation",
  "Reservoir monitoring",
];

export const districts: District[] = seeds.map((s) => {
  const riskLevel = riskFromScore(s.riskScore);
  return {
    ...s,
    riskLevel,
    waterStressIndex: s.riskScore,
    groundwaterHealth: healthFromGroundwater(s.groundwater),
    history: history(s.rainfall, s.groundwater, s.temperature),
    forecast2027: forecastTemplate.map((f, i) => ({
      ...f,
      risk: riskFromScore(Math.min(95, s.riskScore + i * 3)) as RiskLevel,
    })),
    actions: s.actions ?? defaultActions,
  };
});

export const districtById = new Map(districts.map((d) => [d.id, d]));

export const platformStats = {
  totalDistricts: districts.length,
  modelAccuracy: 99.42,
  highRisk: districts.filter((d) => d.riskLevel === "high").length,
  critical: districts.filter((d) => d.riskLevel === "critical").length,
  avgGroundwater:
    Math.round(
      (districts.reduce((a, d) => a + d.groundwater, 0) / districts.length) * 100,
    ) / 100,
};
