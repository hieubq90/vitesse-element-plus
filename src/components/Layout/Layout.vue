<!-- eslint-disable no-case-declarations -->
<script lang="tsx">
import { useRenderLayout } from './useRenderLayout'
import { useAppStore } from '~/stores/modules/app'
import Backtop from '~/components/Backtop/Backtop.vue'
import Setting from '~/components/Setting/Setting.vue'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout')

const appStore = useAppStore()

const mobile = computed(() => appStore.getMobile)

const collapse = computed(() => appStore.getCollapse)

const layout = computed(() => appStore.getLayout)

function handleClickOutside() {
  appStore.setCollapse(true)
}

function renderLayout() {
  switch (unref(layout)) {
    case 'classic':
      const { renderClassic } = useRenderLayout()
      return renderClassic()
    case 'topLeft':
      const { renderTopLeft } = useRenderLayout()
      return renderTopLeft()
    case 'top':
      const { renderTop } = useRenderLayout()
      return renderTop()
    case 'cutMenu':
      const { renderCutMenu } = useRenderLayout()
      return renderCutMenu()
    default:
      break
  }
}

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
      <section
        class={[prefixCls, `${prefixCls}__${layout.value}`, 'min-h-screen w-full relative']}
      >
        {(mobile.value && !collapse.value)
          ? (
          <div
            class="absolute left-0 top-0 z-99 h-full w-full bg-[var(--el-color-black)] opacity-30"
            onClick={handleClickOutside}
          ></div>
            )
          : null}

        {renderLayout()}

        <Backtop />
        <Setting />
      </section>
    )
  },
})
</script>

<style lang="scss" scoped>
$prefix-cls: '#{$VNamespace}-layout';

.#{$prefix-cls} {
  background-color: var(--app-content-bg-color);

  :deep(.#{$ELNamespace}-scrollbar__view) {
    height: 100% !important;
  }
}
</style>
