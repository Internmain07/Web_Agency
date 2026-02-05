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
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Vendor chunks
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/react-router-dom')) {
              return 'vendor-router';
            }
            if (id.includes('node_modules/react-icons')) {
              return 'vendor-icons';
            }
            // Feature-based chunks - lazy loaded pages go into separate chunks
            if (id.includes('AboutPage') || id.includes('ResourcesPage') || id.includes('CareersPage')) {
              return 'chunk-pages-main';
            }
            if (id.includes('PrivacyPolicyPage') || id.includes('TermsOfServicePage')) {
              return 'chunk-pages-legal';
            }
          },
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'images/[name]-[hash][extname]';
            } else if (/\.css$/.test(name ?? '')) {
              return 'css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      // Minify more aggressively
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      // Split vendor code
      cssCodeSplit: true,
      sourcemap: false, // Disable for production
      reportCompressedSize: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
