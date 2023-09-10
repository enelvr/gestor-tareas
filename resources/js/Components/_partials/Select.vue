<script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    label: {
        type: String,
        default: null,
    },
    modelValue: {
        default: null,
    },
    items: {
        type: Array,
        default: [],
    },
    itemKey: {
        type: String,
        default: 'id',
    },
    itemLabel: {
        type: String,
        default: 'name',
    },
    errorMessage: {
        default: '',
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
})

  const emit = defineEmits(['update:modelValue']);
  
  const errorId = `error-${Math.random().toString(36).substring(7)}`;
  const showErrorMessage = computed(() => props.errorMessage && props.errorMessage.trim());
  
  const proxyValue = computed({
    get() {
        return props.modelValue;
    },

    set(val) {
        emit("update:modelValue", val);
    },
    });
  
  const handleChange = () => {
    emit('change', proxyValue.value);
  };
  
  const handleEnter = () => {
    emit('enter', proxyValue.value);
  };
  </script>
<template>
    <div>
      <label v-if="label" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <select
        v-model="proxyValue"
        :multiple="multiple"
        :disabled="isDisabled"
        @change="handleChange"
        @keydown.enter.prevent="handleEnter"
        class="w-full"
        :aria-label="label"
      >
        <option
          v-for="item in items"
          :key="item[itemKey]"
          :value="item[itemKey]"
        >{{ item[itemLabel] }}</option>
      </select>
      <p
        v-if="showErrorMessage"
        class="mt-2 text-sm text-red-600"
        :id="errorId"
      >
        {{ errorMessage }}
      </p>
    </div>
  </template>