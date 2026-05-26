// SPA build for static hosting (e.g. Hostinger via FTP).
// We disable the Cloudflare plugin so TanStack Start emits a standard Node
// server bundle. The Vite client build already emits a valid SPA shell at
// dist/client/index.html, so the post-build prerender step is non-essential —
// we mark it non-fatal so transient CI hiccups (the prerender server's "/"
// fetch occasionally 500ing on cold runners) don't fail the build.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
      maskPath: "/",
      prerender: {
        outputPath: "/index",
        crawlLinks: false,
        retryCount: 0,
      },
    },
    prerender: {
      enabled: true,
      failOnError: false,
    },
    pages: [],
  },
});
