import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Base set to './' allows the site to be deployed to any path (e.g. username.github.io/repo-name or custom domain)
  base: '/Portfolio-Site/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});