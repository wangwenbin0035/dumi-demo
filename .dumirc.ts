import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-lib',
  },
  base: process.env.NODE_ENV === 'production' ? "/dumi-demo" : "/",
  publicPath: '/dumi-demo/',
  runtimePublicPath: {},
  // exportStatic: true
});
