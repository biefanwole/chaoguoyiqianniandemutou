import type { Plugin } from 'vue'
import Avatar from './avatar/Avatar.vue'
import { Button } from './button'
import { Link } from './link'

function avaPlugin(app: any): void {
  app.component('Avatar', Avatar)
}

const plugins: Plugin[] = [Link, Button, avaPlugin]

export default plugins
