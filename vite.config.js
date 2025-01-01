import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      parts: path.resolve(__dirname, './src/parts'),
      elements: path.resolve(__dirname, './src/elements'),
      json: path.resolve(__dirname, './src/json'),
      pages: path.resolve(__dirname, './src/pages'),
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
})
