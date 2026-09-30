import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.bvswebdesign.co.uk",
  trailingSlash: "always",
  build: { format: "directory" },
  // "class" so a scoped class passed to a component (e.g. <Img class="…">) keeps its styles.
  scopedStyleStrategy: "class",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !/\/(solicitor-audit-thank-you|from-pretty-to-profitable|404)\/?$/.test(page),
    }),
  ],
});
