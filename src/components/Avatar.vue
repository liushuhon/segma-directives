<template>
    <div class="avatar">
        <img :src="src" alt="" />
    </div>
</template>
<script>
export default {
    name: "Avatar",
    props: {
        src: {
            default: "",
            required: false
        }
    }
};
</script>
<style lang="less" scoped>
.avatar {
    overflow: hidden;
    border: 1px solid rgba(229, 229, 229, 1);
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background: rgba(245, 245, 245, 1);

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
