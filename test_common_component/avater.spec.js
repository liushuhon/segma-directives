import {
    expect
} from 'chai'
import {
    mount
} from '@vue/test-utils'
import Avatar from '@/components/Avatar'

describe('测试avatar', () => {
    it('测试图片url是否传入', () => {
        const wrapper = mount(Avatar, {
            propsData: {
                src: 'https://ss0.bdstatic.com.jpg'
            }
        });
        // wrapper.setProps({src: 'https://ss0.bdstatic.com.jpg'})
        console.log(wrapper.vm.$props.src)
        expect(wrapper.vm.src).to.equal('https://ss0.bdstatic.com.jpg')
    })
})