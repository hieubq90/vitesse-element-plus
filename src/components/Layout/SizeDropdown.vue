<script setup lang="ts">
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import { useAppStore } from '~/stores/modules/app'
import { propTypes } from '~/utils/propTypes'
import type { ElementPlusSize } from '~/types/elementPlus'

defineProps({
  color: propTypes.string.def(''),
})

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('size-dropdown')

const { t } = useI18n()

const appStore = useAppStore()

const sizeMap = computed(() => appStore.sizeMap)

function setCurrentSize(size: ElementPlusSize) {
  appStore.setCurrentSize(size)
}
</script>

<template>
  <ElDropdown :class="prefixCls" trigger="click" @command="setCurrentSize">
    <Icon :size="18" icon="mdi:format-size" :color="color" class="cursor-pointer" />
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem v-for="item in sizeMap" :key="item" :command="item">
          {{ t(`size.${item}`) }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>
