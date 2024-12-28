import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'config/opinionsConfig.json',
          dest: 'config'
        },
        {
          src: 'config/galleriesConfig.json',
          dest: 'config'
        },
        {
          src: 'config/config.json',
          dest: 'config'
        }
      ]
    })
  ],
  base: "/"
});
