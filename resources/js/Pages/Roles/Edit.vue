<script setup>
import { ref, watch } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { useForm } from "@inertiajs/vue3";
import LButton from '@/Components/Button/LButton.vue';
import { showToast } from '@/helpers.js'


const props = defineProps({
    permisos: Object,
    role: Object
});

const permisos = ref(props.permisos);

const form = useForm({
    id: props?.role?.id || '',
    name: props?.role?.name || '',
    selectedPermisos: props?.role?.selectedPermisos || '',
});

const loading = ref(false);

const submit = () => {
    loading.value = true
    form.put(route("roles.update", form.id), {
        onStart: () => { loading.value = true },
        onError: (e) => { showToast(e) },
        onFinish: () => { loading.value = false },
    })
}
</script>
<template>
    <AppLayout title="Roles / Editar">
        <template #header>
            Roles / Editar
        </template>
        <template #action-buttons>
            <Link :href="route('roles.index')" class="btn btn-blue">Volver</Link>
        </template>
        <template #default>
            <div class="card">
                <h1 class="text-2xl font-semibold text-gray-800 border-b py-2 mb-4">Datos del rol</h1>

                <form @submit.prevent="submit">
                    <div class="section">

                        <div class="article-full">
                            <label class="label mb-1">Nombre del rol</label>
                            <input type="text" v-model="form.name" class="w-full" required placeholder="">
                        </div>
                    </div>

                    <div class="section">
                        <div class="article-full">
                            <label class="text-lg font-semibold text-gray-800 border-b py-2 mb-4">Permisos - tareas</label>
                            <ul>
                                <li v-for="item in permisos" :key="item.id">
                                    <label>
                                        <input type="checkbox" v-model="form.selectedPermisos" :value="item.name" />
                                        {{ item.name }}
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div class="section-reverse">
                        <l-button :disabled="loading" class="btn btn-blue" type="submit">Guardar!</l-button>
                    </div>
                </form>
            </div>
        </template>
    </AppLayout>
</template>

