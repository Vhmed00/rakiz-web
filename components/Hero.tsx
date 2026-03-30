"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0, 0, 0.2, 1] },
});

export default function Hero() {
  const { t } = useLanguage();
  const { badge, headline, subheadline, primaryCta, secondaryCta, stats } = t.hero;

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center">
      {/* Very subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Soft radial fade center */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 60%)",
        }}
      />

      {/* Badge */}
      <motion.div {...fade(0)}>
        <span className="badge mb-8 inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {badge}
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fade(0.06)}
        className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
        style={{ letterSpacing: "-0.035em", lineHeight: 1.05 }}
      >
        {headline.line1}{" "}
        <span className="relative inline-block italic text-neutral-700">
          {headline.highlight}
        </span>
        {headline.rest}
        <br />
        {headline.line3}
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        {...fade(0.12)}
        className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg"
      >
        {subheadline}
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fade(0.18)}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
      >
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800"
        >
          <MessageCircle className="h-4 w-4" />
          {primaryCta}
          <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 rtl:rotate-180" />
        </a>
        <a
          href="#packages"
          className="flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-600 shadow-sm transition-all duration-150 hover:border-neutral-300 hover:text-neutral-950"
        >
          {secondaryCta}
          <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
        </a>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        {...fade(0.26)}
        className="mt-16 flex flex-col items-center gap-8 border-t border-neutral-100 pt-10 sm:flex-row sm:gap-14"
      >
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1 text-center">
            <span className="font-mono text-2xl font-bold tracking-tight text-neutral-950">
              {stat.value}
            </span>
            <span className="text-xs text-neutral-400">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
