<script setup>
import { ref, watch } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { useForm } from "@inertiajs/vue3";


const props = defineProps({
    task: Object,
    users: Object
});

const form = useForm({
    id: props?.task?.id || '',
    title: props?.task?.title || '',
    description: props?.task?.description || '',
    user: props?.task?.user.name || ''
});

const loading = ref(false);

const submit = () => {
    loading.value = true
    form.put(route("tasks.update", form.id))
}
</script>
<template>
    <AppLayout title="Tareas / Editar">
        <template #header>
            Tareas / Editar
        </template>
        <template #action-buttons>
        <Link :href="route('tasks.index')" class="btn btn-blue">Volver</Link>
        </template>
        <template #default>
            <div class="card">
                <h1 class="text-2xl font-semibold text-gray-800 border-b py-2 mb-4">Datos de la tarea</h1>

                <form @submit.prevent="submit">
                    <div class="section">

                        <div class="article-full">
                            <label class="label mb-1">Titulo</label>
                            <input type="text" v-model="form.title" class="w-full" required placeholder="" disabled>
                        </div>
                    </div>

                    <div class="section">

                        <div class="article-full">
                            <label class="label mb-1">Descripción</label>
                            <textarea v-model="form.description" class="w-full" rows="10" disabled></textarea>
                        </div>

                    </div>

                    <div class="section-reverse">
                        <Link :href="route('tasks.index')" class="btn btn-blue">Volver</Link>
                    </div>
                </form>
            </div>
        </template>
    </AppLayout>
</template>

