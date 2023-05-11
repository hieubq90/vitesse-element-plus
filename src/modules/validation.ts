import { configure, defineRule } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import AllRules from '@vee-validate/rules'
import en from '@vee-validate/i18n/dist/locale/en.json'
import vi from '@vee-validate/i18n/dist/locale/vi.json'
import { type UserModule } from '~/types'

export function defineRules() {
  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule])
  })
  defineRule('minMax', (value: any, [min, max]: [number, number]) => {
  // The field is empty so it should pass
    if (!value || !value.length)
      return true

    const numericValue = Number(value)
    if (numericValue < min)
      return `This field must be greater than ${min}`

    if (numericValue > max)
      return `This field must be less than ${max}`

    return true
  })
}

export function configVeeValidate() {
  configure({
    generateMessage: localize({
      en: {
        ...en,
        names: {
          // bổ sung tên các field vào đây
          email: 'Email',
          password: 'Password',
        },
      },
      vi: {
        ...vi,
        names: {
          // bổ sung tên các field vào đây
          email: 'Email',
          password: 'Mật khẩu',
        },
      },
    }),
  })
}

export const install: UserModule = () => {
  // defineRules()
  // configVeeValidate()
}
