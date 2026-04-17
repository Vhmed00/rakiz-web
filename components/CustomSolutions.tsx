"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Settings, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0, 0, 0.2, 1], delay },
});

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const child = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0, 0, 0.2, 1] } },
};

const levelIcons = [Shield, Settings, Zap];

export default function CustomSolutions() {
  const { t, isAr, dir } = useLanguage();
  const s = t.customSolutions;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const ChevronCta = isAr ? ChevronLeft : ChevronRight;

  return (
    <section
      ref={ref}
      dir={dir}
      id="custom-solutions"
      className="relative px-6 py-24 sm:py-32"
    >
      <div className="divider mx-auto max-w-6xl mb-20" />

      <div className="mx-auto max-w-4xl space-y-20">

        {/* ── 1. Section Header ── */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
        >
          <p className="badge mx-auto w-fit">{s.badge}</p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--n-950)", lineHeight: 1.35 }}
          >
            {s.title}
          </h2>
          <p
            className="mx-auto max-w-xl text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--n-500)" }}
          >
            {s.subtitle}
          </p>
        </motion.div>

        {/* ── 2. Main Offer Card ── */}
        <motion.div
          className="card rounded-2xl p-8 sm:p-10 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: 0.1 }}
          style={{ borderColor: "var(--n-200)" }}
        >
          {/* card header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-1">
              <span className="badge text-xs">{s.cardBadge}</span>
              <h3 className="text-xl font-bold" style={{ color: "var(--n-900)" }}>
                {s.cardTitle}
              </h3>
            </div>

            {/* pricing */}
            <div className="space-y-1" style={{ textAlign: isAr ? "right" : "left" }}>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold" style={{ color: "var(--n-950)" }}>
                  {s.priceRange}
                </span>
                <span className="text-base font-medium" style={{ color: "var(--n-500)" }}>
                  {s.priceTo}
                </span>
              </div>
              <p className="text-sm font-medium" style={{ color: "var(--n-500)" }}>
                {s.retainer}{" "}
                <span className="text-xs" style={{ color: "var(--n-400)" }}>
                  {s.retainerNote}
                </span>
              </p>
            </div>
          </div>

          {/* divider */}
          <div className="divider" />

          {/* features */}
          <motion.ul
            className="space-y-3"
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {s.features.map((f) => (
              <motion.li
                key={f}
                variants={child}
                className="flex items-start gap-3 text-sm sm:text-base"
                style={{ color: "var(--n-700)" }}
              >
                <span
                  className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--n-400)" }}
                />
                {f}
              </motion.li>
            ))}
          </motion.ul>

          {/* result highlight */}
          <div
            className="rounded-xl px-5 py-4 text-sm sm:text-base leading-relaxed font-medium"
            style={{
              background: "var(--n-50)",
              color: "var(--n-800)",
              borderInlineStart: "3px solid var(--n-300)",
            }}
          >
            {s.resultText}{" "}
            <span style={{ color: "var(--n-500)" }}>{s.resultFrom}</span>{" "}
            {s.resultConnector}{" "}
            <span style={{ color: "var(--n-900)", fontWeight: 700 }}>{s.resultTo}</span>
          </div>

          {/* note */}
          <p className="text-xs leading-relaxed" style={{ color: "var(--n-400)" }}>
            {s.note}
          </p>
        </motion.div>

        {/* ── 3. System Levels ── */}
        <div className="space-y-8">
          <motion.h4
            className="text-center text-xl font-semibold"
            style={{ color: "var(--n-800)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: 0.15 }}
          >
            {s.levelsTitle}
          </motion.h4>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {s.levels.map(({ title, desc }, i) => {
              const Icon = levelIcons[i];
              return (
                <motion.div
                  key={title}
                  variants={child}
                  className="card rounded-xl p-6 space-y-3 text-center"
                  style={{ borderColor: "var(--n-200)" }}
                >
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full mx-auto"
                    style={{ background: "var(--n-100)", color: "var(--n-700)" }}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <p className="font-semibold text-sm" style={{ color: "var(--n-900)" }}>
                    {title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--n-500)" }}>
                    {desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── 4. Trust Banner ── */}
        <motion.div
          className="card rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ background: "var(--n-50)", borderColor: "var(--n-200)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: 0.2 }}
        >
          <span
            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full"
            style={{ background: "var(--n-100)", color: "var(--n-700)" }}
          >
            <Shield size={18} strokeWidth={1.8} />
          </span>
          <div className="space-y-1">
            <p className="text-sm font-bold" style={{ color: "var(--n-900)" }}>
              {s.guaranteeTitle}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--n-600)" }}>
              {s.guaranteeText}
            </p>
          </div>
        </motion.div>

        {/* ── 5. CTA ── */}
        <motion.div
          className="text-center space-y-5"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: 0.25 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--n-950)" }}>
            {s.ctaTitle}
          </h3>
          <p className="text-sm sm:text-base" style={{ color: "var(--n-500)" }}>
            {s.ctaDesc}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "var(--n-950)", color: "var(--n-0)" }}
          >
            {s.ctaButton}
            <ChevronCta size={18} strokeWidth={2} />
          </a>

          <p className="text-xs" style={{ color: "var(--n-400)" }}>
            {s.ctaMicro}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
