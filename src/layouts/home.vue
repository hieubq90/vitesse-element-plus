<script setup lang="ts">
const { toggle, isFullscreen } = useFullscreen()
function toggleFullscreen() {
  toggle()
}

const collapsedMenu = ref(false)
function toggleCollapseMenu() {
  collapsedMenu.value = !collapsedMenu.value
}

const title = import.meta.env.VITE_APP_NAME
</script>

<template>
  <main
    class="min-h-screen w-full bg-[#2b4c81] px-0 py-0"
    style="background-image: linear-gradient(270deg, #3674d1, transparent);"
  >
    <div
      class="h-full w-full"
      style="background: url('/svg/pattern-1.svg') no-repeat center bottom fixed; background-size: cover;"
    >
      <el-container class="h-screen w-full">
        <el-aside class="b-r-1 transition-all !overflow-hidden" :style="`width: ${collapsedMenu ? '64px' : '200px'};`">
          <!-- LOGO -->
          <div class="h-[60px] flex items-center bg-white pl-2">
            <router-link class="h-full w-full flex items-center" to="/">
              <img src="/imgs/logo.png" class="h-10 w-10">
              <span v-show="!collapsedMenu" class="ml-10px text-16px font-semibold transition-all">{{ title }}</span>
            </router-link>
          </div>
          <!-- MENU -->
          <div class="menu-wrapper bg-white transition-all duration-500" :class="[collapsedMenu && 'menu-wrapper__collapsed']">
            <el-menu
              default-active="2"
              class="v-menu !b-r-0"
              :collapse="collapsedMenu"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><div class="i-carbon:license-draft mr-2 text-16px" /></el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item-group>
                  <template #title>
                    <span>Group One</span>
                  </template>
                  <el-menu-item index="1-1">
                    item one
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    item two
                  </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">
                    item three
                  </el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>
                    <span>item four</span>
                  </template>
                  <el-menu-item index="1-4-1">
                    item one
                  </el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><div class="i-carbon:license-draft mr-2 text-16px" /></el-icon>
                <template #title>
                  Navigator Two
                </template>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <el-icon><div class="i-carbon:license-draft mr-2 text-16px" /></el-icon>
                <template #title>
                  Navigator Three
                </template>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><div class="i-carbon:license-draft mr-2 text-16px" /></el-icon>
                <template #title>
                  Navigator Four
                </template>
              </el-menu-item>
            </el-menu>
          </div>
        </el-aside>
        <el-container>
          <el-header class="b-b-1 !p-0">
            <div class="h-full w-full flex justify-between bg-white">
              <div class="tool-header-btn" @click="toggleCollapseMenu">
                <div
                  class="cursor-pointer"
                  :class="collapsedMenu ? 'i-ant-design:menu-unfold-outlined' : 'i-ant-design:menu-fold-outlined'"
                />
              </div>
              <div class="tool-header-btn" @click="toggleFullscreen">
                <div class="h-[18px] w-[18px]" :class="[isFullscreen ? 'i-ant-design:compress-outlined' : 'i-ant-design:expand-outlined']" />
              </div>
            </div>
          </el-header>
          <el-main>
            <RouterView />
          </el-main>
          <el-footer class="!h-[var(--app-footer-height)] !p-0">
            <Footer class="h-full" />
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </main>
</template>

<style lang="scss">
.el-aside {
  max-height: 100vh !important;

  &__collapsed {
    width: 64px !important;
  }
}
</style>

<style lang="scss" scoped>
.menu-wrapper {
  min-height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
