import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative base path for easier deployment in subdirectories
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit as we have heavy 3D assets
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-animation': ['gsap', 'lenis'],
        },
      },
    },
  },
});
