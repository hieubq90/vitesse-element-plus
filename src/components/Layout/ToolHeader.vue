<script lang="tsx">
import { computed, defineComponent } from 'vue'
import Collapse from './CollapseMenu.vue'

// import { LocaleDropdown } from '@/components/LocaleDropdown'
// import { SizeDropdown } from '@/components/SizeDropdown'
// import { UserInfo } from '@/components/UserInfo'
// import { Screenfull } from '@/components/Screenfull'
import { useAppStore } from '~/stores/modules/app'

const { getPrefixCls, variables } = useDesign()

const prefixCls = getPrefixCls('tool-header')

const appStore = useAppStore()

// 面包屑
// const breadcrumb = computed(() => appStore.getBreadcrumb)

// 折叠图标
const hamburger = computed(() => appStore.getHamburger)

// 全屏图标
const screenfull = computed(() => appStore.getScreenfull)

// 尺寸图标
const size = computed(() => appStore.getSize)

// 布局
const layout = computed(() => appStore.getLayout)

// 多语言图标
// const locale = computed(() => appStore.getLocale)

export default defineComponent({
  name: 'ToolHeader',
  setup() {
    return () => (
      <div
        id={`${variables.VNamespace}-tool-header`}
        class={[
          prefixCls,
          'h-[var(--top-tool-height)] relative px-[var(--top-tool-p-x)] flex items-center justify-between',
          'dark:bg-[var(--el-bg-color)]',
        ]}
      >
        {layout.value !== 'top'
          ? (
          <div class="h-full flex items-center">
            {(hamburger.value && layout.value !== 'cutMenu')
              ? (
              <Collapse class="hover-trigger" color="var(--top-header-text-color)"></Collapse>
                )
              : undefined}
            {/* {breadcrumb.value ? <Breadcrumb class="<md:hidden"></Breadcrumb> : undefined} */}
          </div>
            )
          : undefined}
        <div class="h-full flex items-center">
          {screenfull.value
            ? (
                {/* <Screenfull class="hover-trigger" color="var(--top-header-text-color)"></Screenfull> */}
              )
            : undefined}
          {size.value
            ? (
                {/* <SizeDropdown class="hover-trigger" color="var(--top-header-text-color)"></SizeDropdown> */}
              )
            : undefined}
          {/* {locale.value
            ? (
            <LocaleDropdown
              class="hover-trigger"
              color="var(--top-header-text-color)"
            ></LocaleDropdown>
              )
            : undefined} */}
          {/* <UserInfo class="hover-trigger"></UserInfo> */}
        </div>
      </div>
    )
  },
})
</script>

<style lang="scss" scoped>
$prefix-cls: '#{$VNamespace}-tool-header';

@debug $prefix-cls;

.#{$prefix-cls} {
  transition: left var(--transition-time-02);
}
</style>
