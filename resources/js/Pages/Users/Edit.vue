<script setup>
import { ref, watch } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { useForm } from "@inertiajs/vue3";
import LButton from '@/Components/Button/LButton.vue';
import Select from '@/Components/_partials/Select.vue';
import { showToast } from '@/helpers.js'


const props = defineProps({
    user: Object,
    roles: Object,
});

const permisos = ref(props.permisos);

const form = useForm({
    id: props?.user?.id || '',
    name: props?.user?.name || '',
    email: props?.user?.email || '',
    password: '',
    rol: props?.user?.rol || '',
});

const loading = ref(false);

const submit = () => {
    loading.value = true
    form.put(route("users.update", form.id), {
        onStart: () => { loading.value = true },
        onError: (e) => { showToast(e) },
        onFinish: () => { loading.value = false },
    })
}
</script>
<template>
    <AppLayout title="Usuarios / Editar">
        <template #header>
            Usuarios / Editar
        </template>
        <template #action-buttons>
        <Link :href="route('users.index')" class="btn btn-blue">Volver</Link>
        </template>
        <template #default>
            <div class="card">
                <h1 class="text-2xl font-semibold text-gray-800 border-b py-2 mb-4">Datos del usuario</h1>

                <form @submit.prevent="submit">
                    <div class="section">

                        <div class="article">
                            <label class="label mb-1">Nombre</label>
                            <input type="text" v-model="form.name" class="w-full" required placeholder="">
                        </div>

                        <div class="article">
                            <label class="label mb-1">Rol</label>
                            <Select v-model="form.rol" :items="roles" itemLabel="name" itemKey="name"></Select>
                        </div>

                    </div>

                    <div class="section">

                        <div class="article">
                            <label class="label mb-1">Email</label>
                            <input type="text" v-model="form.email" class="w-full" required placeholder="">
                        </div>

                        <div class="article">
                            <label class="label mb-1">Contraseña</label>
                            <input type="password" v-model="form.password" class="w-full">
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

