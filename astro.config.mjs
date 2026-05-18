import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel'; // ✅ Déjà correct ici !

// https://astro.build/config
export default defineConfig({
  site: 'https://eglise-massy.fr',
  output: 'static', // ✅ Modifié de 'hybrid' à 'static' (requis par Astro v6)
  adapter: vercel({
    webAnalytics: { enabled: false },
    imageService: false,
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/api/'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  vite: {
    build: {
      cssMinify: 'esbuild',
      rollupOptions: {
        output: {
          assetFileNames: '_assets/[name].[hash][extname]',
          chunkFileNames: '_assets/[name].[hash].js',
          entryFileNames: '_assets/[name].[hash].js',
        },
      },
    },
  },
});