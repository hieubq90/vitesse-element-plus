<script setup lang="ts">
import { propTypes } from '~/utils/propTypes'

const props = defineProps({
  schema: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  modelValue: propTypes.string.def(''),
})

const emit = defineEmits(['update:modelValue', 'change'])

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('color-radio-picker')

const colorVal = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val: string) => {
    if (val === unref(colorVal))
      return
    colorVal.value = val
  },
)

// 监听
watch(
  () => colorVal.value,
  (val: string) => {
    emit('update:modelValue', val)
    emit('change', val)
  },
)
</script>

<template>
  <div :class="prefixCls" class="flex flex-wrap space-x-14px">
    <span
      v-for="(item, i) in schema" :key="`radio-${i}`"
      class="mb-5px h-20px w-20px cursor-pointer border-2px border-gray-300 rounded-2px border-solid text-center leading-20px"
      :class="{ 'is-active': colorVal === item }" :style="{
        background: item,
      }" @click="colorVal = item"
    >
      <div v-if="colorVal === item" class="i-ep:check h-4 w-4 text-white" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: '#{$VNamespace}-color-radio-picker';

.#{$prefix-cls} {
  .is-active {
    border-color: var(--el-color-primary);
  }
}
</style>
