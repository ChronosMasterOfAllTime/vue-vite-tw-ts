import HelloWorld from '@/views/HelloWorld.vue'
import { mountComponent } from '@test/unit/testhelper'
import { VueWrapper } from '@vue/test-utils'
import { NButton } from 'naive-ui'

describe('HelloWorld.vue', () => {
  let wrapper: VueWrapper<InstanceType<typeof HelloWorld>>
  beforeEach(() => {
    wrapper = mountComponent<InstanceType<typeof HelloWorld>>(HelloWorld, {
      props: { msg: 'foo bar' },
      shallow: false
    })
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  test('should mount', () => {
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true)
  })

  test('should click a button', async () => {
    let nButton = wrapper.findComponent(NButton)

    expect(nButton.exists()).toBe(true)

    for (let i = 0; i < 61; i++) {
      nButton.trigger('click')
      await wrapper.vm.$nextTick()
    }

    // nButton = wrapper.findComponent(NButton)

    // expect(wrapper.vm.main.incrementCounter).toHaveBeenCalledTimes(30)
  })
})
