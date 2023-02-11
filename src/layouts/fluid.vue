<script setup>
import { useRouter } from "vue-router"
</script>
<template>
  <header>
    <TopNavigation />
  </header>
  <main
    class="mt-2 w-100 p-7"
    :style="`background: ${useRouter().currentRoute.value.meta.bgColor};`"
  >
    <router-view />
  </main>
</template>
