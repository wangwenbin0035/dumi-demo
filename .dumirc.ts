import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: process.env.NODE_ENV === 'production' ? "/dumi-demo" : "/",
  publicPath: process.env.NODE_ENV === 'production' ? "/dumi-demo/" : "/",
  runtimePublicPath: {},
});
