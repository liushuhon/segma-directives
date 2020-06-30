<template>
    <avatar :src="headImgUrl"></avatar>
</template>

<script>
export default {
    Avatar: () => import("@/components/Avatar.vue")
};
</script>

<style></style>
