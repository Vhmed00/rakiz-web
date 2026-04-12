"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0, 0, 0.2, 1] } },
};

export default function Solutions() {
  const { t }  = useLanguage();
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="packages" className="relative px-6 py-24 sm:py-32">
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
            {t.solutions.badge}
          </p>
          <h2
            className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            {t.solutions.heading}{" "}
            <span className="text-neutral-400">{t.solutions.highlight}</span>
          </h2>
          <p className="mt-3 text-sm text-neutral-500 max-w-md mx-auto">
            {t.solutions.subtext}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {t.solutions.packages.map((pkg, i) => {
            const isFeatured     = i === 1;
            const isSubscription = i === 2;
            return (
              <motion.div
                key={pkg.name}
                variants={cardVariants}
                className={`relative flex flex-col rounded-2xl border p-6 transition-shadow duration-200 ${
                  isFeatured
                    ? "border-neutral-950 bg-neutral-950 shadow-xl"
                    : isSubscription
                    ? "border-neutral-200 bg-white shadow-sm ring-1 ring-emerald-100 hover:shadow-md hover:ring-emerald-200"
                    : "border-neutral-200 bg-white shadow-sm hover:shadow-md"
                }`}
              >
                {/* Badge row */}
                {isFeatured && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/80">
                    {t.solutions.mostPopular}
                  </span>
                )}
                {isSubscription && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    {t.solutions.bestValue}
                  </span>
                )}

                {/* Name + tagline */}
                <div className="mb-4">
                  <h3 className={`text-sm font-semibold ${isFeatured ? "text-white" : "text-neutral-950"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs mt-0.5 ${isFeatured ? "text-white/50" : "text-neutral-400"}`}>
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-1 flex items-baseline gap-1.5">
                  <span
                    className={`font-mono text-2xl font-bold ${isFeatured ? "text-white" : "text-neutral-950"}`}
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {pkg.price}
                  </span>
                  <span className={`text-xs ${isFeatured ? "text-white/50" : isSubscription ? "text-emerald-600 font-medium" : "text-neutral-400"}`}>
                    {pkg.period}
                  </span>
                </div>
                {pkg.priceSuffix && (
                  <p className={`mb-3 text-[11px] font-medium ${isFeatured ? "text-white/40" : "text-neutral-400"}`}>
                    {pkg.priceSuffix}
                  </p>
                )}

                <p className={`mb-5 text-xs leading-relaxed ${isFeatured ? "text-white/60" : "text-neutral-500"} ${pkg.priceSuffix ? "" : "mt-2"}`}>
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="flex-1 space-y-2.5 mb-5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs">
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${isFeatured ? "text-white/40" : "text-neutral-400"}`}
                        strokeWidth={2.5}
                      />
                      <span className={isFeatured ? "text-white/70" : "text-neutral-600"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bundle note */}
                {pkg.bundleNote && (
                  <div className="mb-5 rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5">
                    <p className="text-[11px] leading-relaxed text-neutral-500">
                      {pkg.bundleNote}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <a
                  href="#contact"
                  className={`group flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-medium transition-all duration-150 ${
                    isFeatured
                      ? "bg-white text-neutral-950 hover:bg-neutral-100"
                      : "border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300 hover:bg-white hover:text-neutral-950"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 rtl:rotate-180" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-8 text-center text-xs text-neutral-400"
        >
          {t.solutions.bottomNote}
        </motion.p>
      </div>
    </section>
  );
}
