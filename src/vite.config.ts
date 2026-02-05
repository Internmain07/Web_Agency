import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  // Only attempt to import prerenderer during build
  let plugins: any[] = [react()];
  
  if (command === 'build') {
    try {
      const PrerenderSPAPlugin = require('@prerenderer/prerenderer').default || require('@prerenderer/prerenderer');
      const Jsdom = require('@prerenderer/renderer-jsdom').default || require('@prerenderer/renderer-jsdom');
      
      plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.resolve(__dirname, './dist'),
          routes: ['/', '/about', '/resources', '/careers', '/privacy', '/terms'],
          renderer: new Jsdom(),
        })
      );
    } catch (e) {
      console.warn('Prerenderer not available, skipping static site generation');
    }
  }

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
