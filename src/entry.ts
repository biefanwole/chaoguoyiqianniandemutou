import type { Plugin } from 'vue'
import { version } from '../package.json'
// import Avatar from './avatar/Avatar.vue'
import plugins from './plugins'
import 'virtual:uno.css'

export * from './avatar'
// 导出组件
export * from './button'
export * from './link'
export * from './plugins'
// 导出插件
export default {
  install(app: { use: (arg0: Plugin) => void }) {
    plugins.forEach(c => app.use(c))
  },
  version,
}
