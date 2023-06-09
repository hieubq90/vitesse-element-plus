import type { VueTypeValidableDef, VueTypesInterface } from 'vue-types'
import { createTypes } from 'vue-types'
import type { CSSProperties } from 'vue'

type PropTypes = VueTypesInterface & {
  readonly style: VueTypeValidableDef<CSSProperties>
}

const propTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  object: undefined,
  integer: undefined,
}) as PropTypes

// see: https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#the-extend-method
propTypes.extend([
  {
    name: 'style',
    getter: true,
    type: [String, Object],
    default: undefined,
  },
])

export { propTypes }
