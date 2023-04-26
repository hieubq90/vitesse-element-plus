<script setup lang="ts">
import { useField } from 'vee-validate'
import { toRef } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  transparent: {
    type: Boolean,
    default: false,
    required: false,
  },
})

const { value, errorMessage } = useField<string>(toRef(props, 'name'))
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <el-form-item :error="errorMessage" :label="label" class="w-[200px]" :class="[transparent && 'transparent-input']">
    <el-input v-model="value" :placeholder="label" v-bind="$attrs" :validate-event="false" />
  </el-form-item>
</template>

<style scoped lang="scss">
</style>
