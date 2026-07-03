"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { EASE } from "@/config/animations";
import { SITE } from "@/config/site";

/**
 * Section 1 — the Loading Experience (WEBSITE_BLUEPRINT §1). A lantern-lit
 * monogram on a dark field that lifts away like clearing mist, revealing the hero.
 * Auto-dismisses; never traps. Reduced motion collapses this to a quick fade
 * (via the global MotionConfig).
 */
export function LoadingExperience() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[999] grid place-items-center bg-cream text-ink"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="grid size-16 place-items-center border border-gold-ink font-serif text-xl tracking-wide text-gold-ink">
              TH
            </span>
            <p className="mt-4 text-[0.6rem] uppercase tracking-[0.4em] text-gold-ink">
              {SITE.name} · {SITE.subName}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
