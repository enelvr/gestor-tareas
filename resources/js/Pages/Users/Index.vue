<script setup>
import { ref, watch } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Pagination from '@/Components/Pagination/Index.vue';
import { useForm, router } from "@inertiajs/vue3";
import { pickBy, debounce } from 'lodash';
import { showToast } from '@/helpers.js'

const props = defineProps({
  users: {
    type: Object,
    default: []
  }
})

const deleteItem = (user) => {
  user._method = "DELETE";
  router.delete(
    route("users.destroy", user.id), {
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
  router.replace(route('users.index', pickBy(formSearch), { preserveState: true }));
}, 150));

const columns = ref([
  {
    label: "Nombre",
    field: "name",
  },
  {
    label: "Email",
    field: "email",
  },
  {
    label: "Roles",
    field: "rol",
  },
]);

</script>
<template>
  <AppLayout title="Dashboard">
    <template #header>
        Usuarios / Listado
    </template>
    <template #action-buttons>
          <Link :href="route('users.create')" class="btn btn-blue">Nuevo</Link>
    </template>
    <template #default>
      <div class="box mb-2">
        <div class="section">
          <div class="article-full">
            <input v-model="formSearch.search" label="Buscar" placeholder="Buscar..." />
          </div>
        </div>
      </div>
      <v-table :columns="columns" :data="users.data" :showActions="true">
        <template #actions="{ row }">
          <Link class="btn-xs btn-yellow" title="Editar Registro!" :href="route('users.edit', row.id)" tabindex="-1">
          <span class="icon">
            <icon icon="pen" />
          </span>
          </Link>
          <button v-if="users.data.length > 1" @click="deleteItem(row)" class="btn-xs btn-red" title="Eliminar Registro!">
            <span class="icon">
              <icon icon="trash" />
            </span>
          </button>
        </template>
      </v-table>

      <pagination :links="users.links" />

    </template>
  </AppLayout>
</template>
