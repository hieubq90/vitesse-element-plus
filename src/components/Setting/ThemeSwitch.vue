<script setup lang="ts">
import { ref } from 'vue'
import { ElSwitch } from 'element-plus'
import { useAppStore } from '~/stores/modules/app'

import Sun from '~icons/emojione-monotone/sun'
import CrescentMoon from '~icons/emojione-monotone/crescent-moon'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('theme-switch')

const appStore = useAppStore()

// 初始化获取是否是暗黑主题
const isDark = ref(appStore.getIsDark)

// 设置switch的背景颜色
const blackColor = 'var(--el-color-black)'

function themeChange(val: string | number | boolean) {
  appStore.setIsDark(val as boolean)
}
</script>

<template>
  <ElSwitch
    v-model="isDark" :class="prefixCls" inline-prompt :border-color="blackColor" :inactive-color="blackColor"
    :active-color="blackColor" :active-icon="Sun" :inactive-icon="CrescentMoon" @change="themeChange"
  />
</template>

<style lang="scss" scoped>
:deep(.el-switch__core .el-switch__inner .is-icon) {
  overflow: visible;
}
</style>
