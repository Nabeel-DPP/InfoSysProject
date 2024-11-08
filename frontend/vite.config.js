// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



// vite.config.js
import { defineConfig } from 'vite';
import ViteSass from 'vite-plugin-sass';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), ViteSass()],
  server: {
    port: 3000,
  
  },
  build: {
    minify: false,
    cssCodeSplit: true,
  }
});







