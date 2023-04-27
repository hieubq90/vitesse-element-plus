<script setup lang="ts">
import { Form } from 'vee-validate'

defineOptions({
  name: 'AuthenticationPage',
})

const router = useRouter()
const { t } = useI18n()

const schema = {
  email: 'required|email',
  password: 'required|min:8',
}

function onSubmit(values: any, actions: any) {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(values, null, 2))
  actions.resetForm()
  router.push('/dashboard')
}
</script>

<template>
  <div class="min-h-screen flex flex-row items-center bg-transparent">
    <div class="auth-card">
      <p class="auth-card__title">
        {{ t('auth.title') }}
      </p>
      <Form v-slot="{ handleSubmit }" class="w-full" :validation-schema="schema">
        <el-form label-position="top" size="large" @submit="handleSubmit($event, onSubmit)">
          <InputWithValidation :label="t('global.email')" name="email" type="email" transparent />
          <InputWithValidation :label="t('global.password')" name="password" type="password" transparent />
          <div class="mb-8 flex flex-row items-center justify-center">
            <el-button class="uppercase" type="primary" native-type="submit">
              {{ t('auth.login') }}
            </el-button>
          </div>
        </el-form>
      </Form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-card {
  @apply b-solid b-2 b-white b-opacity-20 rounded-lg backdrop-blur-lg;
  @apply px-6 py-4 mx-auto w-[400px];
  @apply flex flex-col items-center;

  &__title {
    @apply uppercase text-3xl text-white;
  }
}
</style>

<route lang="yaml">
meta:
  layout: auth
</route>
