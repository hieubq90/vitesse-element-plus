import type { App, Plugin } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'
import NProgress from 'nprogress'

// import { type UserModule } from '~/types'

// export const install: UserModule = ({ isClient, router }) => {
//   if (isClient) {
//     router.beforeEach((to, from) => {
//       if (to.path !== from.path)
//         NProgress.start()
//     })
//     router.afterEach(() => {
//       NProgress.done()
//     })
//   }
// }

export const nprogressPlugin: Plugin = {
  install: (_app: App, options: any) => {
    const { router } = options
    if (router) {
      router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
        if (to.path !== from.path)
          NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }
  },
}

export default nprogressPlugin
