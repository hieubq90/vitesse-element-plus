<script setup lang="ts">
import Modal from './Modal.vue'

interface Props {
  show?: boolean
  title?: string
  schema?: any
  initialValue?: any
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  initialValue: undefined,
})

defineOptions({
  name: 'ModalForm',
})

const submitText = computed(() => {
  if (props.initialValue)
    return 'Lưu'
  return 'Thêm'
})
</script>

<template>
  <Modal
    is-form
    :show="props.show"
    :title="props.title"
    :schema="props.schema"
    :initial-value="props.initialValue"
    :submit-text="submitText"
    class="!rounded-xl"
    submit-type="danger"
    v-bind="$attrs"
  >
    <div class="flex flex-col px-6 pb-8">
      <slot />
    </div>
  </Modal>
</template>
