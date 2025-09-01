import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Adicione esta linha!
  // Se o seu repositório se chama 'dropstore', por exemplo:
  base: '/dropstore/', 

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});