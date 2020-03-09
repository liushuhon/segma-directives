<template>
    <div class="about">test
        <el-input v-model="abcVal"
                  v-number="{}"
                  size="small"></el-input>
        <h1>This is an about page</h1>
    </div>
</template>
<script>

export default {
    name: 'About',
    data() {
        return {
            abcVal: '12'
        }
    }
}
</script>
