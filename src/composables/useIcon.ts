import { h } from 'vue'
import type { VNode } from 'vue'
import Icon from '~/components/Icon/Icon.vue'
import type { IconTypes } from '~/types/icon'

export function useIcon(props: IconTypes): VNode {
  return h(Icon, props)
}
