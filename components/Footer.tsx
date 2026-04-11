"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

import { useLanguage } from "@/lib/LanguageContext";

const WA_MESSAGE = encodeURIComponent("السلام عليكم ركيز، أرغب في الاستفسار عن خدماتكم.");
const WA_LINK = `https://api.whatsapp.com/send?phone=96876807632&text=${WA_MESSAGE}`;

export default function Footer() {
  const { t, isAr } = useLanguage();

  return (
    <footer id="contact" className="relative border-t border-neutral-100 bg-neutral-50">
      {/* CTA section — WhatsApp only */}
      <div className="relative px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-400">
              {t.footer.eyebrow}
            </p>
            <h2
              className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.05 }}
            >
              {t.footer.heading}
              <br />
              <span className="text-neutral-400">{t.footer.highlight}</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-500 max-w-md mx-auto">
              {t.footer.subtext}
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-xl bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800"
              >
                <MessageCircle className="h-4 w-4" />
                {t.footer.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 rtl:rotate-180" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer grid */}
      <div className="border-t border-neutral-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand — text logo only */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span
                  className="text-base font-bold text-neutral-950"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {isAr ? "ركيز" : "Rakiz"}
                </span>
              </div>
              <p className="max-w-xs text-xs leading-relaxed text-neutral-500">
                {t.footer.brand.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-neutral-400">
                <MapPin className="h-3 w-3 shrink-0" />
                {t.footer.brand.location}
              </div>

              {/* Social row */}
              <div className="mt-5 flex items-center gap-2">
                {[
                  { Icon: MessageCircle, href: WA_LINK,                              label: "WhatsApp"  },
                  { Icon: InstagramIcon, href: "https://instagram.com/raakiiz", label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-400 shadow-sm transition-all duration-150 hover:border-neutral-300 hover:text-neutral-950"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Package links */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {t.footer.packagesLabel}
              </h4>
              <ul className="space-y-2.5">
                {t.footer.packageLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-neutral-500 transition-colors duration-150 hover:text-neutral-950"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {t.footer.companyLabel}
              </h4>
              <ul className="space-y-2.5">
                {t.footer.companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-500 transition-colors duration-150 hover:text-neutral-950"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-neutral-100 pt-8 sm:flex-row">
            <p className="text-xs text-neutral-400">{t.footer.copyright}</p>
            <p className="text-xs text-neutral-400">{t.footer.builtIn}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
