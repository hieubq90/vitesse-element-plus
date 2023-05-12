<script setup lang="ts">
import { ElLoading } from 'element-plus'
import { loadLanguageAsync } from '~/modules/i18n'

defineOptions({
  name: 'IndexPage',
})

const router = useRouter()
const { t, locale } = useI18n()
const authPath = import.meta.env.VITE_AUTH_PATH

async function showLoading() {
  await loadLanguageAsync(locale.value || 'vi')
  const loading = ElLoading.service({
    lock: true,
    text: `${t('global.loading')}`,
    background: 'transparent',
    customClass: 'text-white',
  })

  setTimeout(async () => {
    loading.close()
    router.push(authPath)
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
