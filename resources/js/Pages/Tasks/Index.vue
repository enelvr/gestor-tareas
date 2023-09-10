<script setup>
import { ref, watch } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Pagination from '@/Components/Pagination/Index.vue';
import { useForm, router } from "@inertiajs/vue3";
import { pickBy, debounce } from 'lodash';

const props = defineProps({
  tasks: {
    type: Object,
    default: []
  }
})

const deleteItem = (task) => {
  task._method = "DELETE";
  router.delete(
    route("tasks.destroy", task.id)
  );
}

const formSearch = useForm({
  search: ref(''),
});


watch(formSearch, debounce(() => {
  router.replace(route('tasks.index', pickBy(formSearch), { preserveState: true }));
}, 150));

const columns = ref([
  {
    label: "Titulo",
    field: "title",
  },
  {
    label: "Descripción",
    field: "description",
  },
  {
    label: "Usuario",
    field: "user",
  },
]);

</script>
<template>
  <AppLayout title="Dashboard">
    <template #header>
        Tareas / Listado
    </template>
    <template #action-buttons>
          <Link :href="route('tasks.create')" class="btn btn-blue">Nuevo</Link>
    </template>
    <template #default>
      <div class="box mb-2">
        <div class="section">
          <div class="article-full">
            <input v-model="formSearch.search" label="Buscar" placeholder="Buscar..." />
          </div>
        </div>
      </div>
      <v-table :columns="columns" :data="tasks.data" :showActions="true">
        <template #actions="{ row }">
          <Link class="btn-xs btn-blue" title="Ver Registro!" :href="route('tasks.show', row.id)" tabindex="-1">
          <span class="icon">
            <icon icon="eye" />
          </span>
          </Link>
          <Link class="btn-xs btn-yellow" title="Editar Registro!" :href="route('tasks.edit', row.id)" tabindex="-1">
          <span class="icon">
            <icon icon="pen" />
          </span>
          </Link>
          <button @click="deleteItem(row)" class="btn-xs btn-red" title="Eliminar Registro!">
            <span class="icon">
              <icon icon="trash" />
            </span>
          </button>
        </template>
      </v-table>

      <pagination :links="tasks.links" />

    </template>
  </AppLayout>
</template>
