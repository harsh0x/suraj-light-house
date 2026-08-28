import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-root-assets',
      configureServer(server) {
        server.middlewares.use('/assets', (req, res, next) => {
          const cleanUrl = req.url.split('?')[0].replace(/^\//, '');
          const rootAssetPath = path.resolve(__dirname, '../assets', cleanUrl);
          if (fs.existsSync(rootAssetPath) && fs.statSync(rootAssetPath).isFile()) {
            const ext = path.extname(rootAssetPath).toLowerCase();
            const mime = ext === '.png' ? 'image/png' : ext === '.mp4' ? 'video/mp4' : 'image/jpeg';
            res.setHeader('Content-Type', mime);
            return fs.createReadStream(rootAssetPath).pipe(res);
          }
          next();
        });
      },
      buildStart() {
        const rootAssetsDir = path.resolve(__dirname, '../assets');
        const pubAssetsDir = path.resolve(__dirname, 'public/assets');
        if (fs.existsSync(rootAssetsDir)) {
          if (!fs.existsSync(pubAssetsDir)) {
            fs.mkdirSync(pubAssetsDir, { recursive: true });
          }
          const files = fs.readdirSync(rootAssetsDir);
          files.forEach(file => {
            const src = path.join(rootAssetsDir, file);
            const dst = path.join(pubAssetsDir, file);
            if (fs.statSync(src).isFile() && !fs.existsSync(dst)) {
              fs.copyFileSync(src, dst);
            }
          });
        }
      }
    }
  ],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
