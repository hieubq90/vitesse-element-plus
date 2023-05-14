import type { App, Plugin } from 'vue'
import type { VueQueryPluginOptions } from '@tanstack/vue-query'
import { VueQueryPlugin } from '@tanstack/vue-query'

export const vueQueryPlugin: Plugin = {
  install: (app: App, _options: any) => {
    const vueQueryPluginOptions: VueQueryPluginOptions = {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      },
    }
    app.use(VueQueryPlugin, vueQueryPluginOptions)
  },
}

export default vueQueryPlugin
