<template>
    <div>
        <div class="segma-loading"
             v-segma-loading="loading"></div>
        <div @click="loading=!loading">loading</div>
    </div>

</template>

<script>
export default {
    name: "SegmaLoading",
    data() {
        return {
            loading: false
        }
    },
}
</script>

<style scoped>
.segma-loading {
    width: 200px;
    height: 500px;
    margin: 0 auto;
    background-color: #eeeeee;
}

</style>
