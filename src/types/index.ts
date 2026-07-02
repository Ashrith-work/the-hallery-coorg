import type { ReactNode } from "react";

/** A navigation entry (label + in-page or route href). */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/** Common props for components that simply wrap children. */
export interface WithChildren {
  children: ReactNode;
}

/** Props shared by top-level page sections. */
export interface SectionProps {
  id?: string;
  className?: string;
}

/** A single accommodation (see BRAND_CONTEXT.md §13). */
export interface Stay {
  slug: string;
  name: string;
  description: string;
  image: string;
  details: string[];
}
