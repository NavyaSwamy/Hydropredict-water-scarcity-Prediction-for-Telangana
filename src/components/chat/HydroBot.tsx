"use client";

import { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { answerHydroBot } from "@/lib/hydrobot";
import { GlassCard } from "@/components/ui/GlassCard";
import clsx from "clsx";

const suggestions = [
  "Which district has highest water scarcity?",
  "What is groundwater trend in Nalgonda?",
  "Show high risk districts",
];

export function HydroBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    {
      role: "bot",
      text: "Namaste! I'm HydroBot — your Telangana water scarcity assistant. Ask about districts, trends, or risk levels.",
    },
  ]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }, { role: "bot", text: answerHydroBot(q) }]);
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[#0077B6]/40"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        Ask HydroBot
      </button>

      <div
        className={clsx(
          "fixed bottom-24 right-6 z-50 w-[min(100vw-2rem,380px)] transition-all duration-300",
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <GlassCard className="flex max-h-[min(70vh,520px)] flex-col overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <Bot className="h-5 w-5 text-[#00B4D8]" />
            <div>
              <p className="text-sm font-semibold text-white">HydroBot AI</p>
              <p className="text-[10px] text-[#90E0EF]/70">Telangana database · live insights</p>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={clsx(
                  "rounded-xl px-3 py-2 text-sm leading-relaxed",
                  m.role === "user"
                    ? "ml-8 bg-[#0077B6]/35 text-[#CAF0F8]"
                    : "mr-4 bg-white/5 text-[#90E0EF]",
                )}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 border-t border-white/10 px-3 py-2">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="rounded-lg border border-white/10 px-2 py-1 text-[10px] text-[#90E0EF] hover:bg-white/5"
              >
                {s}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-white/10 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Telangana water risk…"
              className="flex-1 rounded-xl border border-white/10 bg-[#001F3F]/60 px-3 py-2 text-sm text-white outline-none placeholder:text-[#90E0EF]/50 focus:border-[#00B4D8]"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#0077B6] p-2 text-white hover:bg-[#00B4D8]"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </GlassCard>
      </div>
    </>
  );
}
