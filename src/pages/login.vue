<script setup lang="ts">
import { Form } from 'vee-validate'

defineOptions({
  name: 'LoginPage',
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
  <!-- Main Container -->
  <div class="mx-auto min-h-screen flex items-center justify-center px-3 container">
    <!-- Login Container -->
    <div class="grid grid-cols-1 w-[930px] border rounded-[30px] bg-white p-3 shadow md:grid-cols-2 sm:m-y[0px] sm:mx-[10px]">
      <!--------------------------- Left Box ----------------------------->
      <div class="h-[100px] flex flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#103cbe] md:h-auto">
        <div class="featured-image mb-3">
          <img src="/imgs/1.png" class="img-fluid w-[250px]">
        </div>
        <p class="fs-2 font-semibold text-white">
          Be Verified
        </p>
        <small class="text-wrap w-[17rem] text-center text-white">Join experienced Designers on this platform.</small>
      </div>
      <!--------------------------- Right Box ----------------------------->
      <div class="p-[40px] p-r-[30px] sm:p-[20px]">
        <div class="row align-items-center">
          <div class="mb-4">
            <h2 class="text-2xl font-bold capitalize">
              tên ứng dụng
            </h2>
            <p>Đăng nhập vào hệ thống.</p>
          </div>
          <!--------------------------- Remember & Forgot ----------------------------->
          <Form v-slot="{ handleSubmit }" class="w-full" :validation-schema="schema">
            <el-form label-position="top" size="large" @submit="handleSubmit($event, onSubmit)">
              <InputWithValidation :label="t('global.email')" name="email" type="email" prefix-icon="i-ep-add-location" />
              <InputWithValidation :label="t('global.password')" name="password" type="password" />
              <div class="mb-8 flex flex-row items-center justify-center">
                <el-button class="uppercase" type="primary" native-type="submit">
                  <el-icon style="vertical-align: middle">
                    <i-ep-add-location />
                  </el-icon>
                  {{ t('auth.login') }}
                </el-button>
              </div>
            </el-form>
          </Form>
          <div class="mb-5 flex justify-between">
            <div class="form-check">
              <input id="formCheck" type="checkbox" class="form-check-input">
              <label for="formCheck" class="form-check-label text-secondary"><small>Lưu tài khoản</small></label>
            </div>
            <div class="forgot">
              <small><a href="#" class="hover:underline">Quên mật khẩu?</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="min-h-screen flex flex-row items-center bg-transparent">
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
  </div> -->
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
