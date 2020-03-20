<template>
    <div class="segma-loading"
         segma-loading-text="拼命加载中"
         segma-loading-spinner="el-icon-loading"
         segma-loading-background="rgba(0, 0, 0, 0.2)"
         v-segma-loading="true"></div>
</template>

<script>
export default {
    name: "SegmaLoading"
}
</script>

<style scoped>
.segma-loading {
    width: 200px;
    height: 500px;
    margin: 0 auto;
}

</style>