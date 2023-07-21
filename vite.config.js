import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [ svelte({compilerOptions: {hydratable: true}})],
    test: {
      globals: true
    }
  }
})
