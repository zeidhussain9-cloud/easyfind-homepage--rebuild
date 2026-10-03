import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { formatterApiPlugin } from "./server/vite-formatter-plugin";
import { cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const legalRoutes = ["privacy", "terms", "cookies", "legal-notice", "accessibility"];

function staticSpaRoutes() {
  return {
    name: "static-spa-routes",
    closeBundle() {
      for (const route of legalRoutes) {
        const routeDir = join("dist", "legal", route);
        mkdirSync(routeDir, { recursive: true });
        cpSync(join("dist", "index.html"), join(routeDir, "index.html"));
      }
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), TanStackRouterVite(), react(), formatterApiPlugin(), staticSpaRoutes()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
  },
  preview: {
    allowedHosts: true,
  },
});
