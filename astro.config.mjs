// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Serve storage/ folder at root
  publicDir: 'storage',
  // Output to dist/
  output: 'static',
  build: {
    format: 'file'
  }
});
