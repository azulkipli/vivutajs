<script setup>
import { useRouter } from "vue-router"
</script>
<template>
  <header>
    <TopNavigation />
  </header>
  <main class="mt-2 p-7" :style="`background: ${useRouter().currentRoute.value.meta.bgColor};`">
    <RouterView />
  </main>
</template>
