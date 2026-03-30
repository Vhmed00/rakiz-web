"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Process() {
  const { t }  = useLanguage();
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="process" className="relative px-6 py-24 sm:py-32">
      <div className="divider mx-auto max-w-6xl mb-20" />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-400">
            {t.process.badge}
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            {t.process.heading}{" "}
            <span className="text-neutral-400">{t.process.highlight}</span>
          </h2>
          <p className="mt-3 text-sm text-neutral-500 max-w-md mx-auto">{t.process.subtext}</p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.45, ease: [0, 0, 0.2, 1] }}
              className="flex flex-col"
            >
              {/* Step number row — line sits here via border-t on siblings */}
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white font-mono text-xs font-semibold text-neutral-500 shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Connector line — only shown between cards on desktop */}
                {i < t.process.steps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-neutral-300 to-neutral-100 lg:block" />
                )}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-sm font-semibold text-neutral-950">{step.title}</h3>

              {/* Content */}
              <p className="mb-4 text-xs leading-relaxed text-neutral-500">{step.description}</p>
              <ul className="space-y-1.5">
                {step.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="h-px w-3 shrink-0 bg-neutral-300" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t.process.ctaText}
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-150 hover:border-neutral-300 hover:text-neutral-950 hover:shadow-md"
          >
            {t.process.ctaButton}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 rtl:rotate-180" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
