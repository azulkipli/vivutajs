<script setup>
import { useRouter } from "vue-router"
</script>
<template>
  <header>
    <nav class="mt-1 p-2 px-5 fix500w">
      <RouterLink to="/" class="px-2 py-4 text-sm">Home</RouterLink>
      <RouterLink to="/about" class="px-2 py-4 text-sm">About</RouterLink>
    </nav>
  </header>
  <main
    class="mt-2 p-7 fix500w"
    :style="`background: ${useRouter().currentRoute.value.meta.bgColor};`"
  >
    <RouterView />
  </main>
</template>
<style scoped>
.fix500 {
  @apply w-[500px] mx-auto;
}
</style>
