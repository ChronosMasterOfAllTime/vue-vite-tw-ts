import HelloWorld from '@/views/HelloWorld.vue'
import { mountComponent } from '@test/unit/testhelper'
import { VueWrapper } from '@vue/test-utils'
import { NButton } from 'naive-ui'
import { ComponentPublicInstance } from 'vue'

describe('HelloWorld.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance<typeof HelloWorld>>
  beforeEach(() => {
    wrapper = mountComponent<InstanceType<typeof HelloWorld>>(HelloWorld, {
      props: { msg: 'foo bar' }
    })
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  test('should mount', () => {
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true)
  })

  test('should disable button after 60 clicks', async () => {
    const nButton: VueWrapper<InstanceType<typeof NButton>> =
      wrapper.findComponent(NButton)

    expect(nButton.exists()).toBe(true)
    expect(nButton.attributes()).not.toHaveProperty('disabled')

    for (let i = 0; i < 61; i++) {
      ;(nButton.element as HTMLButtonElement).click()
      await wrapper.vm.$nextTick()
    }

    expect(nButton.attributes()).toHaveProperty('disabled')
  })
})
