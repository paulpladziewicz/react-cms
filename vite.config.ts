import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

const isTest = process.env.NODE_ENV === 'test'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      !isTest && TanStackRouterVite()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})