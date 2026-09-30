import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkSiteImages from "./src/lib/remark-site-images.mjs";
import rehypeExternalLinks from "./src/lib/rehype-external-links.mjs";

export default defineConfig({
  site: "https://www.bvswebdesign.co.uk",
  trailingSlash: "always",
  // Inline the CSS into each page so nothing blocks the first paint
  build: { inlineStylesheets: "always" },
  integrations: [
    mdx(),
    sitemap({
      // Thank-you/landing pages, and /pricing/ (redirected to /services/ in public/_redirects)
      filter: (page) =>
        !/\/(solicitor-audit-thank-you|from-pretty-to-profitable|elements|pricing)\/$/.test(page),
    }),
  ],
  image: {
    // Images in Markdown get a responsive srcset automatically
    layout: "constrained",
  },
  markdown: {
    // Lets posts write ![alt](/images/blog/photo.jpg) and still get optimised images
    remarkPlugins: [remarkSiteImages],
    rehypePlugins: [rehypeExternalLinks],
  },
});
