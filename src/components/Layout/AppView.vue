<script setup lang="ts">
// import { useTagsViewStore } from '~/stores/modules/tagsView'

import Footer from './Footer.vue'
import { useAppStore } from '~/stores/modules/app'

const appStore = useAppStore()

const layout = computed(() => appStore.getLayout)

const fixedHeader = computed(() => appStore.getFixedHeader)

const footer = computed(() => appStore.getFooter)

// const tagsViewStore = useTagsViewStore()

// const getCaches = computed((): string[] => {
//   return tagsViewStore.getCachedViews
// })
</script>

<template>
  <section
    class="w-[100%] bg-[var(--app-content-bg-color)] p-[var(--app-content-padding)] dark:bg-[var(--el-bg-color)]" :class="[
      {
        '!min-h-[calc(100%-var(--app-footer-height))]':
          ((fixedHeader && (layout === 'classic' || layout === 'topLeft')) || layout === 'top')
          && footer,

        '!min-h-[calc(100%-var(--tags-view-height)-var(--top-tool-height)-var(--app-footer-height))]':
          !fixedHeader && layout === 'classic' && footer,

        '!min-h-[calc(100%-var(--tags-view-height)-var(--app-footer-height))]':
          !fixedHeader && (layout === 'topLeft' || layout === 'top') && footer,

        '!min-h-[calc(100%-var(--top-tool-height))]': fixedHeader && layout === 'cutMenu' && footer,

        '!min-h-[calc(100%-var(--top-tool-height)-var(--tags-view-height))]':
          !fixedHeader && layout === 'cutMenu' && footer,
      },
    ]"
  >
    <RouterView>
      <template #default="{ Component, route }">
        <!-- <keep-alive :include="getCaches"> -->
        <component :is="Component" :key="route.fullPath" />
        <!-- </keep-alive> -->
      </template>
    </RouterView>
  </section>
  <Footer v-if="footer" />
</template>
