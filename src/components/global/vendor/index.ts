import naive from './naive'
import icons, {
  getFontAwesomeComponent,
  getIcon,
  getIconHTML,
  IconName
} from './icons'
import { Plugin } from 'vue'

export default [naive, icons] as Array<Plugin>

export { getFontAwesomeComponent, getIcon, getIconHTML, IconName }
