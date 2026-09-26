import { districts, platformStats } from "@/lib/data/districts";

export function answerHydroBot(query: string): string {
  const q = query.toLowerCase().trim();
  if (!q) return "Ask me about Telangana districts, groundwater, or risk levels.";

  if (q.includes("highest") || q.includes("most scarce") || q.includes("worst")) {
    const worst = [...districts].sort((a, b) => b.riskScore - a.riskScore)[0];
    return `${worst.name} currently shows the highest water scarcity stress (Risk Score ${worst.riskScore}, ${worst.riskLevel.toUpperCase()}). Groundwater: ${worst.groundwater} m, rainfall ${worst.rainfall} mm.`;
  }

  if (q.includes("high risk") || q.includes("high-risk")) {
    const high = districts.filter((d) => d.riskLevel === "high" || d.riskLevel === "critical");
    const names = high.map((d) => d.name).slice(0, 10).join(", ");
    return `There are ${high.length} high/critical districts in Telangana. Top alerts include: ${names}${high.length > 10 ? "…" : ""}. Open the Risk Map for live detail.`;
  }

  if (q.includes("critical")) {
    const crit = districts.filter((d) => d.riskLevel === "critical");
    return `Critical districts (${crit.length}): ${crit.map((d) => d.name).join(", ") || "none"}. Model accuracy: ${platformStats.modelAccuracy}%.`;
  }

  const district = districts.find(
    (d) => q.includes(d.id.replace(/-/g, " ")) || q.includes(d.name.toLowerCase()),
  );

  if (district && (q.includes("groundwater") || q.includes("trend"))) {
    const h = district.history;
    const delta = h[h.length - 1].groundwater - h[0].groundwater;
    return `${district.name} groundwater trend (2021→2026): ${h[0].groundwater} m to ${h[h.length - 1].groundwater} m (${delta > 0 ? "+" : ""}${delta.toFixed(2)} m). Health: ${district.groundwaterHealth}. ${district.recommendation}`;
  }

  if (district) {
    return `${district.name}: Rainfall ${district.rainfall} mm, Temp ${district.temperature}°C, Groundwater ${district.groundwater} m. Risk: ${district.riskLevel.toUpperCase()} (${district.riskScore}). AI: ${district.recommendation}`;
  }

  if (q.includes("accuracy") || q.includes("model")) {
    return `HydroPredict AI model accuracy on Telangana hold-out data: ${platformStats.modelAccuracy}%. ${platformStats.totalDistricts} districts analyzed.`;
  }

  if (q.includes("average") && q.includes("groundwater")) {
    return `Statewide average groundwater depth: ${platformStats.avgGroundwater} m across ${platformStats.totalDistricts} Telangana districts.`;
  }

  return `I can answer about Telangana districts (e.g. Nalgonda groundwater trend), high-risk areas, or model accuracy. Try: "Which district has highest water scarcity?"`;
}
