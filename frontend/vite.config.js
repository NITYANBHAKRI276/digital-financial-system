import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Extra hostnames allowed to reach the dev server, comma separated.
// Used for preview hosts; localhost is always permitted by Vite.
const allowedHosts = (process.env.VITE_ALLOWED_HOSTS || '')
  .split(',')
  .map((host) => host.trim())
  .filter(Boolean);

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts,
  },
});
