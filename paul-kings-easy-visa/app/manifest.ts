import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Paul Kings Easy Visa",
    short_name: "Easy Visa",
    description: "Visa and legal-document services in Central Pattaya.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf5",
    theme_color: "#f75700",
  };
}
