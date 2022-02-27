import { mount, MountingOptions } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

export function mountComponent<T>(
  component: T,
  options: MountingOptions<any> = { shallow: true }
) {
  if (options.global?.plugins) {
    options.global.plugins.push(createTestingPinia({ createSpy: vi.fn }))
  } else {
    options.global = {
      ...(options.global || {}),
      plugins: [createTestingPinia({ createSpy: vi.fn })]
    }
  }

  return mount(component, options)
}
