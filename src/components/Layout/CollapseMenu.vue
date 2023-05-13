<script setup lang="ts">
import { useAppStore } from '~/stores/modules/app'
import { propTypes } from '~/utils/propTypes'

defineProps({
  color: propTypes.string.def(''),
})

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('collapse')

const appStore = useAppStore()

const collapse = computed(() => appStore.getCollapse)

function toggleCollapse() {
  const collapsed = unref(collapse)
  appStore.setCollapse(!collapsed)
}
</script>

<template>
  <div :class="prefixCls">
    <div
      class="cursor-pointer"
      :class="collapse ? 'i-ant-design:menu-unfold-outlined' : 'i-ant-design:menu-fold-outlined'" :color="color"
      @click="toggleCollapse"
    />
  </div>
</template>
