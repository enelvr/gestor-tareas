<script setup>
import { ref } from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import { useForm } from "@inertiajs/vue3";
import LButton from '@/Components/Button/LButton.vue';
import Select from '@/Components/_partials/Select.vue';

const props = defineProps({
    roles: Object,
})

const roles = props?.roles;

const form = useForm({
    name: '',
    rol: '',
    email: '',
    password: '',
});

const loading = ref(false);

const submit = () => {

    form.post(route("users.store"), {
        onStart: () => loading.value = true,
        onFinish: () => loading.value = false
    });
}

</script>
<template>
    <AppLayout title="Usuarios / Nuevo">
        <template #header>
            Usuario / Nuevo
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
                            <label class="label mb-1">Roles</label>
                            <Select v-model="form.rol" :items="roles" :itemLabel="name" :itemKey="name"></Select>
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
