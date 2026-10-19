import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://about-manny.netlify.app",
  output: "static",
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});

