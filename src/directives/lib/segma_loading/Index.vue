<!--Index-->
<template>
    <div class="custom-loading"
         :style="{backgroundColor}">
        <div class="custom-loading-round">
            <div class="custom-loading-text"
                 :style="{textColor}">{{text}}
            </div>
            <div class="custom-loading-icon">
                <img src="./segma_loading.svg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SegmaLoading',
    data() {
        return {
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            text: '',
            textColor: '#1890ff'
        }
    }
};
</script>

<style lang="less"
       scoped>
.custom-loading {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.65);
}

.custom-loading .custom-loading-round {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 55px;
}

.custom-loading-icon {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 30px;
    height: 30px;
}

.custom-loading-text {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    font-size: 14px;
    color: #1890ff;
    width: 100%;
    height: 20px;
}
</style>
