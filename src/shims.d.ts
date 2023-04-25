import type { AttributifyAttributes } from '@unocss/preset-attributify'

type Prefix = 'un-' // change it to your prefix
interface HTMLAttributes extends Partial<Record<AttributifyNames<Prefix>, string>> {}

declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes {}
}