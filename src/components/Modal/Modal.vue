<script setup lang="ts">
import { Form } from 'vee-validate'
import type { ElementPlusInfoType } from '~/types/elementPlus'

interface Props {
  show?: boolean
  title?: string
  schema?: any
  initialValue?: any
  isForm?: boolean
  cancelText?: string
  submitText?: string
  submitType?: ElementPlusInfoType
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  isForm: false,
  cancelText: 'Huỷ',
  submitText: 'Đồng ý',
  submitType: 'primary',
})

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'submit', data?: any): void
}>()

defineOptions({
  name: 'Modal',
})

function onCancel() {
  emit('cancel')
}

function onSubmit(values: any, actions: any) {
  if (!props.isForm.value && (values instanceof Event)) {
    emit('submit', values)
  }
  else if (props.isForm.value && !(values instanceof Event)) {
    emit('submit', values)
    actions.resetForm()
  }
}
</script>

<template>
  <el-dialog
    :model-value="props.show"
    :title="props.title"
    :before-close="onCancel"
    v-bind="$attrs"
  >
    <!-- Form Modal -->
    <Form v-if="props.isForm" v-slot="{ handleSubmit, errors }" class="w-full" :validation-schema="schema" :initial-values="props.initialValue">
      <ElForm label-position="top" size="large" @submit.prevent="handleSubmit($event, onSubmit)">
        <slot />
        <div class="flex justify-end">
          <el-button @click="onCancel">
            {{ props.cancelText }}
          </el-button>
          <el-button
            native-type="submit"
            :type="props.submitType"
            :disabled="Object.keys(errors).length > 0"
            @click="onSubmit"
          >
            {{ props.submitText }}
          </el-button>
        </div>
      </ElForm>
    </Form>
    <!-- Confirm Modal -->
    <div v-else>
      <slot />
      <div class="flex justify-end">
        <el-button @click="onCancel">
          {{ props.cancelText }}
        </el-button>
        <el-button
          native-type="submit"
          :type="props.submitType"

          @click="onSubmit"
        >
          {{ props.submitText }}
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>
