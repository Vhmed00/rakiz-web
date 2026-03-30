"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Monitor, Smartphone, Sun, Moon, TrendingUp, Users, Check, Bell } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

type ViewMode  = "desktop" | "mobile";
type ColorMode = "light"   | "dark";

/* ── Mock dashboard ─────────────────────────────────────────── */
function MockDashboard({
  colorMode,
  viewMode,
  isAr,
  nav,
  overview,
  revenueTrend,
  metrics,
}: {
  colorMode:    ColorMode;
  viewMode:     ViewMode;
  isAr:         boolean;
  nav:          [string, string, string, string, string];
  overview:     string;
  revenueTrend: string;
  metrics:      Array<{ label: string; value: string; delta: string }>;
}) {
  const isDark  = colorMode === "dark";
  const dir     = isAr ? "rtl" : "ltr";

  const bg      = isDark ? "bg-[#0f0f0f]"    : "bg-[#f9f9fb]";
  const surface = isDark ? "bg-[#1a1a1a]"    : "bg-white";
  const border  = isDark ? "border-white/8"  : "border-neutral-200";
  const textPri = isDark ? "text-white"       : "text-neutral-950";
  const textSec = isDark ? "text-neutral-400" : "text-neutral-500";

  const kpiIcons = [TrendingUp, Users, Check];

  return (
    <div className={`h-full w-full overflow-hidden rounded-b-xl ${bg}`} dir={dir}>
      {viewMode === "desktop" ? (
        <div className="flex h-full">

          {/* Sidebar */}
          <div className={`w-40 shrink-0 border-e ${border} ${surface} p-3 flex flex-col gap-1`}>
            <div className="mb-3 flex items-center gap-1.5 px-1">
              <span className={`flex h-5 w-5 items-center justify-center rounded-md text-[8px] font-black ${isDark ? "bg-white text-black" : "bg-neutral-950 text-white"}`}>
                R
              </span>
              <span className={`text-[10px] font-semibold ${textPri}`}>
                {isAr ? "ركيز" : "Rakiz"}
              </span>
            </div>
            {nav.map((item, i) => (
              <div
                key={item}
                className={`rounded-md px-2 py-1 text-[9px] font-medium ${
                  i === 0
                    ? isDark ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-900"
                    : textSec
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="flex-1 overflow-hidden p-4">
            <div className={`mb-3 text-[11px] font-semibold ${textPri}`}>{overview}</div>

            {/* KPI cards */}
            <div className="mb-3 grid grid-cols-3 gap-2">
              {metrics.map((m, i) => {
                const Icon = kpiIcons[i];
                return (
                  <div key={i} className={`rounded-lg border ${border} ${surface} p-2.5`}>
                    <div className="mb-1 flex items-center justify-between">
                      <Icon className={`h-3 w-3 ${textSec}`} />
                      <span className="rounded-full bg-emerald-50 px-1.5 text-[8px] font-semibold text-emerald-700">
                        {m.delta}
                      </span>
                    </div>
                    <div className={`font-mono text-sm font-bold ${textPri}`} dir="ltr">{m.value}</div>
                    <div className={`text-[8px] ${textSec}`}>{m.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Chart */}
            <div className={`rounded-lg border ${border} ${surface} p-3`}>
              <div className={`mb-2 text-[9px] font-medium ${textSec}`}>{revenueTrend}</div>
              <div className="flex items-end gap-1 h-16">
                {[40,52,48,65,58,72,68,85,80,94,88,100].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`flex-1 rounded-sm ${isDark ? "bg-white/20" : "bg-neutral-200"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mobile layout */
        <div className="h-full p-3 flex flex-col gap-2.5 overflow-hidden">
          <div className="flex items-center justify-between">
            <span className={`text-[11px] font-semibold ${textPri}`}>
              {isAr ? "ركيز" : "Rakiz CRM"}
            </span>
            <Bell className={`h-3.5 w-3.5 ${textSec}`} />
          </div>

          {metrics.map((m, i) => (
            <div key={i} className={`flex items-center justify-between rounded-xl border ${border} ${surface} px-3 py-2.5`}>
              <div>
                <div className={`text-[10px] ${textSec}`}>{m.label}</div>
                <div className={`font-mono text-sm font-bold ${textPri}`} dir="ltr">{m.value}</div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                {m.delta}
              </span>
            </div>
          ))}

          <div className={`flex-1 rounded-xl border ${border} ${surface} p-2.5`}>
            <div className={`mb-1.5 text-[9px] font-medium ${textSec}`}>{revenueTrend}</div>
            <div className="flex items-end gap-0.5 h-10">
              {[40,55,48,70,60,78,68,88].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-sm ${isDark ? "bg-white/20" : "bg-neutral-200"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Browser chrome ─────────────────────────────────────────── */
function BrowserFrame({
  viewMode,
  colorMode,
  children,
}: {
  viewMode:  ViewMode;
  colorMode: ColorMode;
  children:  React.ReactNode;
}) {
  const isDark  = colorMode === "dark";
  const chrome  = isDark ? "bg-[#1a1a1a] border-white/10" : "bg-neutral-50 border-neutral-200";

  return (
    <div
      className={`mx-auto overflow-hidden rounded-2xl border shadow-xl ${chrome} ${
        viewMode === "mobile" ? "w-[220px]" : "w-full"
      }`}
    >
      {/* Chrome bar — always LTR regardless of page language */}
      <div className={`flex items-center gap-2 border-b px-3 py-2.5 ${chrome}`} dir="ltr">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div
          className={`mx-auto flex-1 max-w-xs rounded-md border px-3 py-1 text-center ${
            isDark
              ? "bg-[#2a2a2a] border-white/8 text-neutral-500"
              : "bg-white border-neutral-200 text-neutral-400"
          }`}
        >
          <span className="text-[10px]">app.rakiz.om/dashboard</span>
        </div>
      </div>

      <div className={viewMode === "mobile" ? "h-72" : "h-64"}>
        {children}
      </div>
    </div>
  );
}

/* ── Main section ───────────────────────────────────────────── */
export default function Playground() {
  const { t, isAr } = useLanguage();
  const p = t.playground;

  const [viewMode,  setViewMode]  = useState<ViewMode>("desktop");
  const [colorMode, setColorMode] = useState<ColorMode>("light");
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 py-24 sm:py-32">
      <div className="divider mx-auto max-w-6xl mb-20" />
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-400">
            {p.badge}
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            {p.heading}{" "}
            <span className="text-neutral-400">{p.headingAccent}</span>
          </h2>
          <p className="mt-3 text-sm text-neutral-500 max-w-md mx-auto">
            {p.subtext}
          </p>
          <p className="mt-1 text-sm text-neutral-400 max-w-md mx-auto">
            {p.subtext2}
          </p>
        </motion.div>

        {/* Controls — always LTR so toggle order doesn't flip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-8 flex items-center justify-center gap-3 flex-wrap"
          dir="ltr"
        >
          {/* Color mode toggle */}
          <div className="flex items-center rounded-xl border border-neutral-200 bg-neutral-50 p-1">
            {(["light", "dark"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setColorMode(c)}
                className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  colorMode === c ? "text-neutral-950" : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                {colorMode === c && (
                  <motion.span
                    layoutId="color-pill"
                    className="absolute inset-0 rounded-lg bg-white shadow-sm"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {c === "light" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                  {c === "light" ? p.light : p.dark}
                </span>
              </button>
            ))}
          </div>

          {/* View toggle */}
          <div className="flex items-center rounded-xl border border-neutral-200 bg-neutral-50 p-1">
            {(["desktop", "mobile"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setViewMode(v)}
                className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  viewMode === v ? "text-neutral-950" : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                {viewMode === v && (
                  <motion.span
                    layoutId="view-pill"
                    className="absolute inset-0 rounded-lg bg-white shadow-sm"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {v === "desktop" ? <Monitor className="h-3.5 w-3.5" /> : <Smartphone className="h-3.5 w-3.5" />}
                  {v === "desktop" ? p.desktop : p.mobile}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Preview window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5, ease: [0, 0, 0.2, 1] }}
          className="relative rounded-2xl border border-neutral-200 p-6 shadow-lg sm:p-10"
          style={{
            background: "linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%)",
          }}
        >
          {/* Dot-grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={`${viewMode}-${colorMode}-${isAr}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
              className="relative"
            >
              <BrowserFrame viewMode={viewMode} colorMode={colorMode}>
                <MockDashboard
                  colorMode={colorMode}
                  viewMode={viewMode}
                  isAr={isAr}
                  nav={p.dashboard.nav}
                  overview={p.dashboard.overview}
                  revenueTrend={p.dashboard.revenueTrend}
                  metrics={t.bento.metrics}
                />
              </BrowserFrame>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
