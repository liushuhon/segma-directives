let expect = require('chai').expect;
import Vue from 'vue';
import Element from 'element-ui';
import Directives from '../src/directives';
import TestLoading from '../src/views/SegmaLoading';
import {
    mount
} from '@vue/test-utils';

Vue.use(Directives);
Vue.use(Element);
import {
    createVue,
    destroyVM
} from './util';
describe('Loading', () => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });
    it('默认背景无文字的loading', (done) => {
        vm = createVue({
            template: `
            <div v-segma-loading="loading"></div>
          `,
            data() {
                return {
                    loading: true
                };
            }
        });
        Vue.nextTick(() => {
            const mask = vm.$el.querySelector('.custom-loading');
            const text = vm.$el.querySelector('.custom-loading-text');
            expect(mask).to.exist;
            expect(text).to.not.exist;
            expect(mask.style.backgroundColor).to.equal('rgba(255, 255, 255, 0.65)');
            vm.loading = false;
            setTimeout(() => {
                expect(vm.$el.querySelector('.custom-loading')).to.not.exist;
                done();
            }, 100);
        });
    });
    it('有文字的loading', () => {
        vm = createVue({
            template: `
            <div v-segma-loading="loading" segma-loading-text="拼命加载中"></div>
          `,
            data() {
                return {
                    loading: true
                };
            }
        });
        const mask = vm.$el.querySelector('.custom-loading');
        const text = vm.$el.querySelector('.custom-loading-text');
        expect(mask).to.exist;
        expect(text).to.exist;
        expect(text.textContent).to.equal('拼命加载中');
    });
    it('设置了背景的loading', () => {
        vm = createVue({
            template: `
            <div v-segma-loading="loading" segma-loading-text="拼命加载中" segma-loading-background="red"></div>
          `,
            data() {
                return {
                    loading: true
                };
            }
        });
        const mask = vm.$el.querySelector('.custom-loading');
        const text = vm.$el.querySelector('.custom-loading-text');
        expect(mask).to.exist;
        expect(text).to.exist;
        expect(mask.style.backgroundColor).to.equal('red');
        expect(text.textContent).to.equal('拼命加载中');
    });
    it('unbind', (done) => {
        const wrapper = mount(TestLoading);
        Vue.nextTick(() => {
            wrapper.find('button').trigger('click')
            expect(wrapper.vm.loading).to.be.true;
            done();
        })
    });
});