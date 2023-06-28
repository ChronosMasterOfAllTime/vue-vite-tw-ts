import { globalComponents } from '@/components'
import router from '@/router'
import { ComponentMountingOptions, mount } from '@vue/test-utils'
import { createTestingPinia, TestingOptions } from '@pinia/testing'
import { ComponentPublicInstance, Plugin } from 'vue'
import { createPinia, setActivePinia } from 'pinia'

export function mountComponent<T extends ComponentPublicInstance>(
  component: T,
  options: ComponentMountingOptions<T> = { shallow: false },
  mockStore?: TestingOptions,
  useRouter = false
) {
  const pinia = mockStore
    ? createTestingPinia({ createSpy: vi.fn, ...mockStore })
    : createPinia()
  setActivePinia(pinia)

  const plugins: Array<Plugin> = [pinia, globalComponents]

  if (useRouter) {
    plugins.push(router)
  }

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
