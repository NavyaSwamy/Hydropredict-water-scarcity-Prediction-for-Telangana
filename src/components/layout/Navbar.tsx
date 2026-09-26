"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Droplets } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Risk Map" },
  { href: "/dashboard", label: "Command Center" },
  { href: "/trends", label: "Time Machine" },
  { href: "/forecast", label: "Forecast" },
  { href: "/recommendations", label: "AI Actions" },
  { href: "/admin", label: "Admin" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#001F3F]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-[#CAF0F8]">
          <Droplets className="h-7 w-7 text-[#00B4D8]" />
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-widest">HYDROPREDICT AI</p>
            <p className="text-[10px] text-[#90E0EF]/80">Telangana Water Intelligence</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "rounded-lg px-3 py-2 text-sm transition",
                pathname === l.href
                  ? "bg-[#0077B6]/40 text-[#CAF0F8]"
                  : "text-[#90E0EF]/90 hover:bg-white/5 hover:text-white",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/dashboard"
          className="rounded-xl bg-gradient-to-r from-[#0077B6] to-[#00B4D8] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#0077B6]/30"
        >
          Live Status
        </Link>
      </div>
    </header>
  );
}
