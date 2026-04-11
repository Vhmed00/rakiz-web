"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { SplineScene } from "@/components/ui/splite";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0, 0, 0.2, 1] },
});

export default function Hero() {
  const { t } = useLanguage();
  const { badge, headline, subheadline, primaryCta, secondaryCta, stats } = t.hero;

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-black px-6 pt-20 pb-0">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-0 lg:flex-row lg:items-center">

        {/* ── Left: text content ── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-start lg:flex-1 lg:pe-8 pt-8 pb-12 lg:pb-0">
          {/* Badge */}
          <motion.div {...fade(0)}>
            <span className="badge mb-8 inline-flex border-white/10 bg-white/5 text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fade(0.06)}
            className="max-w-xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ letterSpacing: "-0.035em", lineHeight: 1.05 }}
          >
            {headline.line1}{" "}
            <span className="relative inline-block italic text-neutral-300">
              {headline.highlight}
            </span>
            {headline.rest}
            <br />
            {headline.line3}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...fade(0.12)}
            className="mt-6 max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fade(0.18)}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-all duration-150 hover:bg-neutral-200"
            >
              <MessageCircle className="h-4 w-4" />
              {primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 rtl:rotate-180" />
            </a>
            <a
              href="#packages"
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-neutral-300 transition-all duration-150 hover:border-white/20 hover:text-white"
            >
              {secondaryCta}
              <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            {...fade(0.26)}
            className="mt-14 flex flex-col items-center gap-8 border-t border-white/10 pt-10 sm:flex-row sm:gap-14 lg:items-start"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1 text-center lg:items-start lg:text-start">
                <span className="font-mono text-2xl font-bold tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: 3D robot ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:flex lg:flex-1 lg:h-[700px] w-full"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
