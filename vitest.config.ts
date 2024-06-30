import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}', 'tests/**/*.{test,spec}.{js,ts}'],
    environment: 'jsdom',
    exclude: ['e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url))
  }
});
