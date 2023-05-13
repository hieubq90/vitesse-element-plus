import { createQueryKeys } from '@lukemorales/query-key-factory'
import service from '~/api/http'

import type { LoginBody, TokenData } from '~/types/types'

const PREFIX_PATH = 'auth'

const loginApi = {
  loginFn: async (params: LoginBody) => await service.post<TokenData>(`${PREFIX_PATH}/login`, params),
}

export const authKeys = createQueryKeys('auth', {
  login: (params: LoginBody) => ({
    queryKey: [`${params.email}`],
    queryFn: () => loginApi.loginFn(params),
  }),
})

export default loginApi
