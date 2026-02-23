import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://md-converter-eta.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/licenses", // noindexページのためクローラーの巡回を拒否
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
