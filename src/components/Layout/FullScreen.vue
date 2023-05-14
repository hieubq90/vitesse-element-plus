<script setup lang="ts">
import { propTypes } from '~/utils/propTypes'

defineProps({
  color: propTypes.string.def(''),
})

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('screenfull')

const { toggle, isFullscreen } = useFullscreen()

function toggleFullscreen() {
  toggle()
}
</script>

<template>
  <div :class="prefixCls" @click="toggleFullscreen">
    <div class="h-[18px] w-[18px]" :class="[isFullscreen ? 'i-ant-design:compress-outlined' : 'i-ant-design:expand-outlined']" />
  </div>
</template>
