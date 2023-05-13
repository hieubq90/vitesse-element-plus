import { ElMenuItem, ElSubMenu } from 'element-plus'
import type { RouteMeta } from 'vue-router'
import { hasOneShowingChild } from './helper'
import { useRenderMenuTitle } from './useRenderMenuTitle'
import { isUrl } from '~/utils/is'
import { pathResolve } from '~/utils/routerHelper'

export function useRenderMenuItem(menuMode: 'vertical' | 'horizontal') {
  const renderMenuItem = (routers: AppRouteRecordRaw[], parentPath = '/') => {
    const _ret = routers.map((v) => {
      const meta = (v.meta ?? {}) as RouteMeta
      if (!meta.hidden) {
        const { oneShowingChild, onlyOneChild } = hasOneShowingChild(v.children, v)
        const fullPath = isUrl(v.path) ? v.path : pathResolve(parentPath, v.path) // getAllParentPath<AppRouteRecordRaw>(allRouters, v.path).join('/')

        const { renderMenuTitle } = useRenderMenuTitle()

        if (
          oneShowingChild
          && (!onlyOneChild?.children || onlyOneChild?.noShowingChildren)
          && !meta?.alwaysShow
        ) {
          return (
            <ElMenuItem index={onlyOneChild ? pathResolve(fullPath, onlyOneChild.path) : fullPath}>
              {{
                default: () => renderMenuTitle(onlyOneChild ? onlyOneChild?.meta : meta),
              }}
            </ElMenuItem>
          )
        }
        else {
          const { getPrefixCls } = useDesign()

          const preFixCls = getPrefixCls('menu-popper')
          return (
            <ElSubMenu
              index={fullPath}
              popperClass={
                menuMode === 'vertical' ? `${preFixCls}--vertical` : `${preFixCls}--horizontal`
              }
            >
              {{
                title: () => renderMenuTitle(meta),
                default: () => renderMenuItem(v.children!, fullPath),
              }}
            </ElSubMenu>
          )
        }
      }
      else {
        return undefined
      }
    })
    return _ret.filter((item: any) => item !== undefined)
  }

  return {
    renderMenuItem,
  }
}
