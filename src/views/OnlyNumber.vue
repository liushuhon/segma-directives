<template>
    <div class="about">
        <el-input v-model="value"
                  v-number="{}"
                  size="small"></el-input>
    </div>
</template>
<script>

export default {
    name: 'OnlyNumber',
    data() {
        return {
            value: '12'
        }
    }
}
</script>
