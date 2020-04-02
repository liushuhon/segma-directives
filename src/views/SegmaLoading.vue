<template>
    <div>
        <div class="segma-loading" v-segma-loading="loading"></div>
        <el-button @click="loading = !loading">11</el-button>
    </div>
</template>

<script>
export default {
    name: "SegmaLoading",
    data() {
        return {
            loading: false
        };
    }
};
</script>

<style>
body {
    padding: 0;
}
</style>
<style scoped>
.segma-loading {
    width: 500px;
    height: 300px;
}
</style>
