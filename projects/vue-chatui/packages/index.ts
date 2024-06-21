import type { App } from 'vue'

import './styles/index.less'

import Avatar from './components/Avatar/index.vue'
import { configCtxSymbol, localSymbol } from './utils/constant'

const install = (app: App) => {
  app.component('Avatar', Avatar)
  app.provide(localSymbol, {})
  app.provide(configCtxSymbol, {})
}

export default install
