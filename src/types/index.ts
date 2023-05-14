// import { type ViteSSGContext } from 'vite-ssg'

// export type UserModule = (ctx: ViteSSGContext) => void

export interface LoginBody {
  email: string
  password: string
  captcha?: string
}

export interface TokenData {
  access_token: string
  token_type: string
}

export interface ErrorData {
  detail?: string
}

export interface DanToc {
  id?: number
  name: string
}
