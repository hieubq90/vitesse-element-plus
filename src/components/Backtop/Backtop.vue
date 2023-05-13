<script setup lang="ts">
import { ElBacktop } from 'element-plus'

const { getPrefixCls, variables } = useDesign()

const prefixCls = getPrefixCls('backtop')
</script>

<template>
  <ElBacktop
    :class="`${prefixCls}-backtop`"
    :target="`.${variables.VNamespace}-layout-content-scrollbar .${variables.ELNamespace}-scrollbar__wrap`"
  />
</template>
