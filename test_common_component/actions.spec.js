    import { shallowMount, createLocalVue } from '@vue/test-utils'
    import Vuex from 'vuex'
    import Actions from '@/components/Actions'

    const localVue = createLocalVue()

    localVue.use(Vuex)

    describe('Actions.vue', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
        actionClick: sinon.spy(),
        actionInput: sinon.spy(),
        }
        store = new Vuex.Store({
        state: {},
        actions,
        })
    })

  it('dispatches "actionInput" when input event value is "input"', () => {
    const wrapper = shallowMount(Actions, {
      store,
      localVue,
    })
    const input = wrapper.find('input')
    input.element.value = 'input'
    input.trigger('input')
    actions.actionInput.should.have.been.called
  })

  it('does not dispatch "actionInput" when event value is not "input"', () => {
    const wrapper = shallowMount(Actions, {
      store,
      localVue,
    })
    const input = wrapper.find('input')
    input.element.value = 'not input'
    input.trigger('input')
    actions.actionInput.should.not.have.been.called
  })

  it('calls store action "actionClick" when button is clicked', () => {
    const wrapper = shallowMount(Actions, {
      store,
      localVue,
    })
    wrapper.find('button').trigger('click')
    actions.actionClick.should.have.been.called
  })
})
