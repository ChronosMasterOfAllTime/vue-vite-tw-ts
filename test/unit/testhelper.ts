import { mount, MountingOptions } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { ComponentPublicInstance, Plugin } from 'vue'
import { globalComponents } from '@/components'
import { createPinia, setActivePinia } from 'pinia'

export function mountComponent<T extends ComponentPublicInstance>(
  component: T,
  options: MountingOptions<T> = { shallow: false },
  mockStore = false
) {
  const pinia = mockStore
    ? createTestingPinia({ createSpy: vi.fn })
    : createPinia()
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

  return mount<T>(component, options)
}
