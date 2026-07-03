import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from '@nabla/vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), svgr(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/graphql': process.env.VITE_API_URL || 'http://localhost:3001/graphql',
      '/api/v1/': 'http://localhost:3001/',
    },
  },
});
