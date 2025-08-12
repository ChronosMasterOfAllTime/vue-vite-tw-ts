import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  IconDefinition,
  library,
  icon,
  Icon
} from '@fortawesome/fontawesome-svg-core'
import { App, h } from 'vue'
import { enumKeys } from '@/types'

export enum IconName {
  Moon = 'faMoon',
  Sun = 'faSun'
}

const icons: Record<IconName, IconDefinition> = {
  [IconName.Moon]: faMoon,
  [IconName.Sun]: faSun
}

/**
 * Gets the fontawesome icon SVG from the icons Map
 * @param name the key to look up the icon
 */
export function getIcon(name: IconName): Icon {
  return icon(icons[name])
}

/**
 * Gets the fontawesome icon SVG from the icons Map
 * @param name the key to look up the icon
 */
export function getIconHTML(name: IconName) {
  return getIcon(name).html?.[0]
}

export function getFontAwesomeComponent(name: IconName) {
  return () => h(FontAwesomeIcon, { icon: getIcon(name) })
}

// place imported fontawesome icons (from @fortawesome/free-solid-svg-icons) as parameters to the library.add() function
library.add(...Object.values<IconDefinition>(icons))

export default {
  install(app: App<Element>): void {
    app.component('FontAwesomeIcon', FontAwesomeIcon)

    for (const name of enumKeys(IconName)) {
      app.component(name, getFontAwesomeComponent(IconName[name]))
    }
  }
}
