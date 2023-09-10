<template>
    <button :disabled="isDisabled" class="flex items-center disabled:bg-gray-600">
      <div v-if="isDisabled" class="btn-spinner mr-2" />
      <slot />
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    disabled: Boolean,
  });
  
  const isDisabled = computed(() => props.disabled);
  </script>