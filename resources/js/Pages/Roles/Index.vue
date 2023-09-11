<script setup>
import { ref, watch } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Pagination from '@/Components/Pagination/Index.vue';
import { useForm, router } from "@inertiajs/vue3";
import { pickBy, debounce } from 'lodash';
import { showToast } from '@/helpers.js'

const props = defineProps({
  roles: {
    type: Object,
    default: []
  }
})

const deleteItem = (role) => {
  role._method = "DELETE";
  router.delete(
    route("roles.destroy", role.id), {
      onSuccess: () => {
        showToast()
      },
      onError: (error) => {
        showToast(error)
      } 
    }
  );
}

const formSearch = useForm({
  search: ref(''),
});


watch(formSearch, debounce(() => {
  router.replace(route('roles.index', pickBy(formSearch), { preserveState: true }));
}, 150));

const columns = ref([
  {
    label: "Roles",
    field: "name",
  },
  {
    label: "Permisos",
    field: "permisos",
  },
]);

</script>
<template>
  <AppLayout title="Dashboard">
    <template #header>
        Roles / Listado
    </template>
    <template #action-buttons>
          <Link :href="route('roles.create')" class="btn btn-blue">Nuevo</Link>
    </template>
    <template #default>
      <div class="box mb-2">
        <div class="section">
          <div class="article-full">
            <input v-model="formSearch.search" label="Buscar" placeholder="Buscar..." />
          </div>
        </div>
      </div>
      <v-table :columns="columns" :data="roles.data" :showActions="true">
        <template #actions="{ row }">
          <Link class="btn-xs btn-yellow" title="Editar Registro!" :href="route('roles.edit', row.id)" tabindex="-1">
          <span class="icon">
            <icon icon="pen" />
          </span>
          </Link>
          <button v-if="roles.data.length > 1" @click="deleteItem(row)" class="btn-xs btn-red" title="Eliminar Registro!">
            <span class="icon">
              <icon icon="trash" />
            </span>
          </button>
        </template>
      </v-table>

      <pagination :links="roles.links" />

    </template>
  </AppLayout>
</template>
