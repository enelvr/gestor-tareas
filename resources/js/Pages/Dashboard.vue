<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>
        <template #default>
        <div class="card">
            <h1 class="text-2xl font-semibold text-gray-800">¡Bienvenido!</h1>
            <p class="text-md text-gray-800">
                Gestiona tus tareas con total seguridad y disponibilidad destacada.
            <div class="transform rotate-180">
                <icon icon="cog" class="w-10 h-10 transform rotate-180 text-blue-900"></icon>
            </div>
            </p>
        </div>
    </template>
    </AppLayout>
</template>
