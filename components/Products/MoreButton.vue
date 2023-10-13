<template>
    <div class="d-flex justify-content-center mx-5 mx-sm-0 pt-1">
        <button type="button" @click="$emit('incrementCards')" class="button-txt flex-fill btn btn-outline-secondary">More
            +</button>
    </div>
</template>
<script setup lang="ts">

defineEmits<{
    (e: 'incrementCards'): void
}>()

</script>

<style scoped lang="scss">
.btn-outline-secondary {
    border-radius: 0 !important;
}

.button-txt {
    @apply text-2xl
}

</style>