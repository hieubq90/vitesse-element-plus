<script setup lang="ts">
import Modal from './Modal.vue'

interface Props {
  show?: boolean
  title?: string
  icon?: string
  iconColor?: string
  message?: string
  cancelText?: string
  submitText?: string
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  icon: 'fal fa-exclamation-triangle',
  iconColor: '',
  cancelText: 'Huỷ',
  submitText: 'Đồng ý',
})

defineOptions({
  name: 'ModalConfirm',
})
</script>

<template>
  <Modal
    :show="props.show"
    :title="props.title"
    :cancel-text="props.cancelText"
    :submit-text="props.submitText"
    width="400px"
    class="!rounded-xl"
    submit-type="danger"
    v-bind="$attrs"
  >
    <div class="flex flex-col px-6">
      <div class="mb-8 flex items-center">
        <el-icon :size="64" :color="props.iconColor">
          <div :class="[props.icon]" />
        </el-icon>
        <p v-if="message" class="ml-4">
          {{ message }}
        </p>
      </div>
    </div>
  </Modal>
</template>
