<script lang="ts" setup>
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})

const { value, errorMessage } = useField(toRef(props, 'name'), undefined, {
  type: 'checkbox',
  valueProp: true, // the default "checked" value
  uncheckedValue: false,
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <el-form-item :error="errorMessage">
    <el-checkbox v-model="value" v-bind="$attrs">
      {{ label }}
    </el-checkbox>
  </el-form-item>
</template>
