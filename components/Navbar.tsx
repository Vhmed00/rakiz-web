"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang, isAr } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-neutral-200 bg-white/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">

          {/* Logo — text only, no icon */}
          <a href="/" className="flex items-center">
            <span className="text-base font-bold tracking-tight text-neutral-950" style={{ letterSpacing: "-0.02em" }}>
              {isAr ? "ركيز" : "Rakiz"}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-neutral-500 transition-colors duration-150 hover:text-neutral-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden items-center gap-2 md:flex">
            {/* Language toggle */}
            <div className="flex items-center overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
              {(["en", "ar"] as const).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 ${
                    lang === l
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-400 hover:text-neutral-700"
                  } ${i === 0 ? "" : "border-s border-neutral-200"}`}
                >
                  {i === 0 && <Globe className="h-3 w-3" />}
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="rounded-lg bg-neutral-950 px-3.5 py-1.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
              {(["en", "ar"] as const).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${
                    lang === l ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-400"
                  } ${i === 0 ? "" : "border-s border-neutral-200"}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition-colors hover:text-neutral-950"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
            className="fixed inset-x-0 top-14 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-xl px-4 pb-4 pt-2 md:hidden"
          >
            <div className="flex flex-col gap-0.5">
              {t.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-950"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 border-t border-neutral-100 pt-3">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-lg bg-neutral-950 py-2.5 text-sm font-medium text-white"
                >
                  {t.nav.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
