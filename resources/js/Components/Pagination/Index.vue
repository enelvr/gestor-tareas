<script setup>
  const props = defineProps({
    links: {
      type:  Array,
    },

    data: {
      type: Object,
    }
  });
</script>
<template>
  <div v-if="links.length > 3">
  <div class="mt-4 -mb-1 flex flex-wrap bg-white p-2 shadow w-full">
    <template
        v-for="(link, p) in links"
        :key="p"
      >
        <div
          v-if="link.url === null"
          class="bg-white mr-1 mb-1 px-2 py-1 text-sm leading-4 text-gray-400 border rounded"
          v-html="link.label"
        />
        <Link
          v-else
          class="bg-white mr-1 mb-1 px-2 py-1 text-sm leading-4 border rounded focus:border-indigo-500 focus:text-indigo-500"
          :class="{ 'text-white bg-blue hover:font-semibold': link.active, 'hover:bg-acents hover:font-semibold': !link.active }"
          :href="link.url"
          v-html="link.label"
          preserve-scroll
          :data="data"
        />
      </template>
  </div>
</div>
</template>
