import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import dts from 'vite-plugin-dts'
import { name } from './package.json';

// https://vitejs.dev/config/
/** @type {import('vite').defineConfig} */
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    'process.env': {},
  },
})
