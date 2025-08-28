import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import languagesJSON from "./src/config/language.json";
import rehypeExternalLinks from "rehype-external-links";
import remarkParseContent from "./src/lib/utils/remarkParseContent.ts";
import parseTomlToJson from "./src/lib/utils/parseTomlToJson.ts";

const config = parseTomlToJson("./src/config/config.toml");
let supportedLanguages = [...languagesJSON.map((lang) => lang.languageCode)];

let {
  seo: { sitemap: sitemapConfig },
  settings: {
    multilingual: {
      enable: multilingualEnable,
      showDefaultLangInUrl,
      defaultLanguage,
      disableLanguages,
    },
  },
} = config;

// Remove default language from supportedLanguages
disableLanguages = multilingualEnable
  ? disableLanguages
  : supportedLanguages.map((lang) => lang !== "en" && lang).filter(Boolean);

// Filter out disabled languages from supportedLanguages
const locales = disableLanguages
  ? supportedLanguages.filter((lang) => !disableLanguages.includes(lang))
  : supportedLanguages;

// https://astro.build/config
export default defineConfig({
  site: config.site.baseUrl ? config.site.baseUrl : "http://examplesite.com",
  trailingSlash: config.site.trailingSlash ? "always" : "never",
  i18n: {
    locales: locales,
    defaultLocale: defaultLanguage,
    routing: {
      redirectToDefaultLocale: showDefaultLangInUrl ? false : true,
      prefixDefaultLocale: showDefaultLangInUrl,
    },
  },
  integrations: [
    react(),
    sitemapConfig.enable ? sitemap() : null,
    AutoImport({
      imports: [
        "@/components/CustomButton.astro",
        "@/shortcodes/Accordion.astro",
        "@/shortcodes/Notice.astro",
        "@/shortcodes/Tabs.astro",
        "@/shortcodes/Tab.astro",
        "@/shortcodes/Testimonial.astro",
        "@/shortcodes/ListCheck.astro",
        "@/shortcodes/ImageList.astro",
        "@/shortcodes/ImageItem.astro",
        "@/shortcodes/VideoInline.astro",
        "@/shortcodes/CardWrapper.astro",
        "@/shortcodes/Card.astro",
      ],
    }),
    mdx(),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: "noopener noreferrer nofollow",
          target: "_blank",
        },
      ],
    ],
    remarkPlugins: [
      remarkParseContent, // Parse markdown content and add classes in heading and loading="lazy" to images
      remarkToc,
    ],

    // Code Highlighter https://github.com/shikijs/shiki
    shikiConfig: {
      theme: "light-plus", // https://shiki.style/themes
      wrap: false,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [tailwindcss(), reloadOnTomlChange()],
    define: {
      'import.meta.env.GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY),
      'import.meta.env.GOOGLE_PLACE_ID': JSON.stringify(process.env.GOOGLE_PLACE_ID),
      'import.meta.env.SANITY_PROJECT_ID': JSON.stringify(process.env.SANITY_PROJECT_ID),
      'import.meta.env.SANITY_DATASET': JSON.stringify(process.env.SANITY_DATASET)

    }
  },
});

// Trigger reload for when changing .toml files
function reloadOnTomlChange() {
  return {
    name: "reload-on-toml-change",
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".toml")) {
        console.log("TOML file changed, triggering reload...");
        server.ws.send({ type: "full-reload" });
      }
    },
  };
}
