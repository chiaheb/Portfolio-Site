import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Base must be set to relative './' or the repository name for GitHub Pages to resolve assets correctly
  base: '/Portfolio-Site/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
