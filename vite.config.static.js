/* ============================================================
   vite.config.static.js — builds a backend-free static copy of the
   site into /dist for GitHub Pages.

   Run with:  npm run build:static

   Differs from vite.config.js (the Laravel build) in that it has NO
   laravel-vite-plugin and uses index.html as the entry. base:'./'
   makes every asset URL relative, so the result works whether it is
   served from a project page (eyeemo.github.io/portfolio-shuk/) or
   any other sub-path — no repo name hard-coded.
   ============================================================ */

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: './',
    plugins: [
        tailwindcss(),
        vue(),
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
});
