import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirige las peticiones que empiezan con /api a otro servidor
      '/api': {
        target: 'http://aotweblx04', // El servidor de destino
        changeOrigin: true, // Necesario para que el servidor de destino no vea 'localhost' como el origen
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina '/api' de la URL final
      },
    },
  },
})
