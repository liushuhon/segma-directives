import {
    expect
} from 'chai';
import Element from 'element-ui';
import Directives from '../src/directives';
import TestLoading from '../src/views/SegmaLoading';
import {
    mount,
    createLocalVue
} from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Directives);
localVue.use(Element);
describe('Loading组件测试', () => {
    it('loding设为true', async () => {
        const wrapper = mount({
            template: `
            <div v-segma-loading="loading"></div>
          `,
            data() {
                return {
                    loading: true
                };
            }
        }, {
            localVue
        })
        const mask = wrapper.find('.custom-loading');
        const text = wrapper.find('.custom-loading-text');
        expect(mask.exists()).to.be.true;
        expect(text.exists()).to.be.false;
        expect(mask.attributes('style')).to.contain('background-color: rgba(255, 255, 255, 0.65)');
        wrapper.vm.$data.loading = false;
        expect(wrapper.vm.$data.loading).to.be.false;
        await localVue.nextTick();
        expect(wrapper.find('.custom-loading').exists()).to.be.false;
    });
    it('loading设为false', async () => {
        const wrapper = mount({
            template: `
            <div v-segma-loading="loading"></div>
          `,
            data() {
                return {
                    loading: false
                };
            }
        }, {
            localVue
        })
        const mask = wrapper.find('.custom-loading');
        expect(mask.exists()).to.be.false;
    });
    it('有文字的loading', () => {
        const wrapper = mount({
            template: `
            <div v-segma-loading="loading" segma-loading-text="拼命加载中"></div>
          `,
            data() {
                return {
                    loading: true
                };
            }
        }, {
            localVue
        });
        const mask = wrapper.find('.custom-loading');
        const text = wrapper.find('.custom-loading-text');
        expect(mask).to.exist;
        expect(text).to.exist;
        expect(text.text()).to.equal('拼命加载中');
    });
    it('设置了背景的loading', () => {
        const wrapper = mount({
            template: `
            <div v-segma-loading="loading" segma-loading-text="拼命加载中" segma-loading-background="red"></div>
          `,
            data() {
                return {
                    loading: true
                };
            }
        }, {
            localVue
        });
        const mask = wrapper.find('.custom-loading');
        const text = wrapper.find('.custom-loading-text');
        expect(mask).to.exist;
        expect(text).to.exist;
        expect(mask.attributes('style')).to.contain('background-color: red');
        expect(text.text()).to.equal('拼命加载中');
    });
    it('unbind', () => {
        const wrapper = mount(TestLoading, {
            localVue
        });
        wrapper.find('button').trigger('click');
        expect(wrapper.vm.loading).to.be.true;
    });
});