import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/index.tsx'
    },
  },
  plugins: [
    react(),
    svgr(),
  ],
});
