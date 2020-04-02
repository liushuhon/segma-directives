import {
    mount
} from '@vue/test-utils'
import Counter from '../src/views/Counter'
import {
    expect
} from 'chai'
import Vue from 'vue'

describe('Counter', () => {
    //现在挂载组件，你便得到了这个包裹器
    let wrapper;
    it('renders the correct markup', () => {
        wrapper = mount(Counter);
        expect(wrapper.html()).to.include('<span class="count">0</span>')
    })

    //也便于检查已存在的元素
    it('has a button', () => {
        wrapper = mount(Counter);
        expect(wrapper.contains('button')).to.be.true;
    })


    // 在测试框架中，编写一个测试用例
    it('button click should increment the count text', async () => {
        wrapper = mount(Counter);
        expect(wrapper.text()).to.include('0')
        const button = wrapper.find('button')
        button.trigger('click')
        await Vue.nextTick()
        expect(wrapper.text()).to.include('1')
    })

    it('button click should increment the count text2', (done) => {
        wrapper = mount(Counter);
        expect(wrapper.text()).to.include('0')
        const button = wrapper.find('button')
        button.trigger('click')
        // 等待Dom更新后在执行断言语句
        Vue.nextTick(() => {
            expect(wrapper.text()).to.include('1')
            done()
        })
    })

    it('will time out', done => {
        Vue.nextTick(() => {
            expect(true).to.be.false
            done()
        })
    })
    it('will catch the error using done', done => {
        Vue.config.errorHandler = done
        Vue.nextTick(() => {
            expect(true).to.be.false
            done()
        })
    })
    it('will catch the error using a promise', () => {
        return Vue.nextTick().then(function () {
            expect(true).to.be.false
        })
    })
    it('will catch the error using async/await', async () => {
        await Vue.nextTick()
        expect(true).to.be.false
    })
})