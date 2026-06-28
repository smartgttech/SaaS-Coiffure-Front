<script setup lang="ts">
const title = ref<string>('Mon App Nuxt 4')
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center p-8">
    <h1 class="text-4xl font-bold text-indigo-600">
      {{ title }}
    </h1>
    <p class="mt-4 text-gray-500">
      Nuxt 4 · Vue 3 · TypeScript · TailwindCSS v4
    </p>
  </main>
</template>