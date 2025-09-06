import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mauricioglab.github.io',
  base: '/mauricio-landing',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
