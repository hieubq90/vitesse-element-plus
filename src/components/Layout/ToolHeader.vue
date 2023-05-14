<script setup lang="ts">
// import Collapse from './CollapseMenu.vue'
import { useAppStore } from '~/stores/modules/app'

const { getPrefixCls, variables } = useDesign()

const prefixCls = getPrefixCls('tool-header')

const appStore = useAppStore()

// 面包屑
// const breadcrumb = computed(() => appStore.getBreadcrumb)

const hamburger = computed(() => appStore.getHamburger)
const screenfull = computed(() => appStore.getScreenfull)
const size = computed(() => appStore.getSize)
const layout = computed(() => appStore.getLayout)

// 多语言图标
// const locale = computed(() => appStore.getLocale)

defineOptions({
  name: 'ToolHeader2',
  inheritAttrs: false,
})
</script>

<template>
  <div
    :id="`${variables.VNamespace}-tool-header`"
    class="relative h-[var(--top-tool-height)] flex items-center justify-between b-b-1 border-[var(--top-tool-border-color)] b-solid bg-[var(--top-header-bg-color)] px-[var(--top-tool-p-x)] dark:border-[var(--el-border-color)] dark:bg-[var(--el-bg-color)]"
    :class="[
      prefixCls,
    ]"
  >
    <div v-if="layout !== 'top'" class="h-full flex items-center">
      <CollapseMenu v-if="hamburger && layout !== 'cutMenu'" class="tool-header-btn" color="var(--top-header-text-color)" />

      <!-- <Breadcrumb v-if="breadcrumb" class="<md:hidden" /> -->
    </div>
    <div class="h-full flex items-center">
      <FullScreen v-if="screenfull" class="tool-header-btn" color="var(--top-header-text-color)" />
      <SizeDropdown v-if="size" class="tool-header-btn" color="var(--top-header-text-color)" />
      <!-- <LocaleDropdown
        v-if="locale"
        class="hover-trigger"
        color="var(--top-header-text-color)"
      /> -->
      <!-- <UserInfo class="hover-trigger"></UserInfo> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: '#{$VNamespace}-tool-header';

@debug $prefix-cls;

.#{$prefix-cls} {
  transition: left var(--transition-time-02);
}
</style>
