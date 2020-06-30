import {
    mount
} from '@vue/test-utils'
import Button from '@/components/Button'

describe('Click event', () => {
    it('Click on yes button calls our method with argument "yes"', () => {
        const spy = sinon.spy()
        const wrapper = mount(Button, {
            propsData: {
                callMe: spy
            }
        })
        wrapper.find('button.yes').trigger('click')
        expect(true).to.be.true;
        spy.should.have.been.calledWith('yes')
    })
})