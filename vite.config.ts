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
    minify: false,
    cssCodeSplit: true,

    // 添加库模式配置
    lib: {
      entry: './src/entry.ts',
      name: 'SSYUI',
      fileName: 'ssy-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife'],
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
