<script setup lang="ts">
import { ElLoading } from 'element-plus'
import { loadLanguageAsync } from '~/modules/i18n'

defineOptions({
  name: 'IndexPage',
})

const router = useRouter()
const { t, locale } = useI18n()

async function showLoading() {
  await loadLanguageAsync(locale.value || 'vi')
  const loading = ElLoading.service({
    lock: true,
    text: `${t('global.loading')}`,
    background: 'rgba(0, 0, 0, 0.7)',
  })

  setTimeout(async () => {
    loading.close()
    router.push('/dashboard')
  }, 1000)
}

onMounted(async () => {
  await showLoading()
})
</script>

<template>
  <div />
</template>

<route lang="yaml">
meta:
  layout: default
</route>
