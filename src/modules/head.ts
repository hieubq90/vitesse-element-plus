import type { App, Plugin } from 'vue'
import { createHead } from '@vueuse/head'

export const headPlugin: Plugin = {
  install: (app: App, _options: any) => {
    const head = createHead()
    app.use(head)
  },
}

export default headPlugin
