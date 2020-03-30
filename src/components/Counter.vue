<template>
    <div>
        {{count}}
        <button @click="increment">自增</button>
    </div>
</template>

<script>
export default {
    name: "Counter",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            // let _this = this;
            return new Promise((resolve, reject) => {
                if (this.count === 0) {
                    resolve(1);
                } else {
                    reject('error')
                }
            }).then(() => {
                this.count++;
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>

</style>
