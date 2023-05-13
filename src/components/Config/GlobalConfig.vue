<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useAppStore } from '~/stores/modules/app'
import { setCssVar } from '~/utils'
import { propTypes } from '~/utils/propTypes'
import type { ElementPlusSize } from '~/types/elementPlus'

const props = defineProps({
  size: propTypes.oneOf<ElementPlusSize>(['default', 'small', 'large']).def('default'),
})

const { variables } = useDesign()
const appStore = useAppStore()

provide('configGlobal', props)

onMounted(() => {
  appStore.setCssVarTheme()
})

const { width } = useWindowSize()

watch(
  () => width.value,
  (width: number) => {
    if (width < 768) {
      if (!appStore.getMobile)
        appStore.setMobile(true)
      setCssVar('--left-menu-min-width', '0')
      appStore.setCollapse(true)
      if (appStore.getLayout !== 'classic')
        appStore.setLayout('classic')
    }
    else {
      if (appStore.getMobile)
        appStore.setMobile(false)
      setCssVar('--left-menu-min-width', '64px')
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <ElConfigProvider
    :namespace="variables.ELNamespace" :message="{ max: 1 }"
    :size="size"
  >
    <slot />
  </ElConfigProvider>
</template>
