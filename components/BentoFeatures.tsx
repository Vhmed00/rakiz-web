"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Zap, Search } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/* ── Mini chart bar ── */
const Bar = ({ h, delay }: { h: number; delay: number }) => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    transition={{ delay, duration: 0.5, ease: [0, 0, 0.2, 1] }}
    style={{ height: `${h}%`, transformOrigin: "bottom" }}
    className="w-3 rounded-sm bg-neutral-950"
  />
);

const revenueData = [38, 52, 45, 68, 62, 75, 72, 88, 82, 95, 91, 100];

/* ── Activity feed items ── */
const ActivityDot = ({ color }: { color: string }) => (
  <span className={`mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full ${color}`} />
);

export default function BentoFeatures() {
  const { t } = useLanguage();
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { metrics, seoKeywords, chat } = t.bento;

  return (
    <section id="features" ref={ref} className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-400">
            {t.bento.badge}
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            {t.bento.heading}
          </h2>
          <p className="mt-3 text-sm text-neutral-500 max-w-md mx-auto">
            {t.bento.subtext}
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          {/* ── Card 1: Revenue Chart (wide) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05, duration: 0.5, ease: [0, 0, 0.2, 1] }}
            className="card col-span-1 p-6 md:col-span-2"
          >
            <div className="mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-neutral-400" />
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                {t.bento.card2.eyebrow}
              </span>
            </div>
            <div className="mb-1 text-xl font-bold text-neutral-950">
              {metrics[0].value}
            </div>
            <div className="mb-6 flex items-center gap-1.5 text-xs">
              <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 font-medium">
                {metrics[0].delta}
              </span>
              <span className="text-neutral-400">{t.bento.card2.title}</span>
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-1.5 h-28">
              {revenueData.map((h, i) => (
                <Bar key={i} h={h} delay={inView ? 0.05 * i + 0.1 : 0} />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[10px] text-neutral-300">
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </motion.div>

          {/* ── Card 2: KPI stack ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] }}
            className="card col-span-1 flex flex-col gap-4 p-6"
          >
            {metrics.map((m, i) => (
              <div key={i} className={i < metrics.length - 1 ? "border-b border-neutral-100 pb-4" : ""}>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">{m.label}</span>
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                    {m.delta}
                  </span>
                </div>
                <span className="font-mono text-lg font-bold text-neutral-950">
                  {m.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ── Card 3: WhatsApp auto-reply chat ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5, ease: [0, 0, 0.2, 1] }}
            className="card col-span-1 p-6"
          >
            <div className="mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-neutral-400" />
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                {t.bento.card1.eyebrow}
              </span>
            </div>
            <p className="mb-5 text-xs font-semibold text-neutral-950">
              {t.bento.card1.title}
            </p>

            {/* Chat bubbles — no forced dir; text flows per page language */}
            <div className="space-y-2">
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-neutral-100 px-3 py-2 text-xs text-neutral-700">
                  {chat.messages[0]}
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-neutral-950 px-3 py-2 text-xs text-white">
                  {chat.messages[1]}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-neutral-100 px-3 py-2 text-xs text-neutral-700">
                  {chat.messages[2]}
                </div>
              </div>
            </div>

            {/* Typing indicator */}
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-neutral-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              {chat.typing}
            </div>
          </motion.div>

          {/* ── Card 4: SEO rankings ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: [0, 0, 0.2, 1] }}
            className="card col-span-1 p-6 md:col-span-2"
          >
            <div className="mb-2 flex items-center gap-2">
              <Search className="h-4 w-4 text-neutral-400" />
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                {t.bento.card3.eyebrow}
              </span>
            </div>
            <p className="mb-5 text-xs font-semibold text-neutral-950">
              {t.bento.card3.title}
            </p>

            {/* No dir="ltr" — container inherits page direction so Arabic renders correctly */}
            <div className="space-y-2">
              {seoKeywords.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2.5"
                >
                  {/* Keyword text: plain font, inherits page direction for correct Arabic shaping */}
                  <span className="text-xs text-neutral-600">{item.kw}</span>
                  {/* Rank badge: always LTR (it's a short ASCII symbol like #1) */}
                  <span
                    dir="ltr"
                    className={`font-mono text-xs font-bold ${
                      item.rank.startsWith("#1")
                        ? "text-emerald-600"
                        : item.rank.startsWith("#2")
                        ? "text-blue-600"
                        : "text-amber-600"
                    }`}
                  >
                    {item.rank}
                  </span>
                </div>
              ))}
            </div>

            {/* Activity feed */}
            <div className="mt-6 border-t border-neutral-100 pt-4">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {t.bento.card4.eyebrow}
              </p>
              <div className="space-y-2.5">
                {[
                  { text: t.bento.card4.title, color: "bg-emerald-500" },
                  { text: t.bento.card4.description, color: "bg-blue-500" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <ActivityDot color={item.color} />
                    <span className="text-xs leading-relaxed text-neutral-500">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
