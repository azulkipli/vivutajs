<script setup>
import { useRouter } from "vue-router"
</script>
<template>
  <header>
    <nav class="mt-1 p-2 px-5 w-100 mx-auto">
      <RouterLink to="/" class="px-2 py-4 text-sm">Home</RouterLink>
      <RouterLink to="/about" class="px-2 py-4 text-sm">About</RouterLink>
    </nav>
  </header>
  <main
    class="mt-2 w-100 p-7"
    :style="`background: ${useRouter().currentRoute.value.meta.bgColor};`"
  >
    <router-view />
  </main>
</template>
