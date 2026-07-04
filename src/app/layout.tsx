import type { Metadata, Viewport } from "next";

import { AppProviders } from "@/components/providers/app-providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyBookBar } from "@/components/layout/sticky-book-bar";
import { serif, sans } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#211d18",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      {/* pb-[64px] keeps the fixed StickyBookBar (54px) from covering the footer. */}
      <body className="min-h-dvh bg-background pb-[64px] font-sans text-foreground antialiased">
        <AppProviders>
          <a
            href="#main"
            className="sr-only rounded-md bg-ink px-4 py-2 text-cream focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200]"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <StickyBookBar />
        </AppProviders>
      </body>
    </html>
  );
}
