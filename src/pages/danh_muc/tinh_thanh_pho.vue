<script setup lang="ts">
import { ElMessage } from 'element-plus'

defineProps<{ msg: string }>()
defineOptions({
  name: 'QLTinhThanhPho',
})

const count = ref(0)
const curDate = ref('')
function toast() {
  ElMessage.success('Hello')
}
</script>

<template>
  <div class="h-full">
    <p>QL Tỉnh Thành phố</p>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <div class="mb-4">
      <el-button size="large" @click="toast">
        El Message
      </el-button>
    </div>
    <div class="my-2 flex flex-wrap items-center justify-center text-center">
      <el-button @click="count++">
        count is: {{ count }}
      </el-button>
      <el-button type="primary" @click="count++">
        count is: {{ count }}
      </el-button>
      <el-button type="success" @click="count++">
        count is: {{ count }}
      </el-button>
      <el-button type="warning" @click="count++">
        count is: {{ count }}
      </el-button>
      <el-button type="danger" @click="count++">
        count is: {{ count }}
      </el-button>
      <el-button type="info" @click="count++">
        count is: {{ count }}
      </el-button>
    </div>

    <div class="flex flex-row items-center justify-center">
      <InputWithValidation label="" name="fullName" :transparent="false" />
      <el-date-picker v-model="curDate" class="mb-4 ml-2" type="date" placeholder="Pick a day" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
