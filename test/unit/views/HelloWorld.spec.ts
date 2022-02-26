import HelloWorld from '@/views/HelloWorld.vue'
import { mountComponent } from '@test/unit/testhelper'
import { VueWrapper } from '@vue/test-utils'

describe("HelloWorld.vue", () => {
    let wrapper: VueWrapper<InstanceType<typeof HelloWorld>>
    beforeEach(() => {
        wrapper = mountComponent(HelloWorld, { props: { msg: "foo bar"}, shallow: true})
    })

    afterEach(() => {
        wrapper?.unmount()
    })

    test("should mount", () => {
        expect(wrapper.findComponent(HelloWorld).exists()).toBe(true)
    })
})
