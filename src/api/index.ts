import { mergeQueryKeys } from '@lukemorales/query-key-factory'
import { authKeys } from './modules/authApi'
import { danTocKeys } from './modules/danTocApi'

export { default as service, setRequestHeader } from '~/api/http'

export const queryKeys = mergeQueryKeys(authKeys, danTocKeys)
