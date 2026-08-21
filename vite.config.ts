import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/',

    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [path.resolve(__dirname, './src')],
        },
      },
    },

    define: {
      'process.env.VITE_BITRIX_WEBHOOK_URL': JSON.stringify(
        env.VITE_BITRIX_WEBHOOK_URL ?? '',
      ),
    },
  }
})
