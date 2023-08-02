import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-lib',
  },
  base: '/dumi-demo/',
  publicPath: '/dumi-demo/',
});
