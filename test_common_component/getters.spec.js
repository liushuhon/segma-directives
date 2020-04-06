import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Getters from '@/components/Getters'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Getters.vue', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      clicks: () => 2,
      inputValue: () => 'input',
    }
    store = new Vuex.Store({
      getters,
    })
  })

  it('Renders "store.getters.inputValue" in first p tag', () => {
    const wrapper = shallowMount(Getters, {
      store,
      localVue,
    })
    const p = wrapper.find('p')
    expect(p.text()).to.equal(getters.inputValue())
  })

  it('Renders "store.getters.clicks" in second p tag', () => {
    const wrapper = shallowMount(Getters, {
      store,
      localVue,
    })
    const p = wrapper.findAll('p').at(1)
    expect(p.text()).to.equal(getters.clicks().toString())
  })
})
