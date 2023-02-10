<script setup>
import { /* RouterLink, */ RouterView } from "vue-router"
</script>

<template>
  <main>
    <RouterView class="mt-5 p-5 w-[500px] mx-auto border" />
  </main>
</template>
<style>
.router-link-exact-active {
  @apply underline;
}
</style>
