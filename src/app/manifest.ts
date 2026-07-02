import type { MetadataRoute } from "next";

import { SITE } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.title,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#211d18",
    theme_color: "#211d18",
    icons: [],
  };
}
