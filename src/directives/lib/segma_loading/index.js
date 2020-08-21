import Vue from 'vue';
import Component from './Index.vue';

const Mask = Vue.extend(Component);

const getElementStyle = (obj, attr) => {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
};

const toggleLoading = function (el, binding) {
    if (binding.value) {
        Vue.nextTick(() => {
            const position = getElementStyle(el, 'position');
            if (position !== 'absolute' && position !== 'relative') {
                el.style.position = 'relative';
            }
            el.appendChild(el.mask);
        });
    } else {
        //移除节点
        el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
        el.instance && el.instance.$destroy();
    }
};

export default {
    name: 'segmaLoading',
    directive: {
        bind (el, binding, Vnode) {
            const backgroundElem = el.getAttribute('segma-loading-background');
            const textElem = el.getAttribute('segma-loading-text');
            const vm = Vnode.context;
            const mask = new Mask({
                el: document.createElement('div'),
                data: {
                    backgroundColor: vm && vm[backgroundElem] || backgroundElem,
                    text: vm && vm[textElem] || textElem
                }
            });
            el.instance = mask;
            el.mask = mask.$el;
            toggleLoading(el, binding);
        },
        update (el, binding) {
            if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding);
            }
        },
        //只调用一次，指令与元素解绑时调用
        unbind (el) {
            el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
            el.instance && el.instance.$destroy();
        }
    }
}
