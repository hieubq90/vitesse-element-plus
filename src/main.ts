// import { ViteSSG } from 'vite-ssg'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'

import App from './App.vue'
import nprogressPlugin from '~/modules/nprogress'
import i18nPlugin from '~/modules/i18n'
import validationPlugin from '~/modules/validation'
import piniaPlugin from '~/modules/pinia'
import headPlugin from '~/modules/head'
import vueQueryPlugin from '~/modules/vueQuery'

// import Previewer from 'virtual:vue-component-preview'
// import type { UserModule } from './types'

import '@unocss/reset/tailwind-compat.css'
import 'animate.css'
import './styles/main.scss'
import 'uno.css'
import '~/modules/svgIcon'

import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
// export const createApp = ViteSSG(
//   App,
//   { routes, base: import.meta.env.BASE_URL },
//   (ctx) => {
//     // install all modules under `modules/`
//     Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
//       .forEach(i => i.install?.(ctx))
//     // ctx.app.use(Previewer)
//   },
// )

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)
app.use(nprogressPlugin, { router })
app.use(i18nPlugin)
app.use(validationPlugin)
app.use(headPlugin)
app.use(piniaPlugin)
app.use(vueQueryPlugin)
app.mount('#app')
