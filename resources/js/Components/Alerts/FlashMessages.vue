<script setup>
    import { usePage } from '@inertiajs/vue3'
    import { watch, ref, onMounted } from 'vue';
    import { showToast } from '@/helpers.js'

    const messages = usePage().props;
    
    onMounted(() => {
        showToast()
    })

    watch(messages, () => {
        showToast()
    })
       
</script>
<template>
</template>