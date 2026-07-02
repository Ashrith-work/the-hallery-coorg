import { Cormorant_Garamond, Jost } from "next/font/google";

/**
 * Typography per PROJECT_RULES §4:
 *  - Serif / display: Cormorant Garamond (editorial, literary)
 *  - Sans / UI:       Jost (quiet humanist geometric)
 * Exposed as CSS variables consumed by the Tailwind theme (globals.css).
 */
export const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});
