<script setup lang="ts">
import { useAppStore } from '~/stores/modules/app'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('logo')

const appStore = useAppStore()

const show = ref(true)

const title = computed(() => appStore.getTitle)

const layout = computed(() => appStore.getLayout)

const collapse = computed(() => appStore.getCollapse)

onMounted(() => {
  if (unref(collapse))
    show.value = false
})

watch(
  () => collapse.value,
  (collapse: boolean) => {
    if (unref(layout) === 'topLeft' || unref(layout) === 'cutMenu') {
      show.value = true
      return
    }
    if (!collapse) {
      setTimeout(() => {
        show.value = !collapse
      }, 400)
    }
    else {
      show.value = !collapse
    }
  },
)

watch(
  () => layout.value,
  (layout) => {
    if (layout === 'top' || layout === 'cutMenu') {
      show.value = true
    }
    else {
      if (unref(collapse))
        show.value = false

      else
        show.value = true
    }
  },
)
</script>

<template>
  <div>
    <router-link
      class="relative flex cursor-pointer items-center pl-8px !h-[var(--logo-height)] dark:bg-[var(--el-bg-color)]" :class="[
        prefixCls,
        layout !== 'classic' ? `${prefixCls}__Top` : '',
      ]" to="/"
    >
      <img src="/imgs/logo.png" class="h-[calc(var(--logo-height)-10px)] w-[calc(var(--logo-height)-10px)]">
      <div
        v-if="show" class="ml-10px text-16px font-700" :class="[
          {
            'text-[var(--logo-title-text-color)]': layout === 'classic',
            'text-[var(--top-header-text-color)]':
              layout === 'topLeft' || layout === 'top' || layout === 'cutMenu',
          },
        ]"
      >
        {{ title }}
      </div>
    </router-link>
  </div>
</template>
