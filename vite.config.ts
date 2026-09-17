import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative base so the built assets resolve correctly no matter what
  // repo name GitHub Pages serves this from (https://<user>.github.io/<repo>/).
  base: './',
  plugins: [react(), tailwindcss()],
});
