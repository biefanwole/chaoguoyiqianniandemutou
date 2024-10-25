import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
// import legacy from '@vitejs/plugin-legacy'
// import Unocss  from "./config/unocss";
import UnoCSS from 'unocss/vite'

// import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
/// <reference types="vitest/config" />

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // }),

    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),

  ],

  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SSYUI',
      fileName: 'ssy-ui',
      formats: ['es', 'umd', 'iife'], // 导出模块类型
    },
  },

  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler',
    },
  },
})
