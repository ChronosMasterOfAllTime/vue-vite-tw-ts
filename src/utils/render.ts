import { getFontAwesomeComponent, IconName } from '@/components'
import { IconProps, NIcon } from 'naive-ui'
import { h, VNodeProps } from 'vue'

type RawProps = VNodeProps & {
  __v_isVNode?: never
  [Symbol.iterator]?: never
} & Record<string, unknown>

export function renderIcon(
  iconName: IconName,
  iconProps: RawProps & IconProps = {}
) {
  return () =>
    h(NIcon, iconProps, {
      default: getFontAwesomeComponent(iconName)
    })
}
