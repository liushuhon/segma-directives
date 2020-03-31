<template>
    <div class="long-str-cut-container">
        <div class="long-str-cut"
             @mousemove="handleMousemove"
             @dragover="handleDragover"
             @mouseleave="handleMouseleave">
            <slot></slot>
        </div>
        <div v-if="tipData"
             class="tip-data"
             :style="{ left: left + 'px',top: top + 'px' }">
            {{tipData}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'LongStrCut',
    data() {
        return {
            tipData: '',

            left: 0,
            top: 0
        };
    },
    methods: {
        handleMousemove(e) {
            let el = e.target;
            let text = this.$slots.default[0].text;
            if (el.scrollWidth > el.offsetWidth) {
                this.tipData !== text && (this.tipData = text);
                this.left = e.pageX + 10;
                this.top = e.pageY + 10;
            }
        },
        handleMouseleave() {
            this.tipData = '';
        },
        handleDragover() {
            this.tipData = '';
        }
    }
    // filters: {},
};
</script>
<style rel="stylesheet/scss"
       lang="less">
.long-str-cut-container {
    overflow: hidden;
    width: 100%;

    /* .hidden-text {
         display: none;
     } */

    .long-str-cut {
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .tip-data {
        /* 祖先元素不能使用transform，不然fixed定位会失效 */
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        border-radius: 2px;
        padding: 5px;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        text-indent: 0;

        /* 汉字和英文单词会自动换行 */

        /* 恶意的长英文会被认为是一个英文单词，就不会换行了 */

        /* 现将所有英文均处理成自动换行，会造成部分单词被截断换行 */
        word-wrap: break-word;
        color: #ffffff;
        background: rgba(0, 0, 0, 0.6);

        /* word-break: break-all; */
    }
}
</style>
