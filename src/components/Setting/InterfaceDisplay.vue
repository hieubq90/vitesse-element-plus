<script setup lang="ts">
import { ElMessage, ElSwitch } from 'element-plus'
import { useAppStore } from '~/stores/modules/app'
import { setCssVar } from '~/utils'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('interface-display')

const appStore = useAppStore()

const { t } = useI18n()

// 面包屑
const breadcrumb = ref(appStore.getBreadcrumb)

function breadcrumbChange(show: string | number | boolean) {
  appStore.setBreadcrumb(show as boolean)
}

// 面包屑图标
const breadcrumbIcon = ref(appStore.getBreadcrumbIcon)

function breadcrumbIconChange(show: string | number | boolean) {
  appStore.setBreadcrumbIcon(show as boolean)
}

// 折叠图标
const hamburger = ref(appStore.getHamburger)

function hamburgerChange(show: string | number | boolean) {
  appStore.setHamburger(show as boolean)
}

// 全屏图标
const screenfull = ref(appStore.getScreenfull)

function screenfullChange(show: string | number | boolean) {
  appStore.setScreenfull(show as boolean as boolean)
}

// 尺寸图标
const size = ref(appStore.getSize)

function sizeChange(show: string | number | boolean) {
  appStore.setSize(show as boolean)
}

// 多语言图标
const locale = ref(appStore.getLocale)

function localeChange(show: string | number | boolean) {
  appStore.setLocale(show as boolean)
}

// 标签页
const tagsView = ref(appStore.getTagsView)

function tagsViewChange(show: string | number | boolean) {
  // 切换标签栏显示时，同步切换标签栏的高度
  setCssVar('--tags-view-height', show ? '35px' : '0px')
  appStore.setTagsView(show as boolean)
}

// 标签页图标
const tagsViewIcon = ref(appStore.getTagsViewIcon)

function tagsViewIconChange(show: string | number | boolean) {
  appStore.setTagsViewIcon(show as boolean)
}

// logo
const logo = ref(appStore.getLogo)

function logoChange(show: string | number | boolean) {
  appStore.setLogo(show as boolean)
}

// 菜单手风琴
const uniqueOpened = ref(appStore.getUniqueOpened)

function uniqueOpenedChange(uniqueOpened: string | number | boolean) {
  appStore.setUniqueOpened(uniqueOpened as boolean)
}

// 固定头部
const fixedHeader = ref(appStore.getFixedHeader)

function fixedHeaderChange(show: string | number | boolean) {
  appStore.setFixedHeader(show as boolean)
}

// 页脚
const footer = ref(appStore.getFooter)

function footerChange(show: string | number | boolean) {
  appStore.setFooter(show as boolean)
}

// 灰色模式
const greyMode = ref(appStore.getGreyMode)

function greyModeChange(show: string | number | boolean) {
  appStore.setGreyMode(show as boolean)
}

// 动态路由
const dynamicRouter = ref(appStore.getDynamicRouter)

function dynamicRouterChange(show: string | number | boolean) {
  ElMessage.info(t('setting.reExperienced'))
  appStore.setDynamicRouter(show as boolean)
}

// 固定菜单
const fixedMenu = ref(appStore.getFixedMenu)

function fixedMenuChange(show: string | number | boolean) {
  appStore.setFixedMenu(show as boolean)
}

const layout = computed(() => appStore.getLayout)

watch(
  () => layout.value,
  (n) => {
    if (n === 'top')
      appStore.setCollapse(false)
  },
)
</script>

<template>
  <div :class="prefixCls">
    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.breadcrumb') }}</span>
      <ElSwitch v-model="breadcrumb" @change="breadcrumbChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.breadcrumbIcon') }}</span>
      <ElSwitch v-model="breadcrumbIcon" @change="breadcrumbIconChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.hamburgerIcon') }}</span>
      <ElSwitch v-model="hamburger" @change="hamburgerChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.screenfullIcon') }}</span>
      <ElSwitch v-model="screenfull" @change="screenfullChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.sizeIcon') }}</span>
      <ElSwitch v-model="size" @change="sizeChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.localeIcon') }}</span>
      <ElSwitch v-model="locale" @change="localeChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.tagsView') }}</span>
      <ElSwitch v-model="tagsView" @change="tagsViewChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.tagsViewIcon') }}</span>
      <ElSwitch v-model="tagsViewIcon" @change="tagsViewIconChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.logo') }}</span>
      <ElSwitch v-model="logo" @change="logoChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.uniqueOpened') }}</span>
      <ElSwitch v-model="uniqueOpened" @change="uniqueOpenedChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.fixedHeader') }}</span>
      <ElSwitch v-model="fixedHeader" @change="fixedHeaderChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.footer') }}</span>
      <ElSwitch v-model="footer" @change="footerChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.greyMode') }}</span>
      <ElSwitch v-model="greyMode" @change="greyModeChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.dynamicRouter') }}</span>
      <ElSwitch v-model="dynamicRouter" @change="dynamicRouterChange" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-14px">{{ t('setting.fixedMenu') }}</span>
      <ElSwitch v-model="fixedMenu" @change="fixedMenuChange" />
    </div>
  </div>
</template>
