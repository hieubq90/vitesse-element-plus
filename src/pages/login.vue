<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { Form } from 'vee-validate'
import { useMutation } from '@tanstack/vue-query'
import CarbonAt from '~icons/carbon/at'
import CarbonPassword from '~icons/carbon/password'

import authApi from '~/api/modules/authApi'
import type { TokenData } from '~/types'
import { setRequestHeader } from '~/api'

defineOptions({
  name: 'LoginPage',
})
const appName = import.meta.env.VITE_APP_NAME
const appDesc = import.meta.env.VITE_APP_DESC

const router = useRouter()
const { t } = useI18n()

const schema = {
  email: 'required|email',
  password: 'required|min:6',
}

const savedAccount = ref<any | undefined>(undefined)

const loginHandler = useMutation({
  mutationFn: authApi.loginFn,
  onSuccess: (data, _variables) => {
    // data là response data
    ElMessage.success('Đăng nhập thành công')
    const { access_token } = data as TokenData
    setRequestHeader('Authorization', `Bearer ${access_token}`)

    const { remember } = _variables as any
    if (remember) {
      // lưu thông tin username vào local storage
      localStorage.setItem('saved_email', _variables.email)
      localStorage.setItem('remember_account', remember)
    }
    else {
      localStorage.removeItem('saved_email')
      localStorage.removeItem('remember_account')
    }
    setTimeout(() => router.push('/dashboard'), 500)
  },
  onError: (_error, _variables) => {
    // _error là error response data
    // _variables là body gửi lên
  },
})

function onSubmit(values: any, actions: any) {
  loginHandler.mutateAsync(values)
  actions.resetForm()
}

onMounted(() => {
  const email = useStorage('saved_email', undefined, localStorage)
  const remember = useStorage('remember_account', false, localStorage)
  if (remember.value) {
    savedAccount.value = {
      email: email.value,
      remember: true,
    }
  }
})

useHead({
  title: 'Đăng nhập',
})
</script>

<template>
  <!-- Main Container -->
  <div class="mx-auto min-h-screen flex items-center justify-center px-3 container">
    <!-- Login Container -->
    <div class="grid grid-cols-1 w-[930px] border rounded-[30px] bg-white p-3 shadow-lg md:grid-cols-2 sm:m-y[0px] sm:mx-[10px] hover:shadow-2xl">
      <!--------------------------- Left Box ----------------------------->
      <div class="left-box h-[100px] flex flex-col items-center justify-center overflow-hidden rounded-[20px] md:h-auto">
        <div class="left-box-bg h-full w-full flex flex-col items-center justify-center overflow-hidden rounded-[20px]">
          <div class="featured-image mb-3">
            <img src="/imgs/1.png" class="img-fluid w-[250px]">
          </div>
          <p class="my-5 text-4xl font-semibold text-white">
            {{ appName }}
          </p>
          <small class="text-wrap w-[17rem] text-center text-white">{{ appDesc }}</small>
        </div>
      </div>
      <!--------------------------- Right Box ----------------------------->
      <div class="p-[40px] p-r-[30px] sm:p-[20px]">
        <div class="row align-items-center">
          <div class="mb-6 pt-2">
            <h2 class="mb-2 text-3xl font-bold capitalize">
              {{ appName }}
            </h2>
            <p>Đăng nhập vào hệ thống.</p>
          </div>
          <!--------------------------- Remember & Forgot ----------------------------->
          <Form v-slot="{ handleSubmit }" class="w-full" :validation-schema="schema" :initial-values="savedAccount">
            <ElForm label-position="top" size="large" @submit="handleSubmit($event, onSubmit)">
              <InputWithValidation :label="t('global.email')" name="email" type="email" :prefix-icon="CarbonAt" autocomplete="off" />
              <InputWithValidation :label="t('global.password')" name="password" type="password" :prefix-icon="CarbonPassword" />
              <div class="flex items-center justify-between">
                <CheckboxWithValidation :label="t('global.remember')" name="remember" />
                <div class="mb-[22px] flex items-center">
                  <small><a href="#" class="hover:underline">Quên mật khẩu?</a></small>
                </div>
              </div>
              <div class="mb-8 flex flex-row items-center justify-center">
                <ElButton class="w-full uppercase" type="primary" native-type="submit" :loading="loginHandler.isLoading.value" :disabled="loginHandler.isLoading.value">
                  <span class="flex items-baseline">
                    <i class="fal fa-shield-check mr-2" />
                    {{ t('auth.login') }}
                  </span>
                </ElButton>
              </div>
            </ElForm>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-box {
    @apply bg-[#2b4c81];
    background-image: linear-gradient(270deg, #3674d1, transparent);

    .left-box-bg {
      background: url('/svg/pattern-1.svg') no-repeat center bottom fixed;
      background-size: cover;
    }
}
</style>

<route lang="yaml">
meta:
  layout: auth
</route>
