import { createProxy } from './mod.ts'

createProxy({
  features: {
    aliases: {
      esbuild: 'gh/esbuild/deno-esbuild',
      proxy: 'gh/dendotooo/proxy'
    }
  }
})
