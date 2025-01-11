import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/index.tsx'
    },
  },
  plugins: [react()],
});
