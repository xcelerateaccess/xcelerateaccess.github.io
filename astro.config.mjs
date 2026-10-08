import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://xcelerateaccess.github.io",
  // For a project site, set this to '/YOUR_REPOSITORY_NAME' before deployment.
  // Leave it as '/' when using YOUR_GITHUB_USERNAME.github.io or a custom domain.
  base: process.env.BASE_PATH || "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
