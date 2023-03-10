import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  resolve: {
    // 配置别名
    alias: {
      // '@': path.resolve('./src') // @代替src
      '@': path.resolve(__dirname, 'src') // @代替src
    }
  },
  plugins: [vue()],
})
