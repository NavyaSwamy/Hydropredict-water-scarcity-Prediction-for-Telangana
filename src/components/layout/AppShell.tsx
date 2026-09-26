import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { HydroBot } from "@/components/chat/HydroBot";
import { WaterBackground } from "@/components/ui/WaterBackground";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-[#CAF0F8]">
      <WaterBackground />
      <Navbar />
      <main className="relative z-10 pt-20">{children}</main>
      <HydroBot />
    </div>
  );
}
