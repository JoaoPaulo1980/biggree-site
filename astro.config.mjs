import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://biggree.com",
  integrations: [tailwind()],
  build: {
    inlineStylesheets: "auto",
  },
});
