import type { RouteMeta } from 'vue-router'

export function useRenderMenuTitle() {
  const renderMenuTitle = (meta: RouteMeta) => {
    const { t } = useI18n()
    const { title = 'Please set title', icon } = meta

    return icon
      ? (
      <>
        <i class={meta.icon}></i>
        <span class="v-menu__title">{t(title as string)}</span>
      </>
        )
      : (
      <span class="v-menu__title">{t(title as string)}</span>
        )
  }

  return {
    renderMenuTitle,
  }
}
