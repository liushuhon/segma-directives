<template>
    <div class="about">
        <el-input v-model="value"
                  v-number="{}"
                  size="small"></el-input>
        <el-input v-model="value2"
                  size="small"></el-input>
    </div>
</template>
<script>

export default {
    name: 'OnlyNumber',
    data() {
        return {
            value: 12,
            value2: 2
        }
    },
    watch: {
        value(val) {
            // this.value = this.filterInput(val);
            console.log(typeof val)
        },
        value2(val) {
            console.log(typeof val)
        }
    },
    methods: {
        filterInput(val) {
            if (!val) {
                return;
            }
            // 替换除汉字字母数字和指定的字符或特殊符号外的所有内容
            return val.toString().replace(/[^\d.]/g, '');
        }
    }
}
</script>
