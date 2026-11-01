import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'next/link': path.resolve(__dirname, './src/components/ui/link-shim.tsx'),
      'next/image': path.resolve(__dirname, './src/components/ui/image-shim.tsx'),
      '/assets': path.resolve(__dirname, './public/assets'),
      '/assests': path.resolve(__dirname, './public/assets'),
    },
  },
  server: {
    port: 5174,
    host: true,
  },
});
