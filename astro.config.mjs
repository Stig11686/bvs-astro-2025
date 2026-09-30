import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.bvswebdesign.co.uk",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !/\/(solicitor-audit-thank-you|from-pretty-to-profitable|404)\/?$/.test(page),
    }),
  ],
});
