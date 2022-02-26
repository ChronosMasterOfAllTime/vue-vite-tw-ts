import { mount, MountingOptions } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createPinia } from 'pinia'

export function mountComponent<T>(component: T, options: MountingOptions<any> = {shallow: true}) {
    if (options.global?.plugins) {
        options.global.plugins.push(createPinia())
    } else {
        options.global = { ...(options.global || {}), plugins: [createPinia()]}
    } 

    return mount(component, options)
}
