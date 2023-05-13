import { inject } from 'vue'
import type { ConfigGlobalTypes } from '~/types/configGlobal'

export function useConfigGlobal() {
  const configGlobal = inject('configGlobal', {}) as ConfigGlobalTypes

  return {
    configGlobal,
  }
}
