<script setup lang="ts">
import { useAppStore } from '~/stores/modules/app'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout-radio-picker')

const appStore = useAppStore()

const layout = computed(() => appStore.getLayout)
</script>

<template>
  <div :class="prefixCls" class="flex flex-wrap space-x-14px">
    <div
      class="relative h-48px w-56px cursor-pointer bg-gray-300" :class="[
        `${prefixCls}__classic`,
        {
          'is-acitve': layout === 'classic',
        },
      ]" @click="appStore.setLayout('classic')"
    />
    <div
      class="relative h-48px w-56px cursor-pointer bg-gray-300" :class="[
        `${prefixCls}__top-left`,
        {
          'is-acitve': layout === 'topLeft',
        },
      ]" @click="appStore.setLayout('topLeft')"
    />
    <div
      class="relative h-48px w-56px cursor-pointer bg-gray-300" :class="[
        `${prefixCls}__top`,
        {
          'is-acitve': layout === 'top',
        },
      ]" @click="appStore.setLayout('top')"
    />
    <div
      class="relative h-48px w-56px cursor-pointer bg-gray-300" :class="[
        `${prefixCls}__cut-menu`,
        {
          'is-acitve': layout === 'cutMenu',
        },
      ]" @click="appStore.setLayout('cutMenu')"
    >
      <div class="absolute left-[10%] top-0 h-full w-[33%] bg-gray-200" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: '#{$VNamespace}-layout-radio-picker';

.#{$prefix-cls} {
  &__classic {
    border: 2px solid #e5e7eb;
    border-radius: 4px;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 33%;
      height: 100%;
      background-color: #273352;
      border-radius: 4px 0 0 4px;
      content: '';
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 25%;
      background-color: #fff;
      border-radius: 4px 4px 0 4px;
      content: '';
    }
  }

  &__top-left {
    border: 2px solid #e5e7eb;
    border-radius: 4px;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 33%;
      background-color: #273352;
      border-radius: 4px 4px 0 0;
      content: '';
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 33%;
      height: 100%;
      background-color: #fff;
      border-radius: 4px 0 0 4px;
      content: '';
    }
  }

  &__top {
    border: 2px solid #e5e7eb;
    border-radius: 4px;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 33%;
      background-color: #273352;
      border-radius: 4px 4px 0 0;
      content: '';
    }
  }

  &__cut-menu {
    border: 2px solid #e5e7eb;
    border-radius: 4px;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 33%;
      background-color: #273352;
      border-radius: 4px 4px 0 0;
      content: '';
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
      border-radius: 4px 0 0 4px;
      content: '';
    }
  }

  .is-acitve {
    border-color: var(--el-color-primary);
  }
}
</style>
