export type RiskLevel = "low" | "medium" | "high" | "critical";

export type Trend = "increasing" | "decreasing" | "stable";

export interface YearlyMetrics {
  year: number;
  rainfall: number;
  groundwater: number;
  temperature: number;
}

export interface MonthlyForecast {
  month: string;
  risk: RiskLevel;
}

export interface District {
  id: string;
  name: string;
  rainfall: number;
  temperature: number;
  groundwater: number;
  riskScore: number;
  riskLevel: RiskLevel;
  recommendation: string;
  waterStressIndex: number;
  groundwaterHealth: "Excellent" | "Good" | "Moderate" | "Poor" | "Critical";
  rainfallTrend: Trend;
  temperatureTrend: Trend;
  mapX: number;
  mapY: number;
  history: YearlyMetrics[];
  forecast2027: MonthlyForecast[];
  actions: string[];
}

export interface AlertItem {
  id: string;
  severity: "warning" | "critical" | "info";
  title: string;
  detail: string;
  districtId?: string;
  timestamp: string;
}
