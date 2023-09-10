<script setup>
import { ref, computed, watch } from 'vue';

const emit = defineEmits(['selected-rows']);

const props = defineProps({
  columns: Array,
  data: Array,
  showExpand: {
    type: Boolean,
    default: false,
  },
  showSelectAll: {
    type: Boolean,
    default: false,
  },
  showActions: {
    type: Boolean,
    default: false,
  },
});

const rows = ref(props.data.map(row => ({ ...row, selected: false })));
watch(() => props.data, (newData) => {
  rows.value = newData.map(row => ({ ...row, selected: false }));
});

const isEmpty = computed(() => rows.value.length === 0);

function emitSelectedRows() {
  const selectedRows = rows.value.filter(row => row.selected);
  emit('selected-rows', selectedRows);
}

function toggleExpand(row) {
  row.expanded = !row.expanded;
}

function toggleSelect(row) {
  row.selected = !row.selected;
  emitSelectedRows();
}

function toggleSelectAll() {
  if (props.showSelectAll) {
    const allSelected = rows.value.every(row => row.selected);
    rows.value.forEach(row => (row.selected = !allSelected));
    emitSelectedRows();
  }
}

const getColumnSpan = computed(() => {
  let span = props.columns.length;
  if (props.showSelectAll) span += 1;
  if (props.showExpand) span += 1;
  if (props.showActions) span += 1;
  return span;
});
</script>
<template>
  <div class="table-container">
    <table class="table">
      <thead class="bg-gray-100">
        <tr>
          <th v-if="showSelectAll" class="th-select">
            <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
          </th>
          <th v-if="showExpand" class="th-expand"></th>
          <th v-for="column in columns" :key="column.field" class="th-header">
            {{ column.label }}
          </th>
          <th v-if="showActions" class="th-action">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <!-- Mostrar mensaje si no hay registros -->
        <template v-if="isEmpty">
          <tr class="tr-no-records">
            <td :colspan="getColumnSpan" class="td-no-records">
              No se encontraron registros
            </td>
          </tr>
        </template>
        <template v-else v-for="(row, index) in rows" :key="row.id">
          <tr class="tr-row">
            <td v-if="showSelectAll" class="td-select">
              <input type="checkbox" v-model="row.selected" />
            </td>
            <td v-if="showExpand" class="td-expand">
              <button @click="toggleExpand(row)" class="btn-expand">
                {{ row.expanded ? '-' : '+' }}
              </button>
            </td>
            <td v-for="column in columns" :key="column.field" class="td-data text-sm">
              <template v-if="`table-${column.field}` in $slots">
                <slot :name="`table-${column.field}`" :row="row">
                </slot>
              </template>
              <template v-else>
                {{ row[column.field] }}
              </template>
            </td>
            <td v-if="showActions" class="td-action">
              <div class="flex justify-center items-center">
                <slot name="actions" :row="row"></slot>
              </div>
            </td>
          </tr>
          <tr v-if="row.expanded" :key="`${row.id}-expanded`" class="tr-expanded">
            <td :colspan="getColumnSpan" class="td-expanded">
              <slot name="expanded-row" :row="row"></slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
  
<style scoped>
/* Estilos similares a vue3-easy-datatable con Tailwind CSS */
.table-container {
  max-width: 100%;
  overflow-x: auto;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: white;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.th-select,
.td-select {
  width: 2rem;
  text-align: center;
}

.th-expand,
.td-expand {
  width: 2rem;
  text-align: center;
}

.th-header {
  text-align: left;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-bottom: 1px solid #e2e8f0;
  color: #3c3744;
}

.tr-row:nth-child(even) {
  background-color: #f7fafc;
}

.td-data {
  padding: 0.50rem 1rem;
  color: #3c3744;
}

.tr-expanded {
  background-color: #edf2f7;
}

.td-expanded {
  padding: 0.75rem;
  font-size: 0.875rem;
  border-top: 1px solid #cbd5e0;
  border-bottom: 1px solid #cbd5e0;
}

.descripcion-expandida {
  width: 100%;
  white-space: normal;
}

.btn-expand {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.btn-select-all {
  margin: 0.5rem 1rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
  background-color: white;
  font-size: 0.875rem;
  cursor: pointer;
}

.btn-select-all:hover {
  background-color: #f7fafc;
}

.th-action {
  border-bottom: 1px solid #e2e8f0;
  width: 3rem;
  text-align: center;
  padding-right: 0.85rem;
}

.td-action {
  width: 3rem;
  text-align: center;
}

.tr-no-records {
  text-align: center;
}

.td-no-records {
  padding: 1rem;
  font-weight: bold;
  color: #3c3744;
}
</style>
  