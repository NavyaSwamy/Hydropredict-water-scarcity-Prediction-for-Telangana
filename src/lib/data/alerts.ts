import type { AlertItem } from "@/lib/types";

export const alerts: AlertItem[] = [
  {
    id: "a1",
    severity: "warning",
    title: "Groundwater dropped 12%",
    detail: "Narayanpet block shows accelerated borewell depth increase vs 2025 baseline.",
    districtId: "narayanpet",
    timestamp: "2 min ago",
  },
  {
    id: "a2",
    severity: "warning",
    title: "Temperature increased 2°C",
    detail: "Hyderabad urban heat island effect — weekly mean up 2.1°C.",
    districtId: "hyderabad",
    timestamp: "8 min ago",
  },
  {
    id: "a3",
    severity: "critical",
    title: "Water Scarcity Risk changed: MEDIUM → HIGH",
    detail: "Nalgonda district risk upgraded after monsoon deficit simulation.",
    districtId: "nalgonda",
    timestamp: "15 min ago",
  },
  {
    id: "a4",
    severity: "info",
    title: "Mission Kakatiya tank levels stable",
    detail: "Warangal cluster reporting 78% of design capacity.",
    districtId: "warangal",
    timestamp: "32 min ago",
  },
  {
    id: "a5",
    severity: "critical",
    title: "Critical stress in Jogulamba Gadwal",
    detail: "Water Stress Index crossed 84% — priority intervention flagged.",
    districtId: "jogulamba-gadwal",
    timestamp: "1 hr ago",
  },
];
