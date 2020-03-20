/**
 * Created by cld on 2020/3/20.
 */
// js 文件
import '../css/segma_loading.css';
import segma_loading from '../image/segma_loading.svg';

function getElementStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

export default {
    inserted: (el, binding, Vnode) => {
        const bgColor = Vnode.data.attrs['segma-loading-background']
        const text = Vnode.data.attrs['segma-loading-text']
        console.log(el, binding, Vnode)
        //背景框
        const tempDiv = document.createElement('div');
        tempDiv.className = 'custom-loading';
        tempDiv.style.backgroundColor = bgColor
        //loading总区域
        const roundDiv = document.createElement('div');
        roundDiv.className = 'custom-loading-round';
        //loading图
        const roundEle = document.createElement('div');
        roundEle.innerHTML = `<img src=${segma_loading}>`;
        roundEle.className = 'custom-loading-icon';
        //文字区域
        const textEle = document.createElement('div');
        textEle.innerHTML = text;
        textEle.className = 'custom-loading-text';
        //注册
        roundDiv.appendChild(roundEle);
        roundDiv.appendChild(textEle);
        tempDiv.appendChild(roundDiv);
        el.loadingElement = tempDiv;

        const position = getElementStyle(el, 'position');
        if (position !== 'absolute' && position !== 'relative') {
            el.style.position = 'relative';
        }
        if (binding.value) {
            el.appendChild(tempDiv);
        }
    },
    update: (el, binding) => {
        if (binding.value) {
            if (el.loadingElement.parentNode === null) {
                el.appendChild(el.loadingElement);
            }
        } else {
            if (el === el.loadingElement.parentNode) {
                el.removeChild(el.loadingElement);
            }
        }
    },
    unbind: (el) => {
        if (el.loadingElement.parentNode === el) {
            el.removeChild(el.loadingElement);
        }
        el.loadingElement = null;
    }
};
