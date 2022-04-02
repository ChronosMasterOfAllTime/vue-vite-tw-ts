import { mount, MountingOptions } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { DefineComponent } from 'vue'
import { globalComponents } from '@/components'

export function mountComponent<T extends InstanceType<DefineComponent>>(
  component: T,
  options: MountingOptions<T> = { shallow: true }
) {
  if (options.global?.plugins) {
    options.global.plugins.push(createTestingPinia({ createSpy: vi.fn }))
  } else {
    options.global = {
      ...(options.global || {}),
      plugins: [createTestingPinia({ createSpy: vi.fn }), globalComponents]
    }
  }

  return mount(component, options)
}
