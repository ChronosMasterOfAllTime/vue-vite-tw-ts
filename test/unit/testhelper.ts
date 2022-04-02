import { mount, MountingOptions } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { DefineComponent, Plugin } from 'vue'
import { globalComponents } from '@/components'
import { setActivePinia } from 'pinia'

export function mountComponent<T extends InstanceType<DefineComponent>>(
  component: T,
  options: MountingOptions<T> = { shallow: true }
) {
  const pinia = createTestingPinia({ createSpy: vi.fn })
  setActivePinia(pinia)

  const plugins: Array<Plugin> = [pinia, globalComponents]

  if (options.global?.plugins) {
    options.global.plugins.push(...plugins)
  } else {
    options.global = {
      ...(options.global || {}),
      plugins
    }
  }

  return mount(component, options)
}
