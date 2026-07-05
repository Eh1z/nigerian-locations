import { defineConfig } from 'tsup'

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['src/index.ts'],
    skipNodeModulesBundle: true,
    outDir: 'dist',
    shims: false,
    clean: true,
    dts: true,
    sourcemap: true,
    minify: false,
})