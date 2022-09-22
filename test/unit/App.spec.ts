import App from '@/App.vue'
import router from '@/router'
import HelloWorld from '@/views/HelloWorld.vue'
import { mountComponent } from '@test/unit/testhelper'
import { VueWrapper } from '@vue/test-utils'
import { NConfigProvider, NSwitch } from 'naive-ui'
import { ComponentPublicInstance } from 'vue'

describe('App.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance<typeof App>>
  beforeEach(() => {
    wrapper = mountComponent<InstanceType<typeof App>>(App, {}, {}, true)
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  test('should mount', async () => {
    expect(wrapper.exists()).toBe(true)

    router.push({ name: 'home' })
    await router.isReady()

    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true)
  })
  test('should switch to dark mode', async () => {
    const button = wrapper.findComponent(NSwitch)

    expect(button.exists()).toBe(true)

    button.trigger('click')

    await wrapper.vm.$nextTick()

    const confComp = wrapper.findComponent(NConfigProvider)

    expect(confComp.classes().includes('dark')).toBe(true)
  })
})
