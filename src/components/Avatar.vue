<template>
    <div class="avatar">
        <img :src="src"
             alt="">
    </div>
</template>
<script>
export default {
    // el() {},
    // components: {},
    // directives: {},
    // filters: {},
    props: {
        src: {
            default: '',
            required: false
        }
    }
    // propsData: {},
    // data() {},
    // computed: {},
    // watch: {},
    // mounted() {},
    // created() {},
    // updated() {},
    // activated() {},
    // deactivated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // methods: {},
    // template: '',
    // render() {},
};
</script>
<style rel="stylesheet/less"
       lang="less"
       scoped>
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